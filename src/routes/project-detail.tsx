import { useParams } from 'react-router-dom';
import { projects } from '../projects-data';
import type { Project } from '../projects-data';

export function Component() {
  const { id } = useParams<{ id: string }>();
  const project: Project | undefined = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <div className="text-center py-8">Projet non trouvé</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={project.imageUrl} alt={project.title} className="w-full h-96 object-cover" />
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-gray-700 text-lg">{project.description}</p>
        </div>
      </div>
    </div>
  );
}
