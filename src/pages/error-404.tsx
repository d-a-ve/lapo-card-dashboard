export function Error404Page() {
  return (
    <div className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center h-full">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>
      <p className="mt-4 text-xl text-gray-600">Page not found</p>
      <p className="mt-2 text-gray-500">
        The page you are looking for doesn't exist or has been moved or hasn't been implemented yet.
      </p>
    </div>
  );
}
