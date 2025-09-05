import Link from "next/link";

interface PhotoPageProps {
  params: {
    id: string;
  };
}

const photos = [
  {
    id: "1",
    title: "Mountain Sunset",
    description: "Beautiful sunset over mountains",
    color: "bg-orange-400",
  },
  {
    id: "2",
    title: "Ocean Waves",
    description: "Calm ocean waves at sunrise",
    color: "bg-blue-400",
  },
  {
    id: "3",
    title: "Forest Path",
    description: "Winding path through green forest",
    color: "bg-green-400",
  },
  {
    id: "4",
    title: "City Lights",
    description: "Urban landscape at night",
    color: "bg-purple-400",
  },
  {
    id: "5",
    title: "Desert Dunes",
    description: "Rolling sand dunes at dawn",
    color: "bg-yellow-400",
  },
  {
    id: "6",
    title: "Snowy Peak",
    description: "Snow-covered mountain peak",
    color: "bg-gray-300",
  },
];

export default function PhotoPage({ params }: PhotoPageProps) {
  const photo = photos.find((p) => p.id === params.id);

  if (!photo) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Photo Not Found
        </h2>
        <p className="text-gray-600 mb-4">
          The requested photo could not be found.
        </p>
        <Link
          href="/photos"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back to Gallery
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Full Photo Page
          </h2>
          <Link
            href="/photos"
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Back to Gallery
          </Link>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg mb-6">
          <p className="text-yellow-800">
            <strong>Full Page Mode:</strong> This is the full page version
            accessed directly or via page refresh. Compare this with the modal
            version accessed from the gallery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="aspect-square rounded-lg overflow-hidden">
            <div
              className={`${photo.color} w-full h-full flex items-center justify-center`}
            >
              <div className="text-center text-white p-8">
                <div className="text-8xl mb-4">📸</div>
                <div className="text-2xl font-bold">{photo.title}</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {photo.title}
              </h3>
              <p className="text-gray-600">{photo.description}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                Photo Details:
              </h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Photo ID: {photo.id}</li>
                <li>• Type: Simulated photo</li>
                <li>• Access: Direct URL or page refresh</li>
                <li>• Context: Standalone page</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">
                Routing Behavior:
              </h4>
              <ul className="text-green-800 space-y-1 text-sm">
                <li>• Direct navigation shows this full page</li>
                <li>• Navigation from gallery shows modal</li>
                <li>• Page refresh always shows full page</li>
                <li>• Demonstrates intercepted routes pattern</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
