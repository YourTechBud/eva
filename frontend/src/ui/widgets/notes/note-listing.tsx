import Note from './note';
import { NoteItem } from './types';

interface NoteListingProps {
  notes: NoteItem[];
}

export default function NoteListing({ notes }: NoteListingProps) {
  return (
    <>
      {notes.length === 0 && (
        <div className="py-4 text-center text-xs text-gray-500">
          No notes to show.
        </div>
      )}

      <ul className="divide-gray-100j divide-y">
        {notes.map(note => (
          <li>
            <Note note={note} />
          </li>
        ))}
      </ul>
    </>
  );
}
