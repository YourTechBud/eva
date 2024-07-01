import {
  CalendarIcon,
  EllipsisHorizontalIcon,
  MapPinIcon,
} from '@heroicons/react/20/solid';
import { useState } from 'react';

import { formatDay, formatTime } from '@/lib/date';
import { cn } from '@/lib/utils';
import { Avatar } from '@/ui/components/avatar';
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from '@/ui/components/dropdown';

import { EventItem } from './types';

interface EventProps {
  event: EventItem;
}

export default function Event({ event }: EventProps) {
  const [attendeeHover, setAttendeeHover] = useState(false);
  return (
    <>
      <div className="flex space-x-6">
        <div className="flex-auto">
          <p className="text-xs text-gray-500">{formatDay(event.dateFrom)}</p>
          <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">
            {event.name}
          </h3>
          <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
            <div className="flex items-center space-x-3">
              <dt>
                <span className="sr-only">Date</span>
                <CalendarIcon
                  className="h-4 w-4 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <p className="text-xs">
                  {formatTime(event.dateFrom)} to {formatTime(event.dateTo)}
                </p>
              </dd>
            </div>
            <div className="mt-2 flex cursor-pointer items-center space-x-1 xl:ml-3.5 xl:mt-0 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
              <dt>
                <span className="sr-only">Location</span>
                <MapPinIcon
                  className="h-4 w-4 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd className="text-xs">{event.location}</dd>
            </div>
          </dl>
        </div>
        <div className="absolute right-0 top-6 cursor-pointer xl:relative xl:right-auto xl:top-auto xl:self-center">
          <Dropdown>
            <DropdownButton
              className="h-5 w-5 text-gray-500 hover:text-gray-600"
              as={EllipsisHorizontalIcon}
              aria-label="Account options"
            />
            <DropdownMenu anchor="bottom">
              <DropdownItem>View Details</DropdownItem>
              <DropdownItem>Dismiss</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>

      {event.attendees.length > 0 && (
        <>
          <div className="h-4"></div>
          <div
            className={cn(
              'isolate flex  overflow-hidden',
              attendeeHover ? 'space-x-0' : '-space-x-1',
            )}
          >
            {event.attendees.map((attendee, index) => {
              if (attendee.imageUrl) {
                return (
                  <Avatar
                    key={index}
                    src={attendee.imageUrl}
                    className="size-6 cursor-pointer ring-2 ring-white transition-all"
                    style={{ zIndex: (event.attendees.length - index) * 10 }}
                    onMouseEnter={() => setAttendeeHover(true)}
                    onMouseLeave={() => setAttendeeHover(false)}
                  />
                );
              }
              if (attendee.name) {
                const attendeeNameArray = attendee.name.split(' ');
                const initials =
                  attendeeNameArray[0][0] +
                  attendeeNameArray[attendeeNameArray.length - 1][0];
                return (
                  <Avatar
                    key={index}
                    initials={initials}
                    className="size-6 cursor-pointer bg-gray-500 text-white ring-2 ring-white transition-all"
                    style={{ zIndex: (event.attendees.length - index) * 10 }}
                    onMouseEnter={() => setAttendeeHover(true)}
                    onMouseLeave={() => setAttendeeHover(false)}
                  />
                );
              }
              return null;
            })}
          </div>
        </>
      )}
    </>
  );
}
