import { CheckIcon, ChevronDownIcon } from '@heroicons/react/16/solid';

import { cn } from '@/lib/utils';
import { Input } from '@/ui/components/input';
import { Popover, PopoverButton, PopoverPanel } from '@/ui/components/popover';

const sizes = {
  sm: 'text-sm',
  xs: 'text-xs',
};

interface ProjectLabelProps {
  name?: string;
  size?: 'sm' | 'xs';
  className?: string;
}

export function ProjectLabel({
  name,
  className,
  size = 'sm',
}: ProjectLabelProps) {
  const projectName = name ? name : 'Inbox';
  return (
    <div className={cn('flex items-center gap-[0.5rem]', className)}>
      <p className={cn('leading-6 text-gray-900', sizes[size])}>#</p>
      <p className={cn('leading-6 text-gray-900', sizes[size])}>
        {projectName}
      </p>
    </div>
  );
}

interface ProjectSelectorProps {
  className?: string;
  project?: string;
  projects: string[];
}

export function ProjectSelector({
  className,
  project,
  projects,
}: ProjectSelectorProps) {
  const selectedProject = project ? project : 'Inbox';
  const projectList = projects.map(project => (
    <div
      key={project}
      className="flex w-full cursor-pointer items-center px-4 py-2 text-sm text-gray-900 transition hover:bg-zinc-100"
      role="menuitem"
    >
      # {project}
      {selectedProject === project && (
        <CheckIcon className="ml-auto size-4 text-gray-700" />
      )}
    </div>
  ));
  return (
    <Popover className="relative">
      <PopoverButton className={cn(className, 'flex items-center px-2 py-1')}>
        <ProjectLabel size="xs" name={project} />
        <ChevronDownIcon className="ml-auto mr-1 size-4 shrink-0 stroke-zinc-400" />
      </PopoverButton>
      <PopoverPanel>
        <div className="px-2 pt-2">
          <Input removeShadow className="shadow-none" />
        </div>
        <div className="mt-2 border-b border-zinc-100"></div>
        {projectList}
      </PopoverPanel>
    </Popover>
  );
}
