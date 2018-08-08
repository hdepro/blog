/**
 * Created by heben on 2018/6/27.
 */

const {request} = require('https');
const querystring = require('querystring');

function requestJsonPost(url,data,successFunc){
    console.log("requestJsonPost = "+JSON.stringify(data),{"fontSize":'20px',color:'red'});
    const req = request({

        hostname: '114.255.40.86',
        port: 443,
        path: '/article/ParttimeJob/ajax_post.json',
        headers:{
            'Host': 'bbs.byr.cn',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Length': 262,
            'Referer': 'https://bbs.byr.cn',
            'User-Agent': '"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.0) Gecko/20100101 Firefox/60.0"',
            'Accept': 'application/json',
            'Cookie': "Hm_lvt_38b0e830a659ea9a05888b924f641842=1529731761,1529882618,1530019035,1530102376; _ga=GA1.2.1984525132.1492750437; nforum[UTMPUSERID]=wodebupt; login-user=wodebupt; nforum[PASSWORD]=PWGKlbygJjHDPHMjPIycWQ%3D%3D; nforum[UTMPKEY]=67888171; nforum[UTMPNUM]=5249; Hm_lpvt_38b0e830a659ea9a05888b924f641842=1530106242; nforum[XWJOKE]=hoho; nforum[BMODE]=2"
        },
        method:'POST'
    }, function (res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
        });
        res.on('end', () => {
            console.log('No more data in response.');
        });
    });
    req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });
    req.write(querystring.stringify(data));
    req.end();
}

requestJsonPost(
    '',
    {
        id: 650358, //618956,
        subject: encodeURIComponent('Re: 【内推】【头条】今日头条2018招聘'),
        content: '顶'
    },
    (json) => {console.log('json', json)}
);