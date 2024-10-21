import { AdjustmentsHorizontalIcon, ArrowPathIcon, CloudArrowUpIcon, CodeBracketIcon, ComputerDesktopIcon, FingerPrintIcon, LinkIcon, LockClosedIcon, ShieldCheckIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react';

export default function Example() {
  const words = ["Full-Stack", "Angular", "React", "PHP / SQL"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  const features = [
    {
      name: 'Born To Code',
      description:
        'Passionné par le code, j\'évolue avec les nouvelles technologies afin de toujours être d\'actualité. Avec un fort intérêt pour le développement Full-Stack, je sais m\'adapter à tous les environnements.',
      icon: CodeBracketIcon,
    },
    {
      name: 'Test de non régression',
      description:
        'Grâce à mes expériences j\'ai pu apprendre à réaliser des tests de non régressions afin de pouvoir certifié la qualité d\'un patch. La création de scénéraio avec SELENIUM permet l\'automatisation des TNR.',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Gestion de projet',
      description:
        'La méthode agile SCRUM m\'a permis de pouvoir mener à bien des projets sur des Sprint hebdomadaires afin de respecter les délais et de budgétiser / livrer en conséquence.',
      icon: AdjustmentsHorizontalIcon,
    },
    {
      name: 'Expérience utilisateur',
      description:
        'L\'Expérience utilisateur dans un projet est une partie très importante. Elle passe par la phase de conception jusqu\'à la phase de test. En tant que développeur Full-Stack, c\'est une partie indispensable de tout projet.',
      icon: UserCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">         
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Alternant Ecole IPI - Toulouse</h2>
          <p style={{ marginRight: '141px' }} className="relative mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl h-10">
            <span>Développeur </span>
            {words.map((word, i) => (
              <span
                key={i}
                className={`absolute text-indigo-600 ml-2 transition-opacity duration-500 ease-in-out transform ${index === i ? 'opacity-100' : 'opacity-0'}`}
                style={{ width: 'max-content' }}
              >
                {word}
              </span>
            ))}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
