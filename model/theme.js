import {Http} from "../utils/http";

export class Theme {
    static async getHomeLocationA() {
        return await Http.request({
            url: `themes`,
            data: {
                name: 't-1'
            }
        });
    }
}