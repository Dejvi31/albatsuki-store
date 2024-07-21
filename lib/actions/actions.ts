// export const getCollections = async () => {
//   const collections = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/collections`
//   );

//   return await collections.json();
// };

// export const getProducts = async () => {
//   const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
//   return await products.json();
// };

// export const getProductDetails = async (productId: string) => {
//   const product = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`
//   );
//   return await product.json();
// };

// // Fetches the collection and the detailed product information for the products in that collection
// export const getCollectionDetails = async (collectionId: string) => {
//   const collectionResponse = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}`
//   );
//   const collection = await collectionResponse.json();

//   // Fetch detailed information for each product in the collection
//   const productDetailsPromises = collection.products.map((productId: string) =>
//     fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`).then(
//       (res) => res.json()
//     )
//   );
//   const products = await Promise.all(productDetailsPromises);

//   return {
//     ...collection,
//     products, // Attach the detailed product information
//   };
// };

export const getCollections = async () => {
  const collections = await fetch(
    `${
      process.env.NEXT_PUBLIC_API_URL
    }/collections?timestamp=${new Date().getTime()}`
  );

  return await collections.json();
};

export const getProducts = async () => {
  const products = await fetch(
    `${
      process.env.NEXT_PUBLIC_API_URL
    }/products?timestamp=${new Date().getTime()}`
  );
  return await products.json();
};

export const getProductDetails = async (productId: string) => {
  const product = await fetch(
    `${
      process.env.NEXT_PUBLIC_API_URL
    }/products/${productId}?timestamp=${new Date().getTime()}`
  );
  return await product.json();
};

// Fetches the collection and the detailed product information for the products in that collection
export const getCollectionDetails = async (collectionId: string) => {
  const collectionResponse = await fetch(
    `${
      process.env.NEXT_PUBLIC_API_URL
    }/collections/${collectionId}?timestamp=${new Date().getTime()}`
  );
  const collection = await collectionResponse.json();

  // Fetch detailed information for each product in the collection
  const productDetailsPromises = collection.products.map((productId: string) =>
    fetch(
      `${
        process.env.NEXT_PUBLIC_API_URL
      }/products/${productId}?timestamp=${new Date().getTime()}`
    ).then((res) => res.json())
  );
  const products = await Promise.all(productDetailsPromises);

  return {
    ...collection,
    products, // Attach the detailed product information
  };
};
