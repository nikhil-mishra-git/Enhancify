const ActionButtons = () => (
  <div className="flex justify-center gap-4 mt-6">
    <button className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
      Enhance Quality
    </button>
    <button className="px-5 py-2 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-800 transition">
      Restore Face
    </button>
    <button className="px-5 py-2 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-800 transition">
      Remove Background
    </button>
  </div>
);

export default ActionButtons;
