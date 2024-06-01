import { CalendarDaysIcon } from '@heroicons/react/16/solid';

import Checkbox from '@/components/checkbox';
import { checkDate, getDifferenceInDays } from '@/lib/date';

import { TaskItem } from './types';

const calculatePriorityColor = (priority: number) => {
  switch (priority) {
    case 1:
      return 'red';
    case 2:
      return 'orange';
    case 3:
      return 'amber';
    case 4:
      return 'blue';
    default:
      return 'zinc';
  }
};

const calculateDaysColor = (dueDate: string) => {
  const diffInDays = getDifferenceInDays(dueDate);

  // Use red for overdue tasks
  if (diffInDays < 0) {
    return 'text-red-500/80';
  }

  // Use green for tasks due today
  if (diffInDays === 0) {
    return 'text-green-600/80';
  }

  // Use amber for tasks due tomorrow
  if (diffInDays === 1) {
    return 'text-amber-600/80';
  }

  // Use purple for everything else
  return 'text-purple-600/80';
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Task({ task }: { task: TaskItem }) {
  return (
    <div
      key={task.id}
      className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6 lg:px-8"
    >
      <div className="flex min-w-0 gap-x-4">
        <Checkbox
          className="mt-[0.1rem] flex-none"
          color={calculatePriorityColor(task.priority)}
        />
        <div className="min-w-0 flex-auto">
          <p className="line-clamp-4 text-sm leading-6 text-gray-900">
            <span className="absolute inset-x-0 -top-px bottom-0 z-[-1]" />
            {task.title}
          </p>
          {task.description && (
            <div className="mt-1 ">
              <p className="overflow-hidden overflow-ellipsis whitespace-nowrap text-xs leading-5 text-gray-500">
                {task.description}
              </p>
            </div>
          )}
          {task.dueDate && (
            <span
              className={`mt-2 flex gap-1  text-xs ${calculateDaysColor(task.dueDate)}`}
            >
              <CalendarDaysIcon className="size-4" /> {checkDate(task.dueDate)}
            </span>
          )}
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-x-4">
        <div className="flex flex-col items-end">
          <p className="text-sm leading-6 text-gray-900"># Work</p>
          <p className="mt-1 text-xs leading-5 text-gray-500">Intense</p>
        </div>
      </div>
    </div>
  );
}
