import { ClipboardDocumentListIcon } from '@heroicons/react/24/outline';

import SectionHeading from '@/components/section-heading';

import Project from './project';
import { ProjectItem } from './types';

interface ProjectListProps {
  projects: ProjectItem[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <>
      <SectionHeading
        title="Pinned Projects"
        icon={ClipboardDocumentListIcon}
      />
      <ul role="list" className="divide-y divide-gray-100">
        {projects.map(project => (
          <li
            key={project.id}
            className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap"
          >
            <Project project={project} />
          </li>
        ))}
      </ul>
    </>
  );
}
