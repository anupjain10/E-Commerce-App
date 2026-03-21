import { useState } from "react";

const Description = ({ reviewsCount = 135 }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="flex flex-col mx-10 md:mx-28 lg:mx-44 mb-16">
      {/* Tabs */}
      <div className="flex">
        {/* Description Tab */}
        <div
          onClick={() => setActiveTab("description")}
          className={`px-6 py-3 text-base font-semibold border border-gray-300 border-b-0 rounded-t-lg cursor-pointer transition ${
            activeTab === "description"
              ? "bg-white text-gray-800"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Description
        </div>

        {/* Reviews Tab */}
        <div
          onClick={() => setActiveTab("reviews")}
          className={`px-6 py-3 text-base font-semibold border border-gray-300 border-l-0 border-b-0 rounded-t-lg cursor-pointer transition ${
            activeTab === "reviews"
              ? "bg-white text-gray-800"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Reviews ({reviewsCount})
        </div>
      </div>

      {/* Content Box */}
      <div className="p-8 text-gray-700 leading-relaxed border border-gray-300 rounded-b-lg bg-white space-y-4">
        {activeTab === "description" ? (
          <>
            <p>
              This garment is thoughtfully crafted using high-quality,
              breathable fabric that ensures lasting comfort throughout the
              day.
            </p>
            <p>
              Designed with meticulous attention to detail, it features smooth,
              reinforced stitching that enhances durability and gives the piece
              a refined, polished look.
            </p>
            <p>
              Ideal for individuals who appreciate quality, style, and
              versatility, this piece stands out as a reliable and stylish
              choice.
            </p>
          </>
        ) : (
          <div className="space-y-4">
            <div className="border-b pb-3">
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-gray-500">★★★★★</p>
              <p className="text-sm mt-1">
                Amazing quality and perfect fit. Highly recommended!
              </p>
            </div>

            <div className="border-b pb-3">
              <p className="font-semibold">Sarah Lee</p>
              <p className="text-sm text-gray-500">★★★★☆</p>
              <p className="text-sm mt-1">
                Fabric feels premium and comfortable.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Description;
