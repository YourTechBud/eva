import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import {
  PencilSquareIcon,
  PlusCircleIcon,
  TrashIcon,
  XCircleIcon,
} from '@heroicons/react/20/solid';

import Checkbox from '@/ui/components/checkbox';
import { DateLabel } from '@/ui/components/date';
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '@/ui/components/dropdown';

import { calculatePriorityColor } from '../../../lib/priority';
import { ProjectLabel } from '../projects/project-label';
import { TaskItem } from './types';

interface TaskDetailsProps {
  task: TaskItem;
  open?: (id: number) => void;
  dismiss?: (id: number, withNote: boolean) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Task({ task, open, dismiss }: TaskDetailsProps) {
  return (
    <div
      key={task.id}
      onClick={() => open?.(task.id)}
      className="relative flex w-full cursor-pointer justify-between gap-x-6 py-5"
    >
      <div className="absolute right-0 top-[1.35rem]">
        <Dropdown>
          <DropdownButton
            className="size-6 rounded-full p-1 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 "
            as={EllipsisVerticalIcon}
            aria-label="Account options"
            onClick={e => e.stopPropagation()}
          />
          <DropdownMenu anchor="bottom">
            <DropdownItem
              onClick={(e: { stopPropagation: () => void }) => {
                e.stopPropagation();
              }}
            >
              <PlusCircleIcon />
              <DropdownLabel>Dismiss and create a new task</DropdownLabel>
            </DropdownItem>
            <DropdownItem
              onClick={(e: { stopPropagation: () => void }) => {
                e.stopPropagation();
                dismiss?.(task.id, true);
              }}
            >
              <PencilSquareIcon />
              <DropdownLabel>Add a note and dismiss for today</DropdownLabel>
            </DropdownItem>
            <DropdownItem
              onClick={(e: { stopPropagation: () => void }) => {
                e.stopPropagation();
                dismiss?.(task.id, false);
              }}
            >
              <TrashIcon />
              <DropdownLabel>Trash it</DropdownLabel>
            </DropdownItem>
            <DropdownItem
              onClick={(e: { stopPropagation: () => void }) =>
                e.stopPropagation()
              }
            >
              <XCircleIcon />
              <DropdownLabel>Cancel</DropdownLabel>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="flex w-full min-w-0 gap-x-4">
        <Checkbox
          className="z-200 mt-[0.1rem] flex-none"
          color={calculatePriorityColor(task.priority)}
          setEnabled={e => console.log(e)}
        />
        <div className="min-w-0 max-w-[85%] flex-auto">
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
          <div className="mt-1 flex gap-x-3">
            {task.dueDate && (
              <>
                <DateLabel className="mt-1" date={task.dueDate} />
                <div className="my-1 w-[1px] bg-gray-300"></div>
              </>
            )}
            <ProjectLabel name={task.project} size="xs" />
          </div>
        </div>
      </div>
    </div>
  );
}
