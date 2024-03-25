export default function AboutMe() {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon</h1>
      <p className="text-gray-600 text-lg mb-8">
        This page will be added soon. Stay tuned!
      </p>
      <a
        href="/"
        className="px-4 py-2 font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 transition-all duration-200 ease-in-out"
      >
        Go Home
      </a>
    </div>
  );
}
