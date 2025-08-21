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
            We measure success by the tangible investments and improvements in
            the lives of Black people. Through nearly 315,000 direct actions of
            community members, we have made strides in securing land and other
            forms of equity for the Black community.To date our collective
            achievements include:
          </p>
          <ul className="text-white text-xl font-normal mx-0 md:mx-72 flex flex-col gap-y-6">
            <li className="flex items-start gap-x-10">
              <img
                src="/images/liarrow.png"
                alt=""
                className="w-6 h-auto mt-2"
              />
              <p className="text-xl">
                <strong className="font-bold">
                  $200 Million for the&nbsp;
                  <a
                    href="https://www.commerce.wa.gov/crp/"
                    target="_blank"
                    className="underline cursor-pointer"
                  >
                    Community Reinvestment Program
                  </a>
                </strong>
                &nbsp;for the Community Reinvestment Program, safeguarded from
                redirection by opportunistic politicians.
              </p>
            </li>

            <li className="flex items-start gap-x-10">
              <img
                src="/images/liarrow.png"
                alt=""
                className="w-6 h-auto mt-2"
              />
              <p className="text-xl">
                <strong className="font-bold">
                  $150 Million for affordable housing
                </strong>
                &nbsp;development from the Washington State Housing Finance
                Commission, supporting projects like&nbsp;
                <a
                  href="https://www.quorum.us/login/?next=/outbox/compose/403086/africatownplaza.org/"
                  target="_blank"
                  className="underline cursor-pointer"
                >
                  Africatown Plaza
                </a>
                , the&nbsp;
                <a
                  href="https://ecseattle.org/ethiopian-village/"
                  target="_blank"
                  className="underline cursor-pointer"
                >
                  Ethiopian Community Center
                </a>
                ,&nbsp;
                <a
                  href="https://www.elizabeththomashomesapts.com/"
                  target="_blank"
                  className="underline cursor-pointer"
                >
                  Elizabeth Thomas Homes
                </a>
                ,&nbsp;
                <a
                  href="https://docs.google.com/document/d/1zHAfYykQ5GAtYiUfrtv7hoLddGCKujACbjj9B57EP58/edit?tab=t.vmnag9sfxine"
                  target="_blank"
                  className="underline cursor-pointer"
                >
                  Beacon Pacific Village
                </a>
                , Village (North Lot), and the&nbsp;
                <a
                  href="https://allycommunitydevelopment.com/np-and-eastern-hotel/"
                  target="_blank"
                  className="underline cursor-pointer"
                >
                  NP/Eastern Hotel
                </a>
                .
              </p>
            </li>

            <li className="flex items-start gap-x-10">
              <img
                src="/images/liarrow.png"
                alt=""
                className="w-6 h-auto mt-2"
              />
              <p className="text-xl">
                <strong className="font-bold">$100 million</strong>
                &nbsp;from City of Seattle.
              </p>
            </li>

            <li className="flex items-start gap-x-10">
              <img
                src="/images/liarrow.png"
                alt=""
                className="w-6 h-auto mt-2"
              />
              <p className="text-xl">
                <strong className="font-bold">
                  $14 Million&nbsp;
                </strong>
                allocated for the Keiro acquisiton (now&nbsp; 
                <a
                    href="https://www.quorum.us/login/?next=/outbox/compose/403086/benuhome.org/"
                    target="_blank"
                    className="underline cursor-pointer"
                  >
                    Benu Community
                  </a>
                 &nbsp;Home), preventing predatory development and creating
                opportunities for Black community equity.
              </p>
            </li>

            <li className="flex items-start gap-x-10">
              <img
                src="/images/liarrow.png"
                alt=""
                className="w-6 h-auto mt-2"
              />
              <p className="text-xl">
                <strong className="font-bold">
                  Transfer of Fire Station 6 to become the&nbsp;
                  <a
                    href="https://www.quorum.us/login/?next=/outbox/compose/403086/williamgrose.org/"
                    target="_blank"
                    className="underline cursor-pointer"
                  >
                    William Grose Center
                  </a>
                </strong>
                &nbsp;which opened in 2022.
              </p>
            </li>

            <li className="flex items-start gap-x-10">
              <img
                src="/images/liarrow.png"
                alt=""
                className="w-6 h-auto mt-2"
              />
              <p className="text-xl">
                <strong className="font-bold">
                  Land Transfer for the development of the&nbsp;
                  <a
                    href="https://www.youthachievementcenter.org/"
                    target="_blank"
                    className="underline cursor-pointer"
                  >
                    Youth Achievement Center
                  </a>
                </strong>
                &nbsp;led by Community Passageways & Creative Justice and Africatown Community Land Trust.
              </p>
            </li>

            <li className="flex items-start gap-x-10">
              <img
                src="/images/liarrow.png"
                alt=""
                className="w-6 h-auto mt-2"
              />
              <p className="text-xl">
                <strong className="font-bold">
                  State Funding for&nbsp;
                  <a
                    href="https://www.tubmanhealth.org/"
                    target="_blank"
                    className="underline cursor-pointer"
                  >
                    Tubman Center for Health & Freedom’s
                  </a>
                </strong>
                &nbsp;two community-owned health sites in South Seattle, and a new 40,000-square-foot center set to open in 2027.
              </p>
            </li>

            <li className="flex items-start gap-x-10">
              <img
                src="/images/liarrow.png"
                alt=""
                className="w-6 h-auto mt-2"
              />
              <p className="text-xl">
                <strong className="font-bold">
                  $1 Million secured for Black land ownership in Othello
                </strong>
                , supporting the East African-centered Family Empower Center and Community Housing.
              </p>
            </li>

            <li className="flex items-start gap-x-10">
              <img
                src="/images/liarrow.png"
                alt=""
                className="w-6 h-auto mt-2"
              />
              <p className="text-xl">
                <strong className="font-bold">
                  Supported&nbsp;
                  <a
                    href="https://newbirthcci.yalifestudios.com/"
                    target="_blank"
                    className="underline cursor-pointer"
                  >
                    New Birth Center for Community Inclusion
                  </a>
                </strong>
                &nbsp;in securing legislative funds for phase 1 of Petah Villages, a trauma-informed early childhood education program in Skyway.
              </p>
            </li>
            
            <li className="flex items-start gap-x-10">
              <img
                src="/images/liarrow.png"
                alt=""
                className="w-6 h-auto mt-2"
              />
              <p className="text-xl">
                <strong className="font-bold">
                  Over 4,000 actions to secure the&nbsp;
                  <a
                    href="https://www.wshfc.org/covenant/index.htm"
                    target="_blank"
                    className="underline cursor-pointer"
                  >
                    Covenant Homeownership Act
                  </a>
                </strong>
                &nbsp;that provides up to $150K in down payment assistance to homebuyers who&apos;s families endured racial housing covenants.
              </p>
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
