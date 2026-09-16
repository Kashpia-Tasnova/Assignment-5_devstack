import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import technologiesData from "../data/technologies.json";

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
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technology[]
  >([]);

  // Load technology data
  useEffect(() => {
    const loadTechnologies = () => {
      setTechnologies(technologiesData);
      setIsLoading(false);
    };

    const timer = setTimeout(loadTechnologies, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setSelectedTechnologies((current) => [
      ...current,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack!`);
  };

  const handleDuplicateAttempt = (technology: Technology) => {
    toast.warning(`${technology.name} is already in your stack!`);
  };

  const handleRemoveFromStack = (technologyId: string) => {
    const technology = selectedTechnologies.find(
      (item) => item.id === technologyId
    );

    setSelectedTechnologies((current) =>
      current.filter((item) => item.id !== technologyId)
    );

    if (technology) {
      toast.info(`${technology.name} removed from your stack!`);
    }
  };

  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      return;
    }

    setSelectedTechnologies([]);
    toast.info("All technologies removed from your stack!");
  };
  const getBadgeColor = (badge: string) => {
  switch (badge) {
    case "Popular":
      return "bg-cyan-50 text-cyan-600";

    case "Versatile":
    case "Modern":
    case "Standard":
      return "bg-green-50 text-green-600";

    case "Fast":
      return "bg-orange-50 text-orange-600";

    case "Top SQL":
      return "bg-blue-50 text-blue-600";

    case "Cache":
      return "bg-red-50 text-red-600";

    case "Ubiquitous":
      return "bg-yellow-50 text-yellow-600";

    case "Essential":
    case "Robust":
    case "Containers":
      return "bg-cyan-50 text-cyan-600";

    default:
      return "bg-gray-50 text-gray-600";
  }
};

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />

      <section id="technologies" className="bg-white px-5 py-16 lg:px-0" >
        <div className="mx-auto max-w-[1200px]">
          {/* Section Heading */}
          <div className="mb-10 text-left">
            <h2 className="text-3xl font-bold text-[#111827] sm:text-4xl">
              Explore the{" "}
              <span className="text-[#e91e8f]"> Technologies </span>
            </h2>

            <p className="mt-3 max-w-[600px] text-sm leading-6 text-gray-500 sm:text-base">
              Pick one technology per categry to build your ideal
              stack
            </p>
          </div>

          {/* Technologies & My Stack */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px]">
            {/* Technology Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {isLoading ? (
                <div className="col-span-full flex min-h-[300px] items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-[#e91e8f]" />

                    <p className="mt-4 text-sm font-medium text-gray-500">
                      Loading technologies...
                    </p>
                  </div>
                </div>
              ) : (
                technologies.map((technology) => {
                  const isAdded = selectedTechnologies.some(
                    (item) => item.id === technology.id
                  );

                  return (
                    <div
                      key={technology.id}
                      className={`rounded-xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
                        isAdded
                          ? "border-[#e91e8f]"
                          : "border-gray-200"
                      }`}
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

              {technology.badge && (
                 <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${getBadgeColor(
                     technology.badge
                   )}`}
                  >
               {technology.badge}
                  </span>
                   )}
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
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                          {technology.category}
                        </span>

                        <span className="text-xs font-medium text-gray-500">
                          {technology.difficulty}
                        </span>

                        <div className="flex items-center gap-1">
                          <span className="text-sm text-yellow-400">
                            ⭐
                          </span>

                          <span className="text-xs font-medium text-gray-600">
                            {technology.rating}
                          </span>
                        </div>
                      </div>

                      {/* Add Button */}
                      {isAdded ? (
                        <div
                          className="mt-5 w-full cursor-pointer"
                          onClick={() =>
                            handleDuplicateAttempt(technology)
                          }
                        >
                          <button
                            type="button"
                            disabled
                            className="pointer-events-none w-full cursor-not-allowed rounded-md bg-pink-50 px-4 py-2.5 text-sm font-semibold text-[#e91e8f]"
                          >
                            ✓ Added to Stack
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() =>
                            handleAddToStack(technology)
                          }
                          className="mt-5 w-full rounded-md bg-black px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
                        >
                          Add to Stack
                        </button>
                      )}
                    </div>
                  );
                })
              )}
            </div>

            {/* Stack */}
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
                <>
                  {/* Selected Technologies */}
                  <div className="mt-6 space-y-3">
                    {selectedTechnologies.map((technology) => (
                      <div
                        key={technology.id}
                        className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50 p-3"
                      >
                        {/* Icon */}
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white">
                          <img
                            src={technology.icon}
                            alt={technology.name}
                            className="h-6 w-6 object-contain"
                          />
                        </div>

                        {/* Name + Category */}
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-gray-800">
                            {technology.name}
                          </p>

                          <p className="text-xs text-gray-500">
                            {technology.category}
                          </p>
                        </div>

                        {/* Remove Button */}
                        <button
                          type="button"
                          onClick={() =>
                            handleRemoveFromStack(
                              technology.id
                            )
                          }
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-gray-400 transition hover:bg-pink-50 hover:text-[#e91e8f]"
                          aria-label={`Remove ${technology.name}`}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Remove All */}
                  <button
                    type="button"
                    onClick={handleRemoveAll}
                    className="mt-5 w-full rounded-md border border-red-500 bg-white px-4 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50 active:bg-red-100"
                  >
                    Remove All
                  </button>
                </>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

export default TechnologySection;