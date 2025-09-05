export default function PageViewsPage() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-800">Page Views Analytics</h3>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-medium text-blue-900 mb-2">Top Pages</h4>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-blue-800">/dashboard</span>
            <span className="text-blue-600 font-semibold">456 views</span>
          </div>
          <div className="flex justify-between">
            <span className="text-blue-800">/mdx-example</span>
            <span className="text-blue-600 font-semibold">234 views</span>
          </div>
          <div className="flex justify-between">
            <span className="text-blue-800">/mdx-explained</span>
            <span className="text-blue-600 font-semibold">123 views</span>
          </div>
        </div>
      </div>

      <p className="text-gray-600 text-sm">
        Notice how this content loads independently in the analytics slot while
        the team slot maintains its previous state.
      </p>
    </div>
  );
}
