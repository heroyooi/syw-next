import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import ProjectCard from '@/components/ProjectCard';
import { Project } from '@/types/project';

async function getRecentProjects(): Promise<Project[]> {
  const q = query(
    collection(db, 'projects'),
    orderBy('createdAt', 'desc'),
    limit(3)
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => {
    const data = d.data() as Omit<Project, 'id'>;
    return { ...data, id: d.id };
  });
}

export default async function Home() {
  const projects = await getRecentProjects();
  return (
    <main className="container">
      <section className="intro">
        <h1>안녕하세요. Syw.Frontend 입니다.</h1>
        <p>프론트엔드 개발자이자 퍼블리셔로서 빠르고 모던한 웹 경험을 제공합니다.</p>
      </section>
      <section>
        <h2>Recent Projects</h2>
        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
