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
}