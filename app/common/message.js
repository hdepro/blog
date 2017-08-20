/**
 * Created by heben on 2017/4/27.
 */

exports.success = {errCode:0,msg:"ok"};
exports.error = (msg)=>{
    return {
        errCode:500,
        msg
    }
};