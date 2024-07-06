import { InputTitle } from '@/ui/components/input';
import Label from '@/ui/components/label';

import { RichTextEditor } from '../editor/rich-text';
import NoteListing from '../notes/note-listing';
import TaskListing from '../tasks/task-listing';
import { EventItem } from './types';

interface EventDetailsProps {
  event: EventItem;
}

export function EventDetails({ event }: EventDetailsProps) {
  return (
    <div className="lg:flex">
      <div className="w-full flex-1 pr-6">
        <div className="flex content-center gap-4">
          <InputTitle value={event.name} disabled />
        </div>
        <div className="h-5"></div>
        <Label text="Last Update" />
        <div className="h-2"></div>
        <RichTextEditor
          editable={false}
          defaultContent={event.lastUpdate}
          placeholder="Nothing to show here"
        />
      </div>
      <div className="mt-8 overflow-y-auto border-t border-zinc-100  py-1 pl-6 pt-6 lg:mt-0 lg:w-[40%] lg:border-l lg:border-t-0 lg:pt-0">
        <Label text="Tasks" />
        <TaskListing tasks={event.tasks} />

        <div className="mb-4 border-b border-zinc-100"></div>

        <Label text="Notes" />
        <NoteListing notes={event.notes} />
      </div>
    </div>
  );
}
