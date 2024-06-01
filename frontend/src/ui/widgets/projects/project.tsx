import {
  DocumentCheckIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';

import { formatDay } from '@/lib/date';

import { ProjectItem } from './types';

function getProjectStatusColor(status: string) {
  switch (status) {
    case 'active':
      return 'text-green-700 bg-green-50 ring-green-600/20';
    case 'backlog':
    case 'archived':
    default:
      return 'text-gray-600 bg-gray-50 ring-gray-500/10';
  }
}

interface ProjectProps {
  project: ProjectItem;
}

export default function Project({ project }: ProjectProps) {
  return (
    <>
      <div>
        <div className="flex space-x-2">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            <p>{project.title}</p>
          </p>
          <p
            className={clsx(
              getProjectStatusColor(project.status),
              'mt-0.5 whitespace-nowrap rounded-md px-1.5 py-0.5 text-xs font-medium capitalize ring-1 ring-inset',
            )}
          >
            {project.status}
          </p>
        </div>
        <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
          {/* <p>
                  <a href={discussion.author.href} className="hover:underline">
                    {discussion.author.name}
                  </a>
                </p>
                <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                  <circle cx={1} cy={1} r={1} />
                </svg> */}
          <p>
            {!project.dueDate && <p>No due date specified</p>}
            {project.dueDate && (
              <time dateTime={project.dueDate}>
                Due on {formatDay(project.dueDate)}
              </time>
            )}
          </p>
        </div>
      </div>
      <dl className="flex w-full flex-none justify-between gap-x-1 sm:w-auto">
        <div className="flex w-16 gap-x-2.5 align-middle">
          <dt>
            <span className="sr-only">Tasks Remaining</span>
            <DocumentCheckIcon
              className="size-6 text-gray-400"
              aria-hidden="true"
            />
          </dt>
          <dd className="text-sm leading-6 text-gray-900">
            <p>{project.tasksRemaining}</p>
          </dd>
        </div>
        <div className="flex w-16 gap-x-2.5 align-middle">
          <dt>
            <span className="sr-only">Total Notes</span>
            <DocumentTextIcon
              className="size-6 text-gray-400"
              aria-hidden="true"
            />
          </dt>
          <dd className="text-sm leading-6 text-gray-900">
            <p>{project.totalNotes}</p>
          </dd>
        </div>
      </dl>
    </>
  );
}
