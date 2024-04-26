import { signal } from "@preact/signals-react";

type CategorieProps = {
    description: string;
}
export const categories = signal<CategorieProps[] | []>([]);

export const useCategoryStore = () => {
    const addCategory = (value: CategorieProps) => {
      categories.value = [...categories.value, value];
    }

    const deleteExpense = (index: number) => {
      categories.value = categories.value.filter((_, i) => i !== index);
    }

    return { categories, addCategory, deleteExpense};
}