import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/actions/actions";

const CategoryPage = async ({ params }: { params: { categoryId: string } }) => {
  const { categoryId } = params;

  // Decode the categoryId to handle URL encoding
  const decodedCategoryId = decodeURIComponent(categoryId);

  // Fetch all products
  const allProducts: ProductType[] = await getProducts();

  // Filter products by the decodedCategoryId
  const filteredProducts = allProducts.filter(
    (product) =>
      product.category.toLowerCase() === decodedCategoryId.toLowerCase()
  );

  return (
    <div className="py-8 px-5">
      <h1 className="text-heading1-bold text-center mb-8">
        {decodedCategoryId} Products
      </h1>
      {filteredProducts.length === 0 ? (
        <p className="text-body-bold text-center">No products found</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {filteredProducts.map((product) => (
            <div key={product._id} className="flex justify-center items-center">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
