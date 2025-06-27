import React, { useState } from "react";
import image from "../../assets/image.svg";

export function CTA() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !validateEmail(email)) return;

    setIsSubmitting(true);

    // Имитация API запроса
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail("");

      // Сброс сообщения об успехе через 5 секунд
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <section
      className="
      flex flex-col-reverse md:flex-row items-center mt-10
      w-full max-w-5xl mx-auto
      p-6 sm:p-8 md:p-10
      bg-transparent
      rounded-none
      transition-all
      backdrop-blur-sm
    "
    >
      {/* Текстовый контент */}
      <div
        className="
        w-full md:w-3/5
        pt-8 md:pt-0 md:pr-8 lg:pr-10
      "
      >
        <h1
          className="
          text-xl sm:text-2xl font-bold
          text-gray-200
          tracking-tight
          mb-3
        "
        >
          WAIT A MINUTE...
        </h1>

        <h2
          className="
          text-lg font-medium
          text-gray-300
          mb-2
        "
        >
          Subscribe to our newsletter
        </h2>

        <p
          className="
          text-sm text-gray-400
          mb-5 md:mb-6
        "
        >
          Stay updated with important product releases, industry news, and
          exclusive community insights. Our weekly newsletter delivers curated
          content every Sunday.
        </p>

        {/* Форма подписки */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex-1">
              <label htmlFor="email-input" className="sr-only">
                Your email
              </label>
              <input
                id="email-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                disabled={isSubmitting}
                className={`
                  w-full px-4 py-2.5
                  border ${
                    !validateEmail(email) && email
                      ? "border-red-600"
                      : "border-gray-600"
                  }
                  rounded-none
                  focus:outline-none focus:ring-1 focus:ring-gray-400
                  bg-gray-800/30
                  text-gray-200
                  placeholder-gray-500
                  transition-all
                  ${isSubmitting ? "opacity-75" : ""}
                `}
                aria-invalid={!validateEmail(email) && email ? "true" : "false"}
                aria-describedby="email-error"
              />
              {!validateEmail(email) && email && (
                <p id="email-error" className="mt-1 text-xs text-red-500">
                  Please enter a valid email address
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !email || !validateEmail(email)}
              className={`
                px-5 py-2.5
                bg-gray-700 hover:bg-gray-600
                text-gray-100 font-medium
                rounded-none
                focus:outline-none focus:ring-1 focus:ring-gray-400
                transition-all
                disabled:opacity-50 disabled:cursor-not-allowed
                min-w-[120px]
                border border-gray-600
              `}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-4 w-4 mr-2 text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending
                </span>
              ) : (
                "Subscribe"
              )}
            </button>
          </div>

          {isSuccess && (
            <div className="p-2 bg-gray-800/70 text-gray-300 border border-gray-700 rounded-sm flex items-center text-sm">
              <svg
                className="w-4 h-4 mr-2 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Subscription confirmed. Thank you.</span>
            </div>
          )}
        </form>
      </div>

      {/* Изображение */}
      <div
        className="
        w-full md:w-2/5
        flex justify-center
        mb-5 md:mb-0
      "
      >
        <img
          src={image}
          alt="Professional newsletter subscription"
          className="
            w-full max-w-xs
            object-contain
            grayscale
            opacity-90
          "
        />
      </div>
    </section>
  );
}
