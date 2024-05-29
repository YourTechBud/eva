import { ChevronRightIcon } from '@heroicons/react/16/solid';

import { Heading } from '@/components/heading';
import { Link } from '@/components/link';
import FocusedItem from '@/widgets/focused-item';
import Task from '@/widgets/task';

export default function Today() {
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
    {
      id: 4,
      title:
        'A story from Ahmed Besbes on Medium Read this story from Ahmed Besbes on Medium: Improve RAG Pipelines With These 3 Indexing Methods',
      description:
        'This is a story from Ahmed Besbes on Medium. Read this story from Ahmed Besbes on Medium: Improve RAG Pipelines With These 3 Indexing Methods',
      completed: false,
      priority: 2,
      effort: 2,
      dueDate: '2024-05-08T00:10:01-07:00',
    },
    {
      id: 5,
      title:
        'A story from Ahmed Besbes on Medium Read this story from Ahmed Besbes on Medium: Improve RAG Pipelines With These 3 Indexing Methods',
      description:
        'This is a story from Ahmed Besbes on Medium. Read this story from Ahmed Besbes on Medium: Improve RAG Pipelines With These 3 Indexing Methods',
      completed: false,
      priority: 2,
      effort: 2,
      dueDate: '2024-05-08T00:10:01-07:00',
    },
    {
      id: 6,
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
  return (
    <>
      <div>
        <nav className="hidden sm:flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div className="flex">
                <Link
                  href="/tasks/today"
                  className="text-xs font-medium text-gray-500 hover:text-gray-700"
                >
                  Tasks
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <Link
                  href="/tasks/today"
                  className="ml-4 text-xs font-medium text-gray-500 hover:text-gray-700"
                >
                  Today
                </Link>
              </div>
            </li>
          </ol>
        </nav>
        <div className="sm:mt-2 md:flex md:items-center md:justify-between">
          <div className="min-w-0 flex-1">
            <Heading>Day at a Glance</Heading>
          </div>
        </div>
      </div>
      <div className="h-4"></div>
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
    </>
  );
}
