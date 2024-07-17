import { useState, useEffect } from 'react';

export default function Example() {
  const words = ["React", "Angular", "SQL", "PHP", "Jira"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 style={{ marginRight: '88px' }} className="text-center text-4xl font-semibold leading-8 text-gray-900">
            Stacks utilisées 
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
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="React"
            src="https://cdn-icons-png.flaticon.com/512/3393/3393920.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          <img
            alt="NodeJS"
            src="https://cdn-icons-png.flaticon.com/512/16511/16511234.png"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
          <img
            alt="SQL"
            src="https://cdn-icons-png.flaticon.com/512/5815/5815809.png"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
           <img
            alt="PHP"
            src="https://cdn-icons-png.flaticon.com/512/15452/15452387.png"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
            <img
            alt="Jira"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968842.png"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div>
  )
}
