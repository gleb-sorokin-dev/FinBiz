import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { CustomersData, Testimonials } from "./CustomersData";

export default function Customers() {
  return (
    <div>
      <div className="lg:max-w-screen-lg max-w-screen-md mx-auto text-center mt-10 md:mt-15 lg:mt-20">
        <p className="text-sm uppercase tracking-wider bg-secondary/50 text-secondary-foreground max-w-max mx-auto px-3 py-1 rounded-full border-t border-gray-500/10 backdrop-blur-3xl mb-6 md:mb-10">
          {CustomersData.sectionSubTitle}
        </p>
        <h2 className="text-4xl font-semibold !leading-tight mb-4 md:text-5xl md:mb-5 lg:text-6xl">
          {CustomersData.sectionTitle}
        </h2>
        <p className="text-muted-foreground md:text-xl">
          {CustomersData.sectionText}
        </p>

        <InfiniteMovingCards
          items={Testimonials}
          direction="right"
          speed="slow"
          className="mt-20 py-10"
        />
      </div>
    </div>
  );
}
