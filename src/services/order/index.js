import { BaseService } from "../base";

export class orderService extends BaseService {
  async getOrderStatus() {
    const data = await this.send({
      url: "/orderStatus",
    });
    return data;
  }
  async sendOrderData(params) {
    const data = await this.send({
      url: "/order",
      method: "post",
      data: params,
    });
    return data;
  }
}
