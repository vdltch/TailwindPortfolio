import React from 'react';
import { useState, useEffect } from 'react';

const Projects = () => {
  const words = ["Kalifast", "HomeStream", "Calendar"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    
   
    <section id="projects" className="py-20 bg-white text-gray-700">
      
       <div
        aria-hidden="true"
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="container mx-auto text-center">
      <h2 style={{ marginRight: '225px' }} className="text-center text-4xl mb-5 font-semibold leading-8 text-gray-900">
            Projets 
            {words.map((word, i) => (
              <span
                key={i}
                className={`absolute text-indigo-600 ml-2 transition-opacity duration-500 ease-in-out transform ${index === i ? 'opacity-100' : 'opacity-0'}`}
                style={{ width: 'max-content' }}
              >
                {word}
              </span>
            ))}
        </h2>       
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4">Kalifast</h3>
            <img style={{ borderRadius: '5%' }} src='https://www.danmonceau.fr/assets/new_project_asset/new_project_image/kalifast.webp' />
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Angular - SaaS - Automatisation</h2>
            <p className="text-lg mt-2">
              Kalifast est une application d'automatisation de tests et de gestion de projet. Celle-ci permet aussi de pouvoir gérer sur un sprint bien précis, des livraisons, des tâches, des requirements et pleins d'autres.
            </p>
            <div className="mt-10">
          <button
            type="button"
            onClick={() => window.open('https://kalifast.com', '_blank')}
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Voir en direct
          </button>
        </div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4">HomeStream</h3>
            <img style={{ borderRadius: '5%' }} src='https://www.danmonceau.fr/assets/new_project_asset/new_project_image/kalifast.webp' />
            <h2 className="text-base font-semibold leading-7 text-indigo-600">JavaScript - Films/Series - API</h2>
            <p className="text-lg mt-2">
              HomeStream est un extension web afin de chercher un films ou une série directement depuis l'extension. Possible de mettre en favoris un contenu afin de le mettre dans la watchlist Plex. 
            </p>
            <div className="mt-10">
          <button
            type="button"
            onClick={() => window.open('https://kalifast.com', '_blank')}
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            En développement
          </button>
        </div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4">Calendar WordPress Plugin</h3>
            <img style={{ borderRadius: '5%' }} src='https://www.danmonceau.fr/assets/new_project_asset/new_project_image/kalifast.webp' />
            <h2 className="text-base font-semibold leading-7 text-indigo-600">PHP - Wordpress - API</h2>
            <p className="text-lg mt-2">
            Calendar est un plugin WordPress qui permet de connecter son calendrier Google afin de pouvoir afficher et gérer des événements directement sur une page WordPress.
            </p>
            <div className="mt-10">
          <button
            type="button"
            onClick={() => window.open('https://kalifast.com', '_blank')}
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Voir en direct
          </button>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
