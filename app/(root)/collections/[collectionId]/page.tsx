import CollectionInfo from "@/components/CollectionInfo";
import { getCollectionDetails } from "@/lib/actions/actions";
import React from "react";

const page = async ({ params }: { params: { collectionId: string } }) => {
  const collectionDetails = await getCollectionDetails(params.collectionId);
  return <CollectionInfo collectionDetails={collectionDetails} />;
};

export const dynamic = "force-dynamic";
export default page;
