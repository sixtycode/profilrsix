import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Services We Provide",
};

export default function Services() {
  return (
    <>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold">Services</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Vehicle For Today
          </h1>
          <p className="mt-6 text-base leading-7">
            Explore Latest or even Vintage! because why not?
          </p>
          <p>
            The Product / Services page should provide a comprehensive overview
            of the company's products or services. It should include clear and
            concise descriptions of each service, along with pricing information
            if applicable. It should also include testimonials from satisfied
            customers.
          </p>
        </div>
      </main>
    </>
  );
}
