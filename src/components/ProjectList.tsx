'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { collection, getDocs, limit, orderBy, query, startAfter, QueryDocumentSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Project } from '@/types/project';
import ProjectCard from './ProjectCard';

const PAGE_SIZE = 10;

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const loader = useRef<HTMLDivElement>(null);

  const loadProjects = useCallback(async () => {
    if (!hasMore) return;
    const q = lastDoc
      ? query(
          collection(db, 'projects'),
          orderBy('createdAt', 'desc'),
          startAfter(lastDoc),
          limit(PAGE_SIZE)
        )
      : query(collection(db, 'projects'), orderBy('createdAt', 'desc'), limit(PAGE_SIZE));
    const snapshot = await getDocs(q);
    const docs = snapshot.docs.map((d) => ({ id: d.id, ...(d.data() as Project) }));
    setProjects((prev) => [...prev, ...docs]);
    const lastVisible = snapshot.docs[snapshot.docs.length - 1] ?? null;
    setLastDoc(lastVisible);
    if (snapshot.docs.length < PAGE_SIZE) setHasMore(false);
  }, [lastDoc, hasMore]);

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadProjects();
      }
    });
    const el = loader.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [loadProjects]);

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
      {hasMore && <div ref={loader} />}
    </div>
  );
}
