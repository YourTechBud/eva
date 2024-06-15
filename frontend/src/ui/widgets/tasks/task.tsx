import Checkbox from '@/components/checkbox';
import { DateLabel } from '@/components/date';

import { calculatePriorityColor } from '../../../lib/priority';
import { ProjectLabel } from '../projects/project-label';
import { TaskItem } from './types';

interface TaskDetailsProps {
  task: TaskItem;
  open?: (id: number) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Task({ task, open }: TaskDetailsProps) {
  return (
    <div
      key={task.id}
      onClick={() => open?.(task.id)}
      className="relative flex cursor-pointer justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6 lg:px-8"
    >
      <div className="flex min-w-0 gap-x-4">
        <Checkbox
          className="z-200 mt-[0.1rem] flex-none"
          color={calculatePriorityColor(task.priority)}
          setEnabled={e => console.log(e)}
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
          {task.dueDate && <DateLabel className="mt-2" date={task.dueDate} />}
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-x-4">
        <div className="flex flex-col items-end">
          <ProjectLabel name={task.project} />
          <p className="mt-1 text-xs leading-5 text-gray-500">Intense</p>
        </div>
      </div>
    </div>
  );
}
