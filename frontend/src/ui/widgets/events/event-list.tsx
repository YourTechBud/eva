import { CalendarDaysIcon } from '@heroicons/react/24/outline';

import SectionHeading from '@/components/section-heading';

import Event from './event';
import { EventItem } from './types';

interface EventListProps {
  events: EventItem[];
}

export default function EventList({ events }: EventListProps) {
  return (
    <>
      <SectionHeading title="My Events" icon={CalendarDaysIcon} />
      <ol className="divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
        {events.map(event => (
          <li key={event.id} className="relative py-6 xl:static">
            <Event event={event} />
          </li>
        ))}
      </ol>
    </>
  );
}
