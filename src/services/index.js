import { CityService } from "./city";
import { PointService } from "./point";
import { ModelService } from "./models";
import { CategoriesService } from "./categories";
import { selectedCategoriesService } from "./categories/selectedCategory"

export default {
  city: new CityService(),
  point: new PointService(),
  cars: new ModelService(),
  categories: new CategoriesService(),
  currentCategory: new selectedCategoriesService()
};
