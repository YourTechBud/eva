import { NoteItem } from '../notes/types';
import { TaskItem } from '../tasks/types';

export interface EventItem {
  id: number;
  dateFrom: string;
  dateTo: string;
  name: string;
  location: string;
  attendees: {
    name?: string;
    imageUrl?: string;
  }[];
  tasks: TaskItem[];
  notes: NoteItem[];
  lastUpdate?: string;
}
