import { fetchEntries } from "@/lib/contentful";
import Link from "next/link";
import { SolutionsPageFields } from "../utils/types";

const EquitySolutionsPage = async () => {
  const entries = await fetchEntries<SolutionsPageFields>("solutionPage");

  if (entries.length === 0) {
    return <div>No content found.</div>;
  }

  const solutions = entries;

  return (
    <div className="custom-iamgeBackground">
      <h2 className="font-heading font-bold text-6xl md:text-7xl uppercase tracking-wide text-white p-8 md:p-16">
        Equity Solutions
      </h2>
      <section className="border-t-2 border-b-2 border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 border-gray-200">
          {solutions.map((solution, index) => {
            const columns = 3;
            const totalItems = solutions.length;
            const totalRows = Math.ceil(totalItems / columns);
            const itemRow = Math.floor(index / columns) + 1;

            const isLastColumn = (index + 1) % columns === 0;
            const isLastRow = itemRow === totalRows;

            // Define hover background classes for each index
            const hoverClasses = [
              "hover:bg-red",
              "hover:bg-yellow",
              "hover:bg-green",
              "hover:bg-[#3b82f680]",
              "hover:bg-red",
            ];

            // Fallback if there are more than 5 items
            const hoverClass = hoverClasses[index] || "hover:bg-red";

            return (
              <Link
                key={index}
                href={
                  solution.fields.slug === "community-safety"
                    ? "#"
                    : `/solutions/${solution.fields.slug}`
                }
                className={`
                  border-b-2 border-gray-200
                  md:border-b-2
                  md:border-r-2
                  ${isLastColumn ? "md:border-r-0" : ""}
                  ${isLastRow ? "md:border-b-0" : ""}
                `}
              >
                <div
                  className={`
              h-full focus:bg-none text-center text-white py-8 md:py-20 md:px-16
              ${hoverClass} hover:text-black
            `}
                >
                  <h2 className="font-button text-2xl uppercase tracking-wide md:pb-4">
                    {solution.fields.title}
                  </h2>
                  <div className="font-body text-xl hidden md:block">
                    <p>{solution.fields.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <div className="p-8 md:p-16"></div>
    </div>
  );
};

export default EquitySolutionsPage;
