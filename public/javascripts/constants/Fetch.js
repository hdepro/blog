/**
 * Created by heben on 2017/4/26.
 */

import fetch from 'isomorphic-fetch'
// import 'fetch-polyfill'
// import 'es6-promise'

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        Debugger.log("checkStatus success");
        return response;
    }else{
        Debugger.log("response.statusText = "+JSON.stringify(response.statusText));
        var error = new Error(response.statusText);
        error.response = response;
        throw error
    }
}

function checkLogin(json) {
    //Debugger.log("checkLogin = "+JSON.stringify(json));
    if(json.redirectUrl){
        Debugger.log("json.redirectUrl = "+json.redirectUrl);
        location.href = json.redirectUrl;
    }else{
        return json;
    }
}

function showMsg(msg){
    Debugger.log("msg = "+msg);
}

export function fetchGet(url,successFunc){
    fetch(url, {credentials:'include'})
        .then(response => {
            console.log("response");
            return response.json();
        })
        .then(checkLogin)
        .then(json => {
            if(json.errCode == 0) {
                successFunc(json);
            }else{
                showMsg(json.msg);
            }
        }).catch(e => console.log('error fetchGet = '+e))
}


export function fetchJsonPost(url,data,successFunc){
    Debugger.log("fetchJsonPost = "+JSON.stringify(data),{"fontSize":'20px',color:'red'});
    fetch(url,
        {
            credentials:'include',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method:'POST',
            body:JSON.stringify(data)
        })
        .then(response =>response.json())
        .then(function(json){
            if(json.errCode == 0){
                successFunc &&　successFunc(json);
            }else{
                showMsg(json.msg);
            }
        })
        .catch(e => console.log('error = ' + e))
}