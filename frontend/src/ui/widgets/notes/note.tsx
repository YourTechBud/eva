import { NoteItem } from './types';

interface NoteProps {
  note: NoteItem;
}

export default function Note({ note }: NoteProps) {
  return (
    <div className="relative flex w-full min-w-0 cursor-pointer justify-between gap-x-6 py-5">
      <div className="w-full">
        <p className="text-sm leading-6 text-gray-900">{note.title}</p>
        <div className="mt-1 ">
          <p className="overflow-hidden overflow-ellipsis whitespace-nowrap text-xs leading-5 text-gray-500">
            {note.summary}
          </p>
        </div>
      </div>
    </div>
  );
}
