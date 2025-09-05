import { Modal } from "@/components/Modal";

interface PhotoModalPageProps {
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

export default function PhotoModalPage({ params }: PhotoModalPageProps) {
  const photo = photos.find((p) => p.id === params.id);

  if (!photo) {
    return (
      <Modal>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900">
            Photo Not Found
          </h3>
          <p className="text-gray-600">
            The requested photo could not be found.
          </p>
        </div>
      </Modal>
    );
  }

  return (
    <Modal>
      <div className="space-y-4">
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

        <div>
          <h3 className="text-lg font-semibold text-gray-900">{photo.title}</h3>
          <p className="text-gray-600">{photo.description}</p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">
            Intercepted Route Features:
          </h4>
          <ul className="text-blue-800 space-y-1 text-sm">
            <li>• Opens instantly via client-side navigation</li>
            <li>• Maintains gallery context in the background</li>
            <li>
              • Shareable URL: <code>/photos/{photo.id}</code>
            </li>
            <li>• Refresh to see the full page version</li>
            <li>• Browser back button works naturally</li>
          </ul>
        </div>
      </div>
    </Modal>
  );
}
