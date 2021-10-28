import { BaseService } from "../base";

export class PointService extends BaseService {
  async getListOfPoints(cityId) {
    const data = await this.send({
      url: `/point?cityId=${cityId}`,
    });
    return data;
  }
}
