import React from 'react';

const App = () => (
  <div className="p-4 min-h-screen bg-slate-100">
    <h1 className="text-3xl font-bold text-red-500 bg-white p-4 rounded-lg shadow-md">
      Tailwind Test - This should be red with shadow
    </h1>
    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
      Test Button
    </button>
  </div>
);

export default App;