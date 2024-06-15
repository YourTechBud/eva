import { CalendarDaysIcon } from '@heroicons/react/16/solid';

import { checkDate, getDifferenceInDays } from '@/lib/date';

const calculateDaysColor = (dueDate: string) => {
  const diffInDays = getDifferenceInDays(dueDate);

  // Use red for overdue tasks
  if (diffInDays < 0) {
    return 'text-red-500/80';
  }

  // Use green for tasks due today
  if (diffInDays === 0) {
    return 'text-green-600/80';
  }

  // Use amber for tasks due tomorrow
  if (diffInDays === 1) {
    return 'text-amber-600/80';
  }

  // Use purple for everything else
  return 'text-purple-600/80';
};

interface DateProps {
  date?: string;
}

export default function Date({ date }: DateProps) {
  let color = 'text-gray-700/80';
  let value = 'No due date';

  if (date) {
    color = calculateDaysColor(date);
    value = checkDate(date);
  }
  return (
    <span className={`mt-2 flex gap-1 text-xs ${color}`}>
      <CalendarDaysIcon className="size-4" /> {value}
    </span>
  );
}
