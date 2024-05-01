import { signal } from "@preact/signals-react";

type CategorieProps = string;

export const categories = signal<CategorieProps[] | []>(['groceries', 'rent', 'utilities', 'transportation', 'entertainment', 'clothing', 'health', 'insurance', 'education', 'other'].sort());

/**
 * Categories store
 * @example
 * const { categories, addCategory, deleteCategorie } = useCategoriesStore();
 * @returns {object} The categories array
 * @returns {function} The addCategory function
 * @returns {function} The deleteCategorie function
 */

export const useCategoriesStore = () => {
  const addCategory = (value: CategorieProps) => {
    categories.value = [...categories.value, value];
  }

  const deleteCategorie = (index: number) => {
    categories.value = categories.value.filter((_, i) => i !== index);
  }

  return { categories, addCategory, deleteCategorie };
}