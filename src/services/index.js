import { CityService } from './city';
import { PointService } from './point';

export default {
    city: new CityService(),
    point: new PointService()
}