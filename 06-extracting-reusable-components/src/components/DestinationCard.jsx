import React from "react";

export default function DestinationCard({ destination }) {
  return (
    <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
      <img className="h-32 w-32 flex-shrink-0" src={destination.imageUrl} alt={destination.imageAlt} />
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-800">{destination.city}</h3>

        <p className="text-gray-600">${destination.averagePrice} / night average</p>
        <div className="mt-4">
          <a href="#" className="text-indigo-600 hover:text-indigo-500 font-semibold text-sm">
            Explore {destination.propertyCount} properties
          </a>
        </div>
      </div>
    </div>
  );
}
