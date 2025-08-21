/* eslint-disable @next/next/no-img-element */
const RecentWinsPage = () => {
  return (
    <div className="custom-iamgeBackground">
      <div className="mb-10 py-16 relative bg-[url('/images/winsbg.jpg')] bg-cover bg-no-repeat">
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container mx-auto px-5 relative z-10">
          <p className="text-base text-center md:text-left text-white font-bold uppercase">
            Featured Recent Win
          </p>
          <h1 className="font-heading font-black uppercase text-6xl md:text-8xl text-white w-full text-center md:text-left md:w-1/3">
            Family Empowerment Center
            <span className="text-yellow"> $1 million&</span>
            <span className="text-red">~5600 direct actions</span>
          </h1>
          <img
            src="/images/logo.svg"
            alt=""
            className="absolute w-28 h-auto right-8 bottom-8 hidden md:flex"
          />
        </div>
      </div>

      <div className="px-8 container mx-auto font-body text-xl text-white font-normal">
        <section className="mb-10">
          <p className="mt-10 mb-2">
            Juneteenth 2024, King County Equity Now celebrated four years of
            steadfast advocacy and significant victories for the Black
            community. We extend heartfelt thanks to YOU, our incredible
            supporters. Your support is driving an impressive 300,000 actions
            towards advancing equity over the past four years! Despite
            persistent attempts to undermine KCEN’s Juneteenth celebration, the
            event once again triumphed as a resounding success. Featuring
            electrifying sets by Dead Prez, performances, DJ Holiday, and the
            culmination of a season of local action, advocacy, and storytelling,
            it was a vibrant intergenerational gathering that provided space for
            Black joy and jubilation alongside our ongoing fight for justice and
            equity.
          </p>
        </section>

        {/* KCEN Wins */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-3 text-yellow">
            KCEN Wins: Moving the Dial for Black Equity
          </h2>
          <p className="mb-10">
            Our success is measured by tangible improvements in the lives of
            Black people. Through nearly 315,000 direct actions, KCEN has
            mobilized efforts that have secured:
          </p>
          <ul className="text-white text-xl font-normal mx-0 md:mx-72 flex flex-col gap-y-6">
            <li className="flex items-start gap-x-10">
              <img
                src="/images/liarrow.png"
                alt=""
                className="w-6 h-auto mt-2"
              />
              <span>
                <b>$200 million</b> for the Community Reinvestment Program,
                safeguarded from redirection by opportunistic politicians.
              </span>
            </li>

            <li className="flex items-start gap-x-10">
              <img
                src="/images/liarrow.png"
                alt=""
                className="w-6 h-auto mt-2"
              />
              <span>
                <b>$150 million</b> in increased community development for
                affordable housing from the Washington State Housing Finance
                Commission, supporting projects like Africatown Plaza, Ethiopian
                Community Center, Elizabeth Thomas Homes, Beacon Pacific Village
                North Lot, and NP Eastern Hotel.
              </span>
            </li>
            <li className="flex items-start gap-x-10">
              <img
                src="/images/liarrow.png"
                alt=""
                className="w-6 h-auto mt-2"
              />
              <span>
                <b>$1.4 million</b> allocated for the Keiro project, preventing
                predatory land grabs and creating opportunities for Black
                community equity in the Central District.
              </span>
            </li>
            <li className="flex items-start gap-x-10">
              <img
                src="/images/liarrow.png"
                alt=""
                className="w-6 h-auto mt-2"
              />
              <span>
                The transformation of Fire Station 6 into the William Grose
                Center, opened in 2022.
              </span>
            </li>
            <li className="flex items-start gap-x-10">
              <img
                src="/images/liarrow.png"
                alt=""
                className="w-6 h-auto mt-2"
              />
              <span>
                Land transfers for the development of the Youth Achievement
                Center, led by Community Passageways & Creative Justice.
              </span>
            </li>
            <li className="flex items-start gap-x-10">
              <img
                src="/images/liarrow.png"
                alt=""
                className="w-6 h-auto mt-2"
              />
              <span>
                <b>$27 million</b> for Africatown Plaza, promoting Black
                community-centered spaces and scalable models to counter
                gentrification impacts.
              </span>
            </li>
            <li className="flex items-start gap-x-10">
              <img
                src="/images/liarrow.png"
                alt=""
                className="w-6 h-auto mt-2"
              />
              <span>
                Secured state funding for the Tubman Center for Health &
                Freedom, advancing long-overdue community-led health and healing
                in the South End, with plans for a 40,000 square-foot center by
                2027, serving up to 120,000 patients annually.
              </span>
            </li>
            <li className="flex items-start gap-x-10">
              <img
                src="/images/liarrow.png"
                alt=""
                className="w-6 h-auto mt-2"
              />
              <span>
                <b>$1 million</b> to purchase Black land ownership in Othello
                for an East African-centered Family Empowerment Center and
                Community Housing.
              </span>
            </li>
            <li className="flex items-start gap-x-10">
              <img
                src="/images/liarrow.png"
                alt=""
                className="w-6 h-auto mt-2"
              />
              <span>
                <b>$400,000</b> in ongoing support to restore and expand
                education to Petah Village in South Seattle through outdoor
                preschool education.
              </span>
            </li>
          </ul>
        </section>

        {/* Challenges Ahead */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-yellow mb-3">
            Challenges Ahead
          </h2>
          <p>
            Despite these advancements, significant obstacles persist.
            Nationally and locally, there are ongoing efforts to disenfranchise
            the Black community, destabilize progress, and fund initiatives like
            the Fairness and Families agenda. Efforts in Evanston, IL, and even
            the state of reparations to Tulsa Race Massacre survivors are
            alarming.
          </p>
          <br />
          <p>
            Locally, attempts to divert funds from the Community Reinvestment
            Program, Participatory Budgeting, and the Equitable Development
            Initiative are concerning. Additionally, recent city planning lacks
            equitable strategies to protect vulnerable communities from
            displacement.
          </p>
        </section>

        {/* Call to Action */}
        <section>
          <h2 className="text-3xl font-bold text-yellow mb-3">
            Call to Action
          </h2>
          <p>
            We urge non-Black-led organizations to refrain from competing for
            resources intended for Black communities. This perpetuates inequity
            and undermines our efforts towards justice and equality.
          </p>
          <br />
          <p>
            The Nonprofit Industrial Complex has grown into a billion-dollar
            industry over 50 years, disproportionately benefitting white
            organizations while Black communities have faced ongoing decline.
            This disparity must end immediately.
          </p>
          <br />
          <p>
            We also call for an end to the use of Black organizations as tokens
            by non-Black entities. Black communities are fully capable of
            directing and managing resources through our own channels.
          </p>
          <br />
          <p className="pb-10">
            With Juneteenth now a national holiday, we call upon our supporters
            to honor its significance by recommitting to supporting our critical
            work. Together, we can dismantle systemic inequities and establish a
            new norm rooted in equity for Seattle and Martin Luther King Jr.
            County.
          </p>
        </section>
        {/* <div className="flex items-center justify-center py-10">
          <a
            href=""
            className="bg-yellow text-black px-5 py-2 rounded-full text-base uppercase font-bold hover:bg-green- hover:text-white"
          >
            Latest freedom actions
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default RecentWinsPage;
