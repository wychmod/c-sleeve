import {Http} from "../utils/http";

export class Theme {
    static getHomeLocationA(callback){
        Http.request({
            url: `themes`,
            data: {
                name:'t-1'
            },
            callback: data=>{
                callback(data)
            }
        });
    }
}