import { BaseService } from "../base";

export class CityService extends BaseService {
    async getListOfCities() {
         const data = await this.send({ 
            url: '/city'    
         });
         return data;
    }
}