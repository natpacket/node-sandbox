var a = +new Date;
const { VM, VMScript } = require('cyvm2');
const fs = require("fs");
// const {VM, VMScript} = require('vm2');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
// var ws = require("nodejs-websocket");
console.log("导包耗时:", +new Date - a, "毫秒");
a = +new Date;
// const dom = new JSDOM(`<!DOCTYPE html><p>hello world</p>`);

var html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta content="J5.C6RUO6R6.JpOp3sX4viKQWl3FgRex" r="m"><script type="text/javascript" r='m'>$_ts=window['$_ts'];if(!$_ts)$_ts={};$_ts.nsd=23850;$_ts.cd="qEAZrrAlDaaqtcgEkqqUrfQoirgWqrQmmaEOofQqmal6xAGlopQciq0kmaqUqrQrirgUrkGJrAaqmS9UquG8maq2cAAImaV5cqaMmaWUqkG8kqqUrfQoirgUDsGJqSQqmal6xALloaaqmSgUqOG8kqqUqrQrirgUrug8maEgkAWUqrQrJnVPbGlTWqEmWsKFE5XzZ288j8hxchPyLwisvMsg059ivwHkfO2sDA52LrdMqaVuraQrbnak_Y2ZxsHzQCNDVsm2KtfoFsV4skJoZYlCRVV2HY.0wbeLhb2nMI3BMUmXFnzB4CeBtDSnFCCCMURLM2L.E_ehM99SU0xc.YrCVlpAsmMIFuVaib32iZmzwbfXtC20ebZBFvw.Fn60wbeLhb2nMI3BMUmXFTLzXlxpAbT0YToN8vzxwoybJwrWWoySWo3OLmfzQKy.tCdBMCZLMox.MMRzwbfXtC20ebZBFvw.FTnCEU2nJ0YzRHS4KKTaI0eCnVryVYYcJCcgiYfjwCz.hIpCMCGXFUxzePezQKy.tCdBMCZLMox.MQw5hCN6FCzQ9qiN3u7dQlsjAY7dw2JXKQfvV9VywOmRdoxqW9WZ1YI11UxORslZJITYYYyf3VW_4VNBQTJYJsv4YKpbiVJtFzmSVUVaQKSR6OGaIOY11lvnsCxmpsqZWBR_YVeYQVTR_UzAtbmPJk1.WK3jFoAZJ7Scw0zUF2JlZkwLtbmPJk1.WK3jFoAZABylQbJLJ9N2_oxNH0zlYms53Ux.WYyd8Fl4FoqaU9fKuYz1p93oraDMWaWmWaQKF8y6QugSWOVn.kqaWOqeHuDFrKrfWsECWyLqJsWCra0ajO7aJsV5JuKjqaQaWOgSq3jC1FUMaCvfxkWqTVpwClCAqSHZQPL_EvOSfGK3rqAmbqAlrchJxTrdw7NL394tn47ahOW2GxzNnmJ5fV807.sgNIcqiqQJWtZaWOQuJkl6.GWcJAEJJO8zJs7ZiuZuJyLLVCTVQCRRdCRi30a5Q9UW1DwThD003Bx7JvRSVkJOT0VzYVN5IvMws0rPpaQoqR76qaVnra3CbdA0IPybRbtC3byChbR0MhRPwK0XRKRjzbmPQcy2FvDC3KNjhbA.3BzfhCwSwczP_UVBRCTjtChjQneG36W.RIRBhCrzRcz2eUQB3DT9In6d8C3LRCfuhISB3Pf9FCAzdDSztDpLQn6ZMDTahbrO34R9FbEX3o0zdKz7tDN.wn6nQ6WLFvJ9hIJGMcf.FKgzZCT2tDzNwc6uQDaLFoA.FdzShCyn3cz._bR9tDf0FD5CFKxn3nz.FHGBMCz2tCNLdPeXwk3.Fvo4hCga3nzjQF9BMvp2tCNj4ceXFC3.Fb47hCyzMnzjQ8LBMvw.tCNSdCABFCrztC4y8ne.RKq.MBRfhCzX3PzX4bVBwo7.w6Oyh6J2Q1z6RBQBQ6pBt6wS_1euwo3.wCUZh6J0wvZ.QIp9h6p.RczSebLBwomOt6kuR1eTwvZ.Qd7BQK9XwKR7zvmXQbq.wKseh6mfQ1zTwIaBQKYat6pXzvrfFcy03UbCQop2hvpaR4RawKWXwoynzvwPwPyuRvXCwCNPhvJXRdaBwCzawKxB4Pe6Io3.Q6UZh6Y6RPzSQX9BwUwTt6mydPe0FCpft6MTRKVChvrjw4R0MbVXQDR6zvpuwnydRKnC86JNhve.Q.R4M6w_t6enePe4FKg.I16GFvWL36w7h8NBFvwCtCyS5aWkrqR3ECUaqawMxbS5qRyQxTzuraJ8Bbe.rqquWaD3WO3";if($_ts.lcd)$_ts.lcd();</script><script type="text/javascript" charset="utf-8" src="/DMkKrRq2vkXD/3lyVKWvJXsxS.ce3512e.js" r='m'></script></head>
<body>
</body>
</html>`
// html = ``;
let configure = {
    // url:"https://pastebin.com/login",
    url: "http://epub.cnipa.gov.cn/SW/",
}
const dom = new JSDOM(html, configure);

let filePath = fs.readdirSync('./env');
let envCode = '';
filePath.map((item)=>{
    envCode += fs.readFileSync(`./env/${item}`) + '\n';
});

// let envCode = fs.readFileSync("./work/jsdom_test.js");

let init_env = fs.readFileSync("./util/init_env.js");
let cover_function = fs.readFileSync("./util/cover_function.js");
let pass_check = fs.readFileSync("./util/pass_check.js");

envCode +=  cover_function + pass_check;

// workCode
// let workCode = '';
// let workCode = fs.readFileSync("./work/tdc.js");
// let workCode = fs.readFileSync("./work/dy.js");
let workCode = fs.readFileSync("./work/rsvmp.js");
// let workCode = fs.readFileSync("./work/5s.js");
let endCode = fs.readFileSync("./work/end.js");
wanfeng = require("wanfeng");

globalMy = {
    jsdom: dom,
    // script_text: `<script type="text/javascript" r='m'>_$a0();</script>`,
};
const sandbox = {
    wanfeng: wanfeng,
    globalMy: globalMy,
    console: console,
}
var vm = new VM({ sandbox: sandbox });

var script = new VMScript("debugger;\r\n" + init_env + envCode + "\r\n" + workCode + "\r\n" + endCode, './zcj.js');
console.log("jsdom初始化 + new VMScript 耗时:", +new Date - a, "毫秒");

a = +new Date;
vm.run(script);
console.log("运行环境Js + 工作Js 耗时:", +new Date - a, "毫秒");



// test

// a = +new Date;
// const dom = new JSDOM(`<!DOCTYPE html><html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="report" content='{"spm" :"1011.2124", "disabled": "true" }'><script src="https://g.csdnimg.cn/lib/jquery/1.12.4/jquery.min.js"></script><script src="https://g.csdnimg.cn/user-login/3.0.0/user-login.js"></script><script src="https://g.csdnimg.cn/common/csdn-login-box/csdn-login-box.js"></script><script src="https://g.csdnimg.cn/common/csdn-report/report.js"></script><script src="https://g.csdnimg.cn/lib/qrcode/1.0.0/qrcode.min.js"></script><link rel="stylesheet" href="https://g.csdnimg.cn/lib/social-share/1.0.1/css/share.min.css"><link href="https://g.csdnimg.cn/static/logo/favicon32.ico" rel="SHORTCUT
// ICON"><title>CSDN</title><link href="https://csdnimg.cn/release/mp_new/css/app.df82a859.css" rel="preload" as="style"><link href="https://csdnimg.cn/release/mp_new/css/chunk-vendors.cf27d676.css" rel="preload" as="style"><link href="https://csdnimg.cn/release/mp_new/js/app.debeab61.js" rel="preload" as="script"><link href="https://csdnimg.cn/release/mp_new/js/chunk-vendors.35ec7ab4.js" rel="preload" as="script"><link href="https://csdnimg.cn/release/mp_new/css/chunk-vendors.cf27d676.css" rel="stylesheet"><link href="https://csdnimg.cn/release/mp_new/css/app.df82a859.css" rel="stylesheet"></head><body><script>!(function(c,b,d,a){c[a]||(c[a]={});c[a].config={pid:"dyiaei5ihw@b0a6434a57fc89a",appType:"web",imgUrl:"https://arms-retcode.aliyuncs.com/r.png?",sendResource:true,enableLinkTrace:true,behavior:true,enableSPA:true};
// with(b)with(body)with(insertBefore(createElement("script"),firstChild))setAttribute("crossorigin","",src=d)
// })(window,document,"https://retcode.alicdn.com/retcode/bl.js","__bl");</script><noscript><strong>We're sorry but main doesn't work properly without JavaScript enabled. Please enable it to continue.</strong></noscript><div id="app"></div><script src="https://csdnimg.cn/release/mp_new/js/chunk-vendors.35ec7ab4.js"></script><script src="https://csdnimg.cn/release/mp_new/js/app.debeab61.js"></script></body></html>`)
// console.log("new jsdom耗时:", +new Date - a);
// var document = dom.window.document;
// a = +new Date;
// for(var i = 0 ;i < 100; i++){
//     var node = document.createElement("a");
//     document.body.appendChild(node);
//     document.body.removeChild(node);
// }
// console.log("耗时:", +new Date - a);


// function looseJsonParse(){
//     return Function("debugger;\r\n")();
// }
// console.log(looseJsonParse())


// ws = require("nodejs-websocket");
// var _server = ws.createServer(conn => {
//     // 接收客户端返回的数据
//     conn.on("text", function (str) {
//         console.log(str, "接收客户端传过来的值");
//         //         conn.send("hello ");
//         if (str + '' === "close") {
//             throw "close"
//         }
//
//     });
//
//     //客户端关闭连接
//     conn.on("close", function () {
//
//     });
//
//     conn.on("error", function (err) {
//         //error
//         console.log(err, "连接报错");
//     });
// });
// // 定义端口为2002【端口自己随意定义】
// const port = 8889;
// _server.listen(port, function () {
//     console.log("连接成功")
//     console.log('listening on websocketServer');
// });
