/**
 * Created by heben.hb on 2017/7/12.
 */

export const Util = {};
//const Util = {};

Util.parseUrl = (url) => {
    let index = url.indexOf("?");
    let paramObj = new Map();
    if(url.slice(index+1).length < 3) return paramObj;
    let paramArray = url.slice(index+1).split("&");
    let reg = /^([\S]+)=([\S]+)/;
    paramArray.map(param => {
        let match = param.match(reg);
        paramObj.set(match[1],match[2]);
    });
    console.log("parseUrl paramObj:",paramObj);
    return paramObj;
};

//Util.parseUrl("/ssl/sk?$%ass=1&bbb22=2");
Util.parseUrl("");

