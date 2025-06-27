import { useState, useMemo } from "react";

interface Feature {
  text: string;
  available: boolean;
}

interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: Feature[];
  buttonClass: string;
  cardClass: string;
  highlight?: boolean;
}

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const pricingPlans = useMemo<PricingPlan[]>(
    () => [
      {
        id: "starter",
        name: "Starter Pack",
        monthlyPrice: 15,
        annualPrice: 8,
        description:
          "Ideal for individual users and hobbyists looking for essential functionalities.",
        features: [
          { text: "5 mb/PDF", available: true },
          { text: "75 pages/PDF", available: true },
          { text: "10 messages/Day", available: true },
          { text: "Up to 3 PDFs", available: true },
          { text: "Gpt-3.5-turbo model", available: false },
          { text: "Test mode", available: false },
          { text: "Doc summary", available: false },
        ],
        buttonClass: "text-gray-800 bg-gray-300 hover:bg-gray-400",
        cardClass: "bg-gray-700/30 backdrop-blur-sm",
      },
      {
        id: "silver",
        name: "Silver Surfer",
        monthlyPrice: 25,
        annualPrice: 20,
        description:
          "Perfect for small businesses and startups with balanced features.",
        features: [
          { text: "10 mb/PDF", available: true },
          { text: "150 pages/PDF", available: true },
          { text: "25 messages/Day", available: true },
          { text: "Up to 5 PDFs", available: true },
          { text: "Gpt-3.5-turbo model", available: true },
          { text: "Test mode", available: false },
          { text: "Doc summary", available: false },
        ],
        buttonClass: "text-gray-900 bg-white hover:bg-gray-100",
        cardClass: "bg-gray-600/40 border border-gray-500 backdrop-blur-sm",
        highlight: true,
      },
      {
        id: "golden",
        name: "Golden Unicorn",
        monthlyPrice: 50,
        annualPrice: 40,
        description:
          "Tailored for medium-sized businesses with advanced tools.",
        features: [
          { text: "32 mb/PDF", available: true },
          { text: "1500 pages/PDF", available: true },
          { text: "1000 messages/Day", available: true },
          { text: "Up to 50 PDFs", available: true },
          { text: "Gpt-3.5-turbo-16k model", available: true },
          { text: "Test mode", available: true },
          { text: "Doc summary", available: true },
        ],
        buttonClass: "text-gray-800 bg-gray-300 hover:bg-gray-400",
        cardClass: "bg-gray-700/30 backdrop-blur-sm",
      },
    ],
    []
  );

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-black to-transparent z-10"></div>

        <img
          className="w-full h-full object-cover"
          src="https://i.pinimg.com/736x/d3/6e/3f/d36e3fdb2eefada72c1cdfbe6d0f8820.jpg"
          alt="abstract background"
          loading="lazy"
        />

        <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-black to-transparent z-10"></div>
      </div>

      <div className="relative px-4 py-12 mx-auto w-full max-w-7xl sm:px-6 lg:px-8 z-20">
        {/* Pricing Toggle */}
        <div className="max-w-xs mx-auto sm:max-w-sm">
          <div className="flex p-1 rounded-full bg-gray-800/70 border border-gray-600">
            <button
              className={`flex-1 py-3 px-6 text-sm font-medium rounded-full transition-all duration-300 ${
                !isAnnual
                  ? "bg-gray-600 text-gray-100 shadow-lg"
                  : "text-gray-400 hover:text-gray-200"
              }`}
              onClick={() => setIsAnnual(false)}
              aria-pressed={!isAnnual}
            >
              Monthly
            </button>
            <button
              className={`flex-1 py-3 px-6 text-sm font-medium rounded-full transition-all duration-300 ${
                isAnnual
                  ? "bg-gray-600 text-gray-100 shadow-lg"
                  : "text-gray-400 hover:text-gray-200"
              }`}
              onClick={() => setIsAnnual(true)}
              aria-pressed={isAnnual}
            >
              Annual
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3 md:grid-cols-2 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col rounded-3xl p-6 shadow-2xl backdrop-blur-md transform transition-all duration-300 hover:scale-[1.02] ${
                plan.highlight ? "md:scale-105 z-10 shadow-gray-500/10" : ""
              } ${plan.cardClass}`}
            >
              <div className="flex-grow">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-100">
                    {plan.name}
                  </h3>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-3xl font-bold text-gray-100">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="ml-2 text-base font-medium text-gray-400">
                      /month
                    </span>
                  </div>
                  {isAnnual && (
                    <p className="mt-1 text-sm text-gray-300">
                      Billed annually
                    </p>
                  )}
                </div>

                <p className="text-sm text-gray-300 mb-6">{plan.description}</p>

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={`${plan.id}-feature-${idx}`}
                      className="flex items-start"
                    >
                      {feature.available ? (
                        <svg
                          className="flex-shrink-0 w-5 h-5 mt-0.5 text-green-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="flex-shrink-0 w-5 h-5 mt-0.5 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                      <span
                        className={`ml-2 text-sm ${
                          feature.available
                            ? "text-gray-200"
                            : "text-gray-500 line-through"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href="#"
                  className={`flex justify-center items-center py-3 px-6 rounded-xl font-medium transition-colors duration-300 ${plan.buttonClass}`}
                  aria-label={`Get started with ${plan.name} plan`}
                >
                  Get started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
