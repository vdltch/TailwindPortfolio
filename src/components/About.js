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
      name: 'Push to deploy',
      description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
      icon: CodeBracketIcon,
    },
    {
      name: 'SSL certificates',
      description:
        'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Simple queues',
      description:
        'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
      icon: AdjustmentsHorizontalIcon,
    },
    {
      name: 'Advanced security',
      description:
        'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
      icon: UserCircleIcon,
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Alternant</h2>
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
          <p className="mt-6 text-lg leading-8 text-gray-600">
              Me suivre sur : 
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
