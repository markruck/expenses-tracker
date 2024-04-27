import { useCategoriesStore } from "@/lib/stores/categoriesStore";

type CategoriesSelectorProps = {
  category: string;
  setCategory: (category: string) => void;
  row?: boolean;
  showAll?: boolean;
  withLabel?: boolean;
}

/**
 * Component to select a category from the available categories
 * @param category - The selected category
 * @param setCategory - Function to set the selected category
 * @param row - If the component should be displayed in a row
 * @param showAll - If the component should show all categories
 * @param withLabel - If the component should have a label
 * @returns
 * @example
 * <CategoriesSelector category={category} setCategory={setCategory} row showAll withLabel />
 * @example
 * <CategoriesSelector category={category} setCategory={setCategory} />
 * 
 */

const CategoriesSelector = ({ category, setCategory, row, showAll, withLabel }: CategoriesSelectorProps) => {

  const { categories } = useCategoriesStore();
  const classes = row ? 'flex flex-row space-between' : 'flex flex-col space-between';
  const defaultLabel = showAll ? 'All' : 'Category';

  return (
    <div className={classes}>
      {withLabel ? <label htmlFor="category">Category</label> : null}
      <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option key={category} value={showAll ? "all" : undefined} >{defaultLabel}</option>
        {categories.value.map((category) => {
          return <option key={category} value={category}>{category}</option>
        })}
      </select>
    </div>
  )
}

export default CategoriesSelector;