import { FlagIcon } from '@heroicons/react/16/solid';
import clsx from 'clsx';

import { calculatePriorityColor } from '@/lib/priority';

const colors = {
  red: 'text-red-500/80',
  orange: 'text-orange-500/80',
  amber: 'text-amber-500/80',
  blue: 'text-blue-500/80',
  zinc: 'text-gray-500/80',
};

interface PriorityProps {
  priority: number;
}

export default function Priority({ priority }: PriorityProps) {
  const color = calculatePriorityColor(priority);
  return (
    <div className="flex content-center gap-2">
      <FlagIcon className={clsx('size-4', colors[color])} />
      <p className="text-xs text-gray-900">P{priority}</p>
    </div>
  );
}
