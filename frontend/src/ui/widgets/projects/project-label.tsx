import clsx from 'clsx';

const sizes = {
  sm: 'text-sm',
  xs: 'text-xs',
};

interface ProjectLabelProps {
  name?: string;
  size?: 'sm' | 'xs';
  className?: string;
}
export default function ProjectLabel({
  name,
  className,
  size = 'sm',
}: ProjectLabelProps) {
  const projectName = name ? name : 'Inbox';
  return (
    <div className={clsx('flex gap-[0.5rem]', className)}>
      <p className={clsx('leading-6 text-gray-900', sizes[size])}>#</p>
      <p className={clsx('leading-6 text-gray-900', sizes[size])}>
        {projectName}
      </p>
    </div>
  );
}
