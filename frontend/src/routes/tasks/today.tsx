import clsx from 'clsx';
import { useState } from 'react';

import PageHeading from '@/components/page-heading';
import PagePanel from '@/components/page-panel';
import EventList from '@/widgets/events/event-list';
import FocusedItem from '@/widgets/focused-item';
import ProjectList from '@/widgets/projects/project-list';
import TaskListing from '@/widgets/tasks/task-listing';

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

const events = [
  {
    id: 1,
    dateFrom: '2024-05-08T10:30:01-07:00',
    dateTo: '2024-05-08T11:30:01-07:00',
    name: 'K8s Daily Stand Up',
    location: 'G Meet',
    attendees: [
      {
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
  },
  {
    id: 2,
    dateFrom: '2024-05-08T11:30:01-07:00',
    dateTo: '2024-05-08T12:30:01-07:00',
    name: 'My Second Super Long Meeting',
    location: 'Teams',
    attendees: [],
  },
  {
    id: 3,
    dateFrom: '2024-05-08T11:30:01-07:00',
    dateTo: '2024-05-08T13:30:01-07:00',
    name: 'End This Already',
    location: 'G Meet',
    attendees: [
      {
        name: 'Ahmed Besbes',
      },
      {
        name: 'Karthik Sankar',
      },
      {
        name: 'Suzanne Aitchison',
      },
    ],
  },
];

const projects = [
  {
    id: 1,
    title: 'Get in Shape!',
    tasksRemaining: 0,
    status: 'active',
    totalComments: 24,
    totalNotes: 10,
  },
  {
    id: 2,
    title: 'Create Task Management Module in Eva',
    dueDate: '2023-01-23T22:34Z',
    tasksRemaining: 1,
    status: 'active',
    totalComments: 6,
    totalNotes: 1,
  },
];

export default function Today() {
  // Move the scrollbar logic into the page-content component
  const [isTasksHovered, setTasksHovered] = useState(false);

  return (
    <>
      <PagePanel
        onMouseEnter={() => setTasksHovered(true)}
        onMouseLeave={() => setTasksHovered(false)}
        className={clsx(
          'w-[100vw] overflow-y-auto lg:w-[50%]',
          isTasksHovered ? 'on-scroll-hover' : '',
        )}
      >
        <PageHeading text="Day at a Glance" />
        <div className="h-2"></div>
        <FocusedItem title="K8s Daily Stand Up" type="meeting" />
        <div className="h-4"></div>
        <div>
          <TaskListing tasks={tasks} />
        </div>
      </PagePanel>
      <PagePanel className="hidden overflow-y-auto pt-12 lg:block lg:w-[50%]">
        <EventList events={events} />
        <div className="h-4"></div>
        <ProjectList projects={projects} />
      </PagePanel>
    </>
  );
}
