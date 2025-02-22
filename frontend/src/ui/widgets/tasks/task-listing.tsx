import { useState } from 'react';

import SectionHeading from '@/ui/components/section-heading';

import { groupTasksByEffort } from './helpers';
import Task from './task';
import { TaskDetailsDialog, TaskDismissWithNoteDialog } from './task-dialog';
import { TaskItem } from './types';

interface TaskListingProps {
  tasks: TaskItem[];
  showEffortGrouping?: boolean;
}

export default function TaskListing({
  tasks,
  showEffortGrouping,
}: TaskListingProps) {
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [openDismissDialog, setOpenDismissDialog] = useState(false);

  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
  const [dismissTaskId, setDismissTaskId] = useState<number | null>(null);

  const tasksByEffort = groupTasksByEffort(tasks);

  const selectedTask = tasks.find(t => t.id === selectedTaskId);
  const taskToBeDismissed = tasks.find(t => t.id === dismissTaskId);

  // Always open the dialog when a task is selected.
  const selectTask = (id: number) => {
    setSelectedTaskId(id);
    setTimeout(() => setOpenDetailsDialog(true), 100);
  };

  const dismissTask = (id: number, withNote: boolean) => {
    if (!withNote) {
      // TODO: Dismiss the task directly.
      return;
    }

    setDismissTaskId(id);
    setTimeout(() => setOpenDismissDialog(true), 100);
  };

  return (
    <>
      {tasks.length === 0 && (
        <div className="py-4 text-center text-xs text-gray-500">
          No tasks to show.
        </div>
      )}
      {tasksByEffort.map(({ effort, tasks }) => (
        <div key={effort} className="mb-2">
          {showEffortGrouping === true && <SectionHeading title={effort} />}

          <ul role="list" className="divide-y divide-gray-100">
            {tasks.map(task => (
              <li key={task.id}>
                <Task open={selectTask} dismiss={dismissTask} task={task} />
              </li>
            ))}
          </ul>
        </div>
      ))}
      {selectedTask && (
        <TaskDetailsDialog
          isOpen={openDetailsDialog}
          setIsOpen={setOpenDetailsDialog}
          task={selectedTask}
        />
      )}
      {taskToBeDismissed && (
        <TaskDismissWithNoteDialog
          isOpen={openDismissDialog}
          setIsOpen={setOpenDismissDialog}
          task={taskToBeDismissed}
        />
      )}
    </>
  );
}
