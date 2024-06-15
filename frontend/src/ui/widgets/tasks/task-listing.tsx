import { useState } from 'react';

import SectionHeading from '@/components/section-heading';

import { groupTasksByEffort } from './helpers';
import Task from './task';
import TaskDialog from './task-dialog';
import { TaskItem } from './types';

export default function TaskListing({ tasks }: { tasks: TaskItem[] }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);

  const tasksByEffort = groupTasksByEffort(tasks);
  const selectedTask = tasks.find(t => t.id === selectedTaskId);

  // Always open the dialog when a task is selected.
  const selectTask = (id: number) => {
    setSelectedTaskId(id);
    setTimeout(() => setOpenDialog(true), 100);
  };

  return (
    <>
      {tasksByEffort.map(({ effort, tasks }) => (
        <div key={effort}>
          <SectionHeading title={effort} />

          <ul role="list" className="divide-y divide-gray-100">
            {tasks.map(task => (
              <li key={task.id}>
                <Task open={selectTask} task={task} />
              </li>
            ))}
          </ul>
        </div>
      ))}
      {selectedTask && (
        <TaskDialog
          isOpen={openDialog}
          setIsOpen={setOpenDialog}
          task={selectedTask}
        />
      )}
    </>
  );
}
