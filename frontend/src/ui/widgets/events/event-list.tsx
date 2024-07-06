import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

import SectionHeading from '@/ui/components/section-heading';

import Event from './event';
import { EventDetailsDialog } from './event-dialogs';
import { EventItem } from './types';

interface EventListProps {
  events: EventItem[];
}

export default function EventList({ events }: EventListProps) {
  const [isDetailsDialogOpen, setOpenDetailsDialog] = useState(false);
  const [selectedEventIndex, setSelectedEventIndex] = useState<number | null>(
    null,
  );

  const openDetailsDialog = (index: number) => {
    setSelectedEventIndex(index);
    setTimeout(() => setOpenDetailsDialog(true), 100);
  };

  return (
    <>
      <SectionHeading title="My Events" icon={CalendarDaysIcon} />
      <ol className="divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
        {events.map((event, index) => (
          <li key={event.id} className="relative py-6 xl:static">
            <Event event={event} onClick={() => openDetailsDialog(index)} />
          </li>
        ))}
      </ol>
      {selectedEventIndex !== null && (
        <EventDetailsDialog
          isOpen={isDetailsDialogOpen}
          setIsOpen={setOpenDetailsDialog}
          event={events[selectedEventIndex]}
        />
      )}
    </>
  );
}
