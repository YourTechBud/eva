import { CheckIcon } from '@heroicons/react/16/solid';
import clsx from 'clsx';

import { Popover, PopoverButton, PopoverPanel } from '@/ui/components/popover';

import { getEffortText } from './helpers';

interface EffortSelectorProps {
  className?: string;
  effort: number;
}

export function EffortSelector({ className, effort }: EffortSelectorProps) {
  return (
    <Popover className="relative">
      <PopoverButton className={clsx(className, 'p-2')}>
        <p className="text-left text-xs font-semibold text-gray-900">
          {getEffortText(effort)}
        </p>
      </PopoverButton>
      <PopoverPanel>
        {[1, 2, 3].map(e => {
          return (
            <div
              key={e}
              className="flex min-w-64 cursor-pointer gap-4 px-4 py-2 text-sm text-gray-900 transition hover:bg-zinc-100"
              role="menuitem"
            >
              {getEffortText(e)}
              {effort === e && (
                <CheckIcon className="ml-auto size-4 text-gray-700" />
              )}
            </div>
          );
        })}
      </PopoverPanel>
    </Popover>
  );
}
