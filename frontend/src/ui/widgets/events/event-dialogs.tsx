import { Button } from '@/ui/components/button';
import { Dialog, DialogActions, DialogBody } from '@/ui/components/dialog';

import { EventDetails } from './event-details';
import { EventItem } from './types';

interface EventDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  event: EventItem;
}

export function EventDetailsDialog({
  isOpen,
  setIsOpen,
  event,
}: EventDialogProps) {
  return (
    <Dialog size="5xl" open={isOpen} onClose={setIsOpen}>
      <DialogBody>
        <EventDetails event={event} />
      </DialogBody>
      <DialogActions>
        <Button className="text-sm" plain onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
