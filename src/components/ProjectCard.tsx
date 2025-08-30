import Image from 'next/image';
import { Project } from '@/types/project';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card">
      {project.imageUrl && (
        <Image src={project.imageUrl} alt={project.title} width={400} height={200} />
      )}
      <div className="card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}
