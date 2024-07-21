const categories = [
  "Dragon Ball Z",
  "Naruto",
  "One Piece",
  "Bleach",
  "Attack On Titan",
  "Demon Slayer",
  "Jujutsu Kaisen",
  "Pokemon",
];

interface CategoryProps {
  handleCategoryClick: (category: string) => void;
}

const Category = ({ handleCategoryClick }: CategoryProps) => {
  return (
    <div className="flex flex-col gap-2 lg:flex-row lg:gap-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className="px-4 py-2 border rounded-md bg-white capitalize text-left hover:bg-gray-100 lg:mx-2"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Category;
