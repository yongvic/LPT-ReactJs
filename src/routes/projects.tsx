import { Link } from 'react-router-dom';
import { projects } from '../projects-data';

export function Component() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Galerie de projets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <Link to={`/projects/${project.id}`} className="text-blue-500 hover:underline">
                Voir plus
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
