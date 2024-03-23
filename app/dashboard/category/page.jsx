import AddCategory from "./addCategory/addCategory";
import CategoryList from "./categoryList/categoryList";
import SubCategoryList from "./subCategoryList/subCategoryList";
import SubCategoryModal from "./categoryList/subCategoryModal";

const Category = () => {
  return (
    <>
      <AddCategory />
      <CategoryList />
      <SubCategoryModal />
      <SubCategoryList />
    </>
  );
};

export default Category;
