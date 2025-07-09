import Link from "next/link";
import React from "react";

const EquitySolutionsPage = () => {
  return (
    <div>
      <h2 className="font-heading font-bold text-6xl md:text-7xl uppercase tracking-wide text-white p-8 md:p-16 text-white">
        Equity Solutions
      </h2>
      <section className="border-t-2 border-b-2 border-gray-200">
        <div className="flex flex-col md:flex-row w-full border-b-2 border-gray-200">
          <Link className="w-full md:w-1/3" href="/solutions/black-land-ownership">
            <div className="h-full focus:bg-none text-center text-white py-8 md:py-20 md:px-16 hover:bg-red hover:text-black border-b-2 md:border-b-0 md:border-r-2 border-gray-200">
              <h2 className="font-button text-2xl uppercase tracking-wide md:pb-4">
                Black Land Ownership
              </h2>
              <div className="markdown font-body text-xl hidden md:block">
                <p>
                  When we say equity, we mean ownership. Thriving Black
                  communities require control and agency over land. We
                  prioritize Black land acquisition as a foundational pillar to
                  our work.
                </p>
              </div>
            </div>
          </Link>
          <Link className="w-full md:w-1/3" href="/solutions/black-health-care">
            <div className="h-full focus:bg-none text-center text-white py-8 md:py-20 md:px-16 hover:bg-yellow hover:text-black border-b-2 md:border-b-0 md:border-r-2 border-gray-200">
              <h2 className="font-button text-2xl uppercase tracking-wide md:pb-4">
                Black Health
              </h2>
              <div className="markdown font-body text-xl hidden md:block">
                <p>
                  Seattle, Martin Luther King Jr. County boasts some of the most
                  sophisticated, renowned hospitals and medical facilities in
                  the world. The disparities in medical treatment received by
                  the Black communities are appalling, with COVID-19 serving as
                  just the most recent flashlight into this dark and disturbing
                  reality. Read on to support a suite of initial health equity
                  solutions to combat this.
                </p>
              </div>
            </div>
          </Link>
          <Link className="w-full md:w-1/3" href="/solutions/black-education">
            <div className="h-full focus:bg-none text-center text-white py-8 md:py-20 md:px-16 hover:bg-green hover:text-black">
              <h2 className="font-button text-2xl uppercase tracking-wide md:pb-4">
                Black Education
              </h2>
              <div className="markdown font-body text-xl hidden md:block">
                <p>
                  Take action in support of youth-led Black education solutions
                  including community-owned schools, restorative justice, Black
                  studies, building youth achievement and family empowerment
                  centers in South Seattle and more.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row w-full false">
          <Link className="w-full md:w-1/3" href="/solutions/community-safety">
            <div className="h-full focus:bg-none text-center text-white py-8 md:py-20 md:px-16 hover:bg-[#3b82f680] hover:text-black border-b-2 md:border-b-0 md:border-r-2 border-gray-200">
              <h2 className="font-button text-2xl uppercase tracking-wide md:pb-4">
                Black Community Safety
              </h2>
              <div className="markdown font-body text-xl hidden md:block">
                <p>
                  We advocate strongly to divest from policing and invest
                  directly in the Black community toward self-determined,
                  pro-Black safety solutions.
                </p>
              </div>
            </div>
          </Link>
          <Link className="w-full md:w-1/3" href="/solutions/finance">
            <div className="h-full focus:bg-none text-center text-white py-8 md:py-20 md:px-16 hover:bg-red hover:text-black border-b-2 md:border-b-0 md:border-r-2 border-gray-200">
              <h2 className="font-button text-2xl uppercase tracking-wide md:pb-4">
                Black Finance
              </h2>
              <div className="markdown font-body text-xl hidden md:block">
                <p>
                  Black wealth in 2020 remains near zero due to centuries of
                  systemic anti-Black racism. Persistent anti-Black barriers
                  keep the Black community from gaining equitable access to
                  capital. Tap in to learn more and take action to stop it.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <div className="p-8 md:p-16"></div>
    </div>
  );
};

export default EquitySolutionsPage;
