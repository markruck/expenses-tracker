import { useCategoriesStore } from "@/lib/stores/categoriesStore";

type CategorieSelectorProps = {
  category: string;
  setCategory: (category: string) => void;
  row?: boolean;
  showAll?: boolean;
  withLabel?: boolean;
}

/**
 * Component to select a category from the available categories
 * @example
 * <CategorieSelector category="Groceries" setCategory={setCategory} row showAll withLabel />
 * @param {object} props - The props for the component
 * @param {string} props.category - The category to select
 * @param {function} props.setCategory - The function to set the category
 * @param {boolean} props.row - If the selector should be displayed in a row
 * @param {boolean} props.showAll - If the selector should show all categories
 * @param {boolean} props.withLabel - If the selector should have a label
 */

const CategorieSelector = ({ category, setCategory, row, showAll, withLabel }: CategorieSelectorProps) => {

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

export default CategorieSelector;