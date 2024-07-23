export interface TaskItem {
  id: number;
  title: string;
  description?: string;
  completed?: boolean;
  priority: number;
  effort: number;
  dueDate?: string;
  project?: string;
  lastUpdate?: string;
}
