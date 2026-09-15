import { useState } from "react";
import technologies from "../data/technologies.json";

type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

function TechnologySection() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technology[]
  >([]);

  const handleAddToStack = (technology: Technology) => {
    setSelectedTechnologies((current) => {
      if (current.some((item) => item.id === technology.id)) {
        return current;
      }

      return [...current, technology];
    });
  };

  return (
    <section
      id="technologies"
      className="bg-white px-5 py-16 lg:px-0"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* Section Heading */}
        <div className="mb-10 text-left">
          <h2 className="text-3xl font-bold text-[#111827] sm:text-4xl">
            Explore the{" "}
            <span className="text-[#e91e8f]">
              Technologies
            </span>
          </h2>

          <p className="mt-3 max-w-[600px] text-sm leading-6 text-gray-500 sm:text-base">
            Pick one technology per categry to build your ideal stack
          </p>
        </div>

        {/* Technology Area */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px]">

          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology) => {
              const isAdded = selectedTechnologies.some(
                (item) => item.id === technology.id
              );

              return (
                <div
                  key={technology.id}
                  className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >

                  {/* Icon + Badge */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50">
                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-8 w-8 object-contain"
                      />
                    </div>

                    <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-[#e91e8f]">
                      {technology.badge}
                    </span>
                  </div>

                  {/* Technology Name */}
                  <h3 className="mt-4 text-lg font-bold text-[#111827]">
                    {technology.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 min-h-[72px] text-sm leading-6 text-gray-500">
                    {technology.description}
                  </p>

                  {/* Category + Difficulty + Rating */}
                  <div className="mt-4 flex items-center justify-between gap-2">

                    {/* Category */}
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                      {technology.category}
                    </span>

                    {/* Difficulty */}
                    <span className="text-xs font-medium text-gray-500">
                      {technology.difficulty}
                    </span>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-yellow-400">
                        ⭐
                      </span>

                      <span className="text-xs font-medium text-gray-600">
                        {technology.rating}
                      </span>
                    </div>

                  </div>

                  {/* Add to Stack Button */}
                <button type="button" disabled={isAdded} onClick={() => handleAddToStack(technology)}
                className={`mt-5 w-full rounded-md px-4 py-2.5 text-sm font-semibold transition ${
                isAdded
                ? "cursor-not-allowed bg-pink-50 text-[#e91e8f]"
                : "bg-black text-white hover:bg-gray-800"
                }`}
                 >
                {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                </button>

                </div>
              );
            })}
          </div>

          {/* Your Stack */}
          <aside className="h-fit rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800">
              Your Stack
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              {selectedTechnologies.length === 0
                ? "No Technologies Selected"
                : `${selectedTechnologies.length} ${
                    selectedTechnologies.length === 1
                      ? "Technology"
                      : "Technologies"
                  } Selected`}
            </p>

            {/* Empty Stack */}
            {selectedTechnologies.length === 0 ? (
              <div className="mt-8 rounded-lg bg-gray-50 px-5 py-10 text-center">
                <p className="text-sm font-medium text-gray-500">
                  Your stack is empty
                </p>
              </div>
            ) : (
              /* Selected Technologies */
              <div className="mt-6 space-y-3">
                {selectedTechnologies.map((technology) => (
                  <div
                    key={technology.id}
                    className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50 p-3"
                  >
                    {/* Technology Icon */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white">
                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-6 w-6 object-contain"
                      />
                    </div>

                    {/* Technology Information */}
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-gray-800">
                        {technology.name}
                      </p>

                      <p className="text-xs text-gray-500">
                        {technology.category}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </aside>

        </div>
      </div>
    </section>
  );
}

export default TechnologySection;