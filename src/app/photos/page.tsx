import Link from 'next/link';

const photos = [
  {
    id: '1',
    title: 'Mountain Sunset',
    description: 'Beautiful sunset over mountains',
    color: 'bg-orange-400',
  },
  {
    id: '2',
    title: 'Ocean Waves',
    description: 'Calm ocean waves at sunrise',
    color: 'bg-blue-400',
  },
  {
    id: '3',
    title: 'Forest Path',
    description: 'Winding path through green forest',
    color: 'bg-green-400',
  },
  {
    id: '4',
    title: 'City Lights',
    description: 'Urban landscape at night',
    color: 'bg-purple-400',
  },
  {
    id: '5',
    title: 'Desert Dunes',
    description: 'Rolling sand dunes at dawn',
    color: 'bg-yellow-400',
  },
  {
    id: '6',
    title: 'Snowy Peak',
    description: 'Snow-covered mountain peak',
    color: 'bg-gray-300',
  },
];

export default function PhotosPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">How This Demo Works</h2>
        <div className="space-y-2 text-gray-600">
          <p>• Click on any photo to open it in a modal (using intercepted routes)</p>
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

      <div className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">Photoo Gallery</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <Link key={photo.id} href={`/photos/${photo.id}`} className="group block">
              <div className="aspect-square overflow-hidden rounded-lg">
                <div
                  className={`${photo.color} flex h-full w-full items-center justify-center transition-transform group-hover:scale-105`}
                >
                  <div className="p-4 text-center text-white">
                    <div className="mb-2 text-4xl">📸</div>
                    <div className="font-semibold">{photo.title}</div>
                    <div className="text-sm opacity-90">{photo.description}</div>
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
