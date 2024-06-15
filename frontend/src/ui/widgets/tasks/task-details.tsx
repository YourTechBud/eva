import { MenuButton } from '@headlessui/react';
import {
  Bars3BottomLeftIcon,
  ChevronDownIcon,
  PlusIcon,
} from '@heroicons/react/16/solid';

import { Button } from '@/components/button';
import Checkbox from '@/components/checkbox';
import Date from '@/components/date';
import { Dropdown, DropdownItem, DropdownMenu } from '@/components/dropdown';
import { InputTitle } from '@/components/input';
import Priority from '@/components/priority';

import { calculatePriorityColor } from '../../../lib/priority';
import { RichTextEditor } from '../editor/rich-text';
import ProjectLabel from '../projects/project-label';
import { getEffortText } from './helpers';
import { TaskItem } from './types';

interface TaskDetailsProps {
  task: TaskItem;
}

export default function TaskDetails({ task }: TaskDetailsProps) {
  const lastUpdate = task.lastUpdate || 'No updates yet';
  return (
    <>
      <div className="lg:flex">
        <div className="w-full flex-1">
          <div className="flex content-center gap-4">
            <Checkbox
              color={calculatePriorityColor(task.priority)}
              className="mt-1 block"
            />
            <InputTitle
              placeholder="Enter a name for your task"
              value={task.title}
            />
          </div>
          <div className="h-5"></div>
          <div className="pl-1">
            <div className="flex gap-4">
              <Bars3BottomLeftIcon className="mt-[0.15rem] size-4 text-gray-500" />
              <RichTextEditor
                editable={true}
                defaultContent={task.description}
              />
            </div>
          </div>
          <div className="relative pl-9">
            <div className="mb-6 mr-8 mt-6 border-b border-zinc-100"></div>

            <h4 className="mb-3 text-xs font-semibold text-gray-600">
              Last Update
            </h4>
            <RichTextEditor editable={false} defaultContent={lastUpdate} />
            <div className="z-100 absolute right-0 top-0 pr-6 pt-4">
              <Button
                outline
                style={{
                  padding: '8px',
                  paddingTop: '1px',
                  paddingBottom: '1px',
                }}
              >
                <PlusIcon />
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-100  py-1 pl-6 pt-6 lg:mt-0 lg:w-64 lg:border-l lg:border-t-0 lg:pt-0">
          <h4 className="text-xs font-semibold text-gray-600">Project</h4>
          <div className="h-1"></div>
          <Dropdown>
            <MenuButton
              className="ml-[-0.5rem] flex w-full items-center rounded-xl border border-transparent p-1 transition data-[active]:border-zinc-200 data-[hover]:border-zinc-200 dark:data-[active]:border-zinc-700 dark:data-[hover]:border-zinc-700"
              aria-label="Account options"
            >
              <ProjectLabel className="ml-1" size="xs" name={task.project} />
              <ChevronDownIcon className="ml-auto mr-1 size-4 shrink-0 stroke-zinc-400" />
            </MenuButton>
            <DropdownMenu className="min-w-48">
              <DropdownItem>Get in Shape!</DropdownItem>
              <DropdownItem>Notifications</DropdownItem>
              <DropdownItem>Billing</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <div className="mb-4 mt-3 border-b border-zinc-100"></div>

          <h4 className="text-xs font-semibold text-gray-600">Due Date</h4>
          <div className="h-1"></div>
          <Date date={task.dueDate} />

          <div className="mb-4 mt-4 border-b border-zinc-100"></div>

          <h4 className="text-xs font-semibold text-gray-600">Priority</h4>
          <div className="h-2"></div>
          <Priority priority={task.priority} />

          <div className="mb-4 mt-4 border-b border-zinc-100"></div>

          <h4 className="text-xs font-semibold text-gray-600">Effort</h4>
          <div className="h-2"></div>
          <p className="text-xs font-semibold text-gray-900">
            {getEffortText(task.effort)}
          </p>
        </div>
      </div>
    </>
  );
}
