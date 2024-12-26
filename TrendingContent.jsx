import React from 'react';

function TrendingContent() {
  return (
    <div className=" p-4 rounded-lg shadow-lg space-y-4 space-y-w-full border border-slate-700  bg-black flex flex-col4">
      {/* Title */}
      <p className="text-lg font-bold text-white">What’s happening ?</p>

      {/* Trend Items */}
      <div className="space-y-3">
        <div>
          <p className="text-sm text-gray-600">Trending in Tunisia</p>
          <p className="text-sm font-semibold text-blue-500">قرطاج السينماييه</p>
        </div>

        <div>
          <p className="text-sm text-gray-600">Trending in Tunisia</p>
          <p className="text-sm font-semibold text-blue-500">#forzaca</p>
        </div>

        <div>
          <p className="text-sm text-gray-600">Trending in Tunisia</p>
          <p className="text-sm font-semibold text-blue-500">#ESTCA</p>
        </div>

        <div>
          <p className="text-sm text-gray-600">Trending in Tunisia</p>
          <p className="text-sm font-semibold text-blue-500">النادي الافريقي</p>
        </div>
      </div>

      {/* Show More Link */}
      <a href="#" className="text-sm text-blue-500 hover:underline">Show more</a>
    </div>
  );
}

export default TrendingContent;
