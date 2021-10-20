import axios from 'axios';

const BaseUrl = 'https://api-factory.simbirsoft1.com/api/db';
const AuthToken = process.env.VUE_APP_API_KEY


export class BaseService {
    constructor() {
        this.api = null;
        this.init();
    }

    init() {
        this.api = axios.create({
            baseURL: BaseUrl,
            headers: {
                "X-Api-Factory-Application-Id": AuthToken,
            },
          });
    }

    /**
     * 
     * @param {*} <Object>
     * @description - принимает два поля; method && params (параметры запросы)
     */
    async send({ method = 'get', params = {}, url = '', }) {
        const {
            data: {
                data,
            }
        } = await this.api[method](url, { params });
        return data;
    }
}