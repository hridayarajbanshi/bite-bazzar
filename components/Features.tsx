import React from 'react';

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Free Delivery",
      description: "Free delivery on all orders over $50",
      icon: (
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" 
        />
      )
    },
    {
      id: 2,
      title: "Free Returns",
      description: "Hassle-free returns within 30 days",
      icon: (
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" 
        />
      )
    },
    {
      id: 3,
      title: "Customer Support 24/7",
      description: "We're here to help, anytime",
      icon: (
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" 
        />
      )
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-3xl/tight font-bold text-gray-900 sm:text-4xl">
          Features for growth
        </h2>
        <p className="mt-4 text-lg text-pretty text-gray-700">
            Everything you need to build and scale your online store. Fast, secure, and highly customizable.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.id} className="rounded-lg border border-gray-200 p-6">
            <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor" 
                className="size-6"
              >
                {feature.icon}
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="mt-2 text-pretty text-gray-700">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;