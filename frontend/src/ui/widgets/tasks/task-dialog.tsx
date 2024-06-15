import { Button } from '@/components/button';
import { Dialog, DialogActions, DialogBody } from '@/components/dialog';

import TaskDetails from './task-details';
import { TaskItem } from './types';

interface TaskDetailsProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  task: TaskItem;
}

export default function TaskDialog({
  isOpen,
  setIsOpen,
  task,
}: TaskDetailsProps) {
  return (
    <Dialog size="4xl" open={isOpen} onClose={setIsOpen}>
      <DialogBody>
        <TaskDetails task={task} />
      </DialogBody>
      <DialogActions>
        <Button className="text-sm" plain onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
        <Button className="text-sm" onClick={() => setIsOpen(false)}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
