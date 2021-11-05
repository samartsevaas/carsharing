import { BaseService } from "../base";

export class CategoriesService extends BaseService {
  async getListOfCategories() {
    const data = await this.send({
      url: "/category",
    });
    return data;
  }
}
