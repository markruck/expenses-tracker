import { useCategoriesStore } from "@/lib/stores/categoriesStore";

type CategoriesSelectorProps = {
  category: string;
  setCategory: (category: string) => void;
}

const CategoriesSelector = ({ category, setCategory }: CategoriesSelectorProps) => {

  const { categories } = useCategoriesStore();

  return (
    <div className="flex flex-col space-between">
      <label htmlFor="category">Category</label>
      <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option key={category} value="all">All</option>
        {categories.value.map((category) => {
          return <option key={category} value={category}>{category}</option>
        })}
      </select>
    </div>
  )
}

export default CategoriesSelector;