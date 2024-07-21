import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Collections = async () => {
  const collections = await getCollections();

  return (
    <div className="py-8 px-5">
      <p className="text-heading1-bold text-center mb-8">Collections</p>
      {!collections || collections.length === 0 ? (
        <p className="text-body-bold text-center">No collections found</p>
      ) : (
        <div className="grid justify-items-center grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8">
          {collections.map((collection: CollectionType) => (
            <Link
              className="w-[220px] flex flex-col gap-2"
              href={`/collections/${collection._id}`}
              key={collection._id}
            >
              <div className="flex flex-col items-center">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  width={250}
                  height={300}
                  className="rounded-lg cursor-pointer"
                />
                <p className="text-center text-body-bold mt-2">
                  {collection.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;
