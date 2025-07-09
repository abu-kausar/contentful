import React from "react";

const FinancePage = () => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto p-8 md:py-16 text-white">
        <img
          src="/finance.jpg"
          alt="black finance image"
          className="top-0 left-0 w-full h-full object-cover object-center"
        />
        <h2 className="font-heading font-bold text-6xl md:text-7xl uppercase tracking-wide text-white text-center py-6">
          black finance
        </h2>
        <div className="text-xl py-8 text-justify font-markdown-body">
          <p className="pb-4">
            Racial realism in Black finance reflects the persistent anti-Black
            barriers that keep the Black community from gaining equitable access
            to capital. At the federal level, one of the largest and
            least-elevated stories is the immense, anti-Black wealth transfer of
            the federal COVID-19 relief programs. Specifically, the{" "}
            <a
              href="https://www.vox.com/2020/10/5/21427881/paycheck-protection-program-black-owned-businesses"
              title="Payroll Protection Program"
              className="text-yellow underline"
            >
              Paycheck Protection Program
            </a>{" "}
            (PPP). The PPP awarded over $542 billion in aid to U.S. businesses
            and organizations to incentivize retaining employees. Less than two
            percent of that aid reached Black-owned organizations!
            <br /><br />
            To contextualize, Black wealth in 2020 remains near zero due to
            centuries of systemic anti-Black racism. COVID-19 predictably hit
            the Black community harder than most, and yet, the massive federal
            tax dollars used for relief wholesale failed to reach Black
            communities. Instead, the funding went overwhelmingly to wealthy
            white communities, only further compounding existing racial wealth,
            economic, and health gaps. 
            <br /><br />
            This is racial realism: the perpetual,
            unrelenting anti-Black racism baked into every facet of our society.
            And this is why King County Equity Now was formed: to combat racial
            realism in King County by: (i) vigorously calling out anti-Blackness
            in all forms, at all institutions; (ii) organizing with local Black
            community to elevate equity solutions that, when followed, will lead
            the Black community to measurable markers of equity; and (iii)
            ensuring such solutions are put into practice. 
            <br /><br />
            Below, we highlight
            just a few campaigns to combat anti-Blackness in capital access
            including the: (a) collective demand for $300M in American Relief
            Plan Act (ARPA) funding to go directly to the local Black community;
            and (b) Washington State Housing & Finance Commission (WSHFC)&apos;s
            anti-Black funding policies (including its initial plan to exclude
            all Black projects from its 2021 quarter billion dollar allocation).
            That is, we highlight how anti-Black racism impacts the Black
            community&apos;s access to capital both during a global pandemic and
            routinely in a local institution. Take action to combat this below.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <a
            href=""
            className="bg-red text-black px-5 py-2 rounded-full text-base uppercase font-bold hover:bg-green- hover:text-white"
          >
            take direct action
          </a>
        </div>
      </div>
      <h2 className="p-8 md:p-16 text-white font-heading font-bold text-5xl uppercase tracking-wide py-6">Related Links</h2>
    </>
  );
};

export default FinancePage;
