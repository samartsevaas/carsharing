import { BaseService } from "../base";

export class RateService extends BaseService {
  async getRate() {
    const data = await this.send({
      url: "/rate",
    });
    return data;
  }
}
