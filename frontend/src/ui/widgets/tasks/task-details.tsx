import { Bars3BottomLeftIcon, PlusIcon } from '@heroicons/react/16/solid';

import { Button } from '@/components/button';
import Checkbox from '@/components/checkbox';
import { DateSelector } from '@/components/date';
import { InputTitle } from '@/components/input';
import { PrioritySelector } from '@/components/priority';

import { calculatePriorityColor } from '../../../lib/priority';
import { RichTextEditor } from '../editor/rich-text';
import { ProjectSelector } from '../projects/project-label';
import { EffortSelector } from './effort';
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
          <ProjectSelector
            className="ml-[-0.5rem]"
            project={task.project}
            projects={['Inbox', 'My Project']}
          />

          <div className="mb-4 mt-3 border-b border-zinc-100"></div>

          <h4 className="text-xs font-semibold text-gray-600">Due Date</h4>
          <div className="h-1"></div>
          <DateSelector className="ml-[-0.5rem]" date={task.dueDate} />

          <div className="mb-4 mt-3 border-b border-zinc-100"></div>

          <h4 className="text-xs font-semibold text-gray-600">Priority</h4>
          <div className="h-1"></div>
          <PrioritySelector className="ml-[-0.5rem]" priority={task.priority} />

          <div className="mb-4 mt-3 border-b border-zinc-100"></div>

          <h4 className="text-xs font-semibold text-gray-600">Effort</h4>
          <div className="h-1"></div>
          <EffortSelector className="ml-[-0.5rem]" effort={task.effort} />
        </div>
      </div>
    </>
  );
}
