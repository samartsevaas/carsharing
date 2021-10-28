import { BaseService } from '../../base';

export class selectedCategoriesService extends BaseService {
    async getcarsByCategory(categoryId) {
      const data = await this.send({
        url: `/car?categoryId=${categoryId}`,
      });
      return data;
    }
  }
  