import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t, ready } = useTranslation();

  if (!ready) return <div>Loading...</div>; // Render loading state until translations are ready

  return (
    <>
      <section className="bg-gray-100">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {t('about_us')}
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                {t('our_story')}
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  {t('learn_more_about_us')}
                  <span className="ml-2">&#8594;</span>
                </a>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                alt={t('about_us_image_alt')}
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
