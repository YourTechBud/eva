import { Button } from '@/ui/components/button';
import { Dialog, DialogActions, DialogBody } from '@/ui/components/dialog';
import { InputTitle } from '@/ui/components/input';

import { RichTextEditor } from '../editor/rich-text';
import TaskDetails from './task-details';
import { TaskItem } from './types';

interface TaskDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  task: TaskItem;
}

export function TaskDetailsDialog({
  isOpen,
  setIsOpen,
  task,
}: TaskDialogProps) {
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

export function TaskDismissWithNoteDialog({
  isOpen,
  setIsOpen,
  task,
}: TaskDialogProps) {
  return (
    <Dialog size="2xl" open={isOpen} onClose={setIsOpen}>
      <DialogBody>
        <InputTitle
          placeholder="Enter a name for your task"
          value={task.title}
        />
        <RichTextEditor
          placeholder="What did you work on today?"
          editable={true}
          defaultContent={task.description}
        />
      </DialogBody>
      <DialogActions>
        <Button className="text-sm" plain onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
        <Button className="text-sm" onClick={() => setIsOpen(false)}>
          Dismiss
        </Button>
      </DialogActions>
    </Dialog>
  );
}
