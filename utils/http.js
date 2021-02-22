import {config} from "../config/config";
import {promisic} from "./util";

class Http {
    static async request({url, data, method='GET'}) {
        const res = await promisic(wx.request)({
            url: `${config.apiBaseUrl}${url}`,
            data,
            method,
            header: {
                appkey: config.appkey
            }
        });
        return res.data
    }
}

// promisic(wx.request)({
//     url: ``,
//     data: data,
// })

//动态类型非常常见，python
// java c# 委托

export {
    Http
}