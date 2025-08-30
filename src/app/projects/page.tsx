import ProjectList from '@/components/ProjectList';

export const metadata = {
  title: 'Projects | Syw Frontend',
  description: '모든 프로젝트 목록'
};

export default function ProjectsPage() {
  return (
    <main className="container">
      <h1>Projects</h1>
      <ProjectList />
    </main>
  );
}
