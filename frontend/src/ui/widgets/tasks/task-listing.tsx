import Task from './task';
import { TaskItem } from './types';

const effortArray = ['Intense', 'Medium', 'Light'];

export default function TaskListing({ tasks }: { tasks: TaskItem[] }) {
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
