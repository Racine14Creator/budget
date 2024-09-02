import {
  AcademicCapIcon,
  BookOpenIcon,
  LightBulbIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Éducation de Qualité",
    description:
      "Nous offrons un environnement favorable qui encourage l'apprentissage par le jeu et l'exploration, permettant à chaque enfant d'atteindre son plein potentiel.",
    icon: AcademicCapIcon,
  },
  {
    name: "Enseignants Compétents",
    description:
      "Notre équipe d'éducateurs dévoués et passionnés est hautement qualifiée pour offrir une attention personnalisée, assurant la croissance et le développement de chaque enfant.",
    icon: UsersIcon,
  },
  {
    name: "Apprentissage Créatif",
    description:
      "Nous mettons l'accent sur la créativité et l'innovation dans notre programme, en inspirant les enfants à réfléchir de manière critique et à explorer leurs intérêts à travers diverses activités.",
    icon: LightBulbIcon,
  },
  {
    name: "Ressources Complètes",
    description:
      "Notre école est équipée de ressources à la pointe de la technologie et d'une vaste bibliothèque, offrant aux enfants les outils nécessaires pour réussir dans leur parcours éducatif.",
    icon: BookOpenIcon,
  },
];

export default function AboutSchool() {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='text-base font-semibold leading-7 text-indigo-600'>
            Bienvenue à Notre École
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Former les Leaders de Demain
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Notre école offre un programme équilibré qui combine les académies,
            la créativité et le développement émotionnel, préparant les enfants
            à un avenir brillant.
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            {features.map((feature) => (
              <div key={feature.name} className='relative pl-16'>
                <dt className='text-base font-semibold leading-7 text-gray-900'>
                  <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600'>
                    <feature.icon
                      aria-hidden='true'
                      className='h-6 w-6 text-white'
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className='mt-2 text-base leading-7 text-gray-600'>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
