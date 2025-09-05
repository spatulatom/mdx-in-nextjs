import Link from "next/link";

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

export default function PhotosPage() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          How This Demo Works
        </h2>
        <div className="space-y-2 text-gray-600">
          <p>
            • Click on any photo to open it in a modal (using intercepted
            routes)
          </p>
          <p>• The modal opens instantly via client-side navigation</p>
          <p>
            • Direct navigation to <code>/photos/[id]</code> shows the full page
          </p>
          <p>• Refresh while modal is open to see the full page version</p>
          <p>
            • The modal uses parallel routes with the <code>@modal</code> slot
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Photo Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <Link
              key={photo.id}
              href={`/photos/${photo.id}`}
              className="block group"
            >
              <div className="aspect-square rounded-lg overflow-hidden">
                <div
                  className={`${photo.color} w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform`}
                >
                  <div className="text-center text-white p-4">
                    <div className="text-4xl mb-2">📸</div>
                    <div className="font-semibold">{photo.title}</div>
                    <div className="text-sm opacity-90">
                      {photo.description}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
