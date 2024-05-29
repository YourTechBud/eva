import { EllipsisHorizontalIcon } from '@heroicons/react/16/solid';
import { CalendarIcon, MapPinIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { useState } from 'react';

import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from '@/components/dropdown';
import { Heading } from '@/components/heading';
import { formatDay, formatTime } from '@/lib/date';
import FocusedItem from '@/widgets/focused-item';
import Task from '@/widgets/task';

export default function Today() {
  const [isTasksHovered, setTasksHovered] = useState(false);
  const effortArray = ['Intense', 'Medium', 'Light'];
  const tasks = [
    {
      id: 1,
      title: 'Write blog post for Redis Write Through Cache',
      description: 'Base it off of our YouTube video on the topic.',
      completed: false,
      priority: 4,
      effort: 2,
    },
    {
      id: 2,
      title: 'Review XLR8s PRs',
      completed: false,
      priority: 1,
      effort: 1,
      dueDate: '2024-05-28T00:10:01-07:00',
    },
    {
      id: 3,
      title:
        'A story from Ahmed Besbes on Medium Read this story from Ahmed Besbes on Medium: Improve RAG Pipelines With These 3 Indexing Methods',
      description:
        'This is a story from Ahmed Besbes on Medium. Read this story from Ahmed Besbes on Medium: Improve RAG Pipelines With These 3 Indexing Methods',
      completed: false,
      priority: 2,
      effort: 2,
      dueDate: '2024-05-08T00:10:01-07:00',
    },
  ];

  const effortList = effortArray
    .map((effort, i) => {
      return {
        effort,
        tasks: tasks.filter(t => t.effort === 2 - i),
      };
    })
    .filter(e => e.tasks.length > 0);

  const meetings = [
    {
      id: 1,
      dateFrom: '2024-05-08T10:30:01-07:00',
      dateTo: '2024-05-08T11:30:01-07:00',
      name: 'K8s Daily Stand Up',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      location: 'G Meet',
    },
    {
      id: 2,
      dateFrom: '2024-05-08T11:30:01-07:00',
      dateTo: '2024-05-08T12:30:01-07:00',
      name: 'My Second Super Long Meeting',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      location: 'Teams',
    },
  ];
  return (
    <>
      <div
        onMouseEnter={() => setTasksHovered(true)}
        onMouseLeave={() => setTasksHovered(false)}
        className={clsx(
          'w-[100vw] overflow-y-auto pb-4 pl-10 pr-10 lg:my-3 lg:w-[50%] lg:rounded-lg lg:bg-white lg:shadow-sm lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10',
          isTasksHovered ? 'on-scroll-hover' : '',
        )}
      >
        <div className="top-0 z-10 bg-white pb-2 pt-2 lg:pt-10">
          <div className="sm:mt-2 md:flex md:items-center md:justify-between">
            <div className="min-w-0 flex-1">
              <Heading>Day at a Glance</Heading>
            </div>
          </div>
        </div>
        <div className="h-2"></div>
        <div>
          <FocusedItem title="K8s Daily Stand Up" type="meeting" />
          <div className="h-4"></div>
          {effortList.map(({ effort, tasks }) => (
            <div key={effort}>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  {effort}
                </h3>
              </div>

              <ul role="list" className="divide-y divide-gray-100">
                {tasks
                  // TODO: Sort first by due date and then by priority.
                  .sort((a, b) => a.priority - b.priority)
                  .map(task => (
                    <li key={task.id}>
                      <Task task={task} />
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="my-3 hidden overflow-y-auto lg:block lg:w-[50%] lg:rounded-lg lg:bg-white lg:pb-10 lg:pl-10 lg:pr-10 lg:shadow-sm lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10">
        <div className="top-0 z-10 bg-white pt-10">
          <div className="sm:mt-2 md:flex md:items-center md:justify-between">
            <div className="min-w-0 flex-1 border-b border-gray-200 pb-4">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                My Meetings
              </h3>
            </div>
          </div>
        </div>
        <ol className="divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
          {meetings.map(meeting => (
            <li key={meeting.id} className="relative py-6 xl:static">
              <div className="flex space-x-6">
                <div className="flex-auto">
                  <p className="text-xs text-gray-500">
                    {formatDay(meeting.dateFrom)}
                  </p>
                  <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">
                    {meeting.name}
                  </h3>
                  <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
                    <div className="flex items-start space-x-3">
                      <dt className="mt-0.5">
                        <span className="sr-only">Date</span>
                        <CalendarIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </dt>
                      <dd>
                        <time dateTime={meeting.dateFrom}>
                          {formatTime(meeting.dateFrom)} to{' '}
                          {formatTime(meeting.dateTo)}
                        </time>
                      </dd>
                    </div>
                    <div className="mt-2 flex items-start space-x-3 xl:ml-3.5 xl:mt-0 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                      <dt className="mt-0.5">
                        <span className="sr-only">Location</span>
                        <MapPinIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </dt>
                      <dd>{meeting.location}</dd>
                    </div>
                  </dl>
                </div>
                <div className="absolute  right-0 top-6 cursor-pointer xl:relative xl:right-auto xl:top-auto xl:self-center">
                  <Dropdown>
                    <DropdownButton
                      className="h-5 w-5 text-gray-500 hover:text-gray-600"
                      as={EllipsisHorizontalIcon}
                      aria-label="Account options"
                    />
                    <DropdownMenu anchor="bottom">
                      <DropdownItem>View Details</DropdownItem>
                      <DropdownItem>Dismiss</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>

              <div className="h-6"></div>

              <div className="isolate flex -space-x-1 overflow-hidden">
                <img
                  className="relative z-30 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="relative z-20 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="relative z-10 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="relative z-0 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
