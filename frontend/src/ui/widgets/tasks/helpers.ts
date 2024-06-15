import { TaskItem } from './types';

const effortArray = ['Intense', 'Medium', 'Light'];

export const getEffortText = (effort: number): string => {
  return effortArray[effort - 1];
};

export const groupTasksByEffort = (tasks: TaskItem[]): { effort: string, tasks: TaskItem[] }[] => {
  return effortArray
    .map((effort, i) => {
      return {
        effort,
        tasks: tasks.filter(t => t.effort === 2 - i)
          // TODO: Sort first by priority and the due date.
          .sort((a, b) => a.priority - b.priority),
      };
    })
    .filter(e => e.tasks.length > 0);
};