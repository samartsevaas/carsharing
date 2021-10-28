import { BaseService } from "../base";

export class ModelService extends BaseService {
    async getListOfCars() {
      const data = await this.send({
        url: "/car",
      });
      return data;
    }
  }
  