import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white text-gray-700">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Mes Projets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4">Projet 1</h3>
            <p className="text-lg">Description du projet 1.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4">Projet 2</h3>
            <p className="text-lg">Description du projet 2.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4">Projet 3</h3>
            <p className="text-lg">Description du projet 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
