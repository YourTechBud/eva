export interface ProjectItem {
  id: number;
  title: string;
  tasksRemaining: number;
  status: string;
  totalComments: number;
  totalNotes: number;
  dueDate?: string;
}
