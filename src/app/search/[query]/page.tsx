import Link from "next/link";

interface SearchResultPageProps {
  params: {
    query: string;
  };
}

export default function SearchResultPage({ params }: SearchResultPageProps) {
  const decodedQuery = decodeURIComponent(params.query);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Search Result
            </div>
            <h1 className="mt-2 text-3xl font-bold text-gray-900">
              Hello {decodedQuery}!
            </h1>
            <p className="mt-4 text-gray-600">
              You searched for &ldquo;{decodedQuery}&rdquo; and here you are!
              This is a dynamic page that displays whatever you clicked from the
              autocomplete suggestions.
            </p>

            <div className="mt-8 space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900">How it works:</h3>
                <ul className="mt-2 text-blue-800 space-y-1 list-disc list-inside">
                  <li>The search input filters suggestions client-side</li>
                  <li>
                    Clicking a suggestion navigates to{" "}
                    <code>/search/[query]</code>
                  </li>
                  <li>This dynamic route displays your selected term</li>
                </ul>
              </div>

              <Link
                href="/"
                className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
