import * as Headless from '@headlessui/react';
import clsx from 'clsx';

interface PopoverProps {
  className?: string;
  children: React.ReactNode;
}
export function Popover({ className, children }: PopoverProps) {
  return (
    <Headless.Popover className={clsx('relative', className)}>
      {children}
    </Headless.Popover>
  );
}

export function PopoverButton({ className, children }: PopoverProps) {
  return (
    <Headless.PopoverButton
      className={clsx(
        'w-full rounded-xl border border-transparent outline-none transition hover:bg-zinc-200 data-[active]:border-zinc-200 data-[hover]:border-zinc-200 data-[active]:bg-zinc-200 dark:data-[active]:border-zinc-700 dark:data-[hover]:border-zinc-700',
        className,
      )}
    >
      {children}
    </Headless.PopoverButton>
  );
}

export function PopoverPanel({ className, children }: PopoverProps) {
  return (
    <Headless.Transition
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      <Headless.PopoverPanel
        anchor="bottom"
        className={clsx(
          className,
          'mt-2 rounded-md bg-white/90 text-sm/6 shadow-lg ring-1 ring-black ring-opacity-5 backdrop-blur-lg [--anchor-gap:var(--spacing-5)] focus:outline-none',
        )}
      >
        {children}
      </Headless.PopoverPanel>
    </Headless.Transition>
  );
}
