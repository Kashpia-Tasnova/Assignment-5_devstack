function TechnologySection() {
  return (
    <section
      id="technologies"
      className="bg-white px-5 py-16 lg:px-0"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* Section Heading */}
        <div className="mb-10 text-left">
          <h2 className="text-3xl font-bold text-[#111827] sm:text-4xl">
            Explore Your{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-3 max-w-[600px] text-sm leading-6 text-gray-500 sm:text-base">
            Discover the technologies you need to build your next great
            project.
          </p>
        </div>

        {/* Technology Area */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px]">

          {/* Technology Cards Area */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {/* Technology cards will be added in the next step */}
          </div>

          {/* Your Stack */}
          <aside className="h-fit rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800">
              Your Stack
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              No Technologies Selected
            </p>

            {/* Empty Stack */}
            <div className="mt-8 rounded-lg bg-gray-50 px-5 py-10 text-center">
              <p className="text-sm font-medium text-gray-500">
                Your stack is empty
              </p>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}

export default TechnologySection;