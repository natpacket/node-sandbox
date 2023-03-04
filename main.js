// var a = +new Date;
// const { VM, VMScript } = require('cyvm2');
// const fs = require("fs");
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// // var ws = require("nodejs-websocket");
// console.log("导包耗时:", +new Date - a, "毫秒");
// a = +new Date;
// // const dom = new JSDOM(`<!DOCTYPE html><p>hello world</p>`);

// var html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
// <html>
// <head>
// <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
// <meta content="J5.C6RUO6R6.JpOp3sX4viKQWl3FgRex" r="m"><script type="text/javascript" r='m'>$_ts=window['$_ts'];if(!$_ts)$_ts={};$_ts.nsd=23850;$_ts.cd="qEAZrrAlDaaqtcgEkqqUrfQoirgWqrQmmaEOofQqmal6xAGlopQciq0kmaqUqrQrirgUrkGJrAaqmS9UquG8maq2cAAImaV5cqaMmaWUqkG8kqqUrfQoirgUDsGJqSQqmal6xALloaaqmSgUqOG8kqqUqrQrirgUrug8maEgkAWUqrQrJnVPbGlTWqEmWsKFE5XzZ288j8hxchPyLwisvMsg059ivwHkfO2sDA52LrdMqaVuraQrbnak_Y2ZxsHzQCNDVsm2KtfoFsV4skJoZYlCRVV2HY.0wbeLhb2nMI3BMUmXFnzB4CeBtDSnFCCCMURLM2L.E_ehM99SU0xc.YrCVlpAsmMIFuVaib32iZmzwbfXtC20ebZBFvw.Fn60wbeLhb2nMI3BMUmXFTLzXlxpAbT0YToN8vzxwoybJwrWWoySWo3OLmfzQKy.tCdBMCZLMox.MMRzwbfXtC20ebZBFvw.FTnCEU2nJ0YzRHS4KKTaI0eCnVryVYYcJCcgiYfjwCz.hIpCMCGXFUxzePezQKy.tCdBMCZLMox.MQw5hCN6FCzQ9qiN3u7dQlsjAY7dw2JXKQfvV9VywOmRdoxqW9WZ1YI11UxORslZJITYYYyf3VW_4VNBQTJYJsv4YKpbiVJtFzmSVUVaQKSR6OGaIOY11lvnsCxmpsqZWBR_YVeYQVTR_UzAtbmPJk1.WK3jFoAZJ7Scw0zUF2JlZkwLtbmPJk1.WK3jFoAZABylQbJLJ9N2_oxNH0zlYms53Ux.WYyd8Fl4FoqaU9fKuYz1p93oraDMWaWmWaQKF8y6QugSWOVn.kqaWOqeHuDFrKrfWsECWyLqJsWCra0ajO7aJsV5JuKjqaQaWOgSq3jC1FUMaCvfxkWqTVpwClCAqSHZQPL_EvOSfGK3rqAmbqAlrchJxTrdw7NL394tn47ahOW2GxzNnmJ5fV807.sgNIcqiqQJWtZaWOQuJkl6.GWcJAEJJO8zJs7ZiuZuJyLLVCTVQCRRdCRi30a5Q9UW1DwThD003Bx7JvRSVkJOT0VzYVN5IvMws0rPpaQoqR76qaVnra3CbdA0IPybRbtC3byChbR0MhRPwK0XRKRjzbmPQcy2FvDC3KNjhbA.3BzfhCwSwczP_UVBRCTjtChjQneG36W.RIRBhCrzRcz2eUQB3DT9In6d8C3LRCfuhISB3Pf9FCAzdDSztDpLQn6ZMDTahbrO34R9FbEX3o0zdKz7tDN.wn6nQ6WLFvJ9hIJGMcf.FKgzZCT2tDzNwc6uQDaLFoA.FdzShCyn3cz._bR9tDf0FD5CFKxn3nz.FHGBMCz2tCNLdPeXwk3.Fvo4hCga3nzjQF9BMvp2tCNj4ceXFC3.Fb47hCyzMnzjQ8LBMvw.tCNSdCABFCrztC4y8ne.RKq.MBRfhCzX3PzX4bVBwo7.w6Oyh6J2Q1z6RBQBQ6pBt6wS_1euwo3.wCUZh6J0wvZ.QIp9h6p.RczSebLBwomOt6kuR1eTwvZ.Qd7BQK9XwKR7zvmXQbq.wKseh6mfQ1zTwIaBQKYat6pXzvrfFcy03UbCQop2hvpaR4RawKWXwoynzvwPwPyuRvXCwCNPhvJXRdaBwCzawKxB4Pe6Io3.Q6UZh6Y6RPzSQX9BwUwTt6mydPe0FCpft6MTRKVChvrjw4R0MbVXQDR6zvpuwnydRKnC86JNhve.Q.R4M6w_t6enePe4FKg.I16GFvWL36w7h8NBFvwCtCyS5aWkrqR3ECUaqawMxbS5qRyQxTzuraJ8Bbe.rqquWaD3WO3";if($_ts.lcd)$_ts.lcd();</script><script type="text/javascript" charset="utf-8" src="/DMkKrRq2vkXD/3lyVKWvJXsxS.ce3512e.js" r='m'></script></head>
// <body>
// </body>
// </html>`
// html = `<html><head></head><body></body></html>`;
// let configure = {
//     // url:"https://pastebin.com/login",
//     // url: "http://epub.cnipa.gov.cn/SW/",
//     // url: 'https://www.zhihu.com/search?type=content&q=%E8%82%A1%E7%A5%A8%E7%9F%A5%E8%AF%86',
//     // url: 'https://www.zhipin.com/web/geek/job?query=%E7%88%AC%E8%99%AB&city=101190100&page=3',
//     url: "https://www.zhipin.com/wapi/zpgeek/search/joblist.json?scene=1&query=%E7%88%AC%E8%99%AB&city=101190100&experience=&degree=&industry=&scale=&stage=&position=&jobType=&salary=&multiBusinessDistrict=&multiSubway=&page=2&pageSize=30",
// }
// const dom = new JSDOM(html, configure);

// let filePath = fs.readdirSync('./env');
// let envCode = '';
// filePath.map((item) => {
//     envCode += fs.readFileSync(`./env/${item}`) + '\n';
// });

// // let envCode = fs.readFileSync("./work/jsdom_test.js");

// let init_env = fs.readFileSync("./util/init_env.js");
// let cover_function = fs.readFileSync("./util/cover_function.js");
// let pass_check = fs.readFileSync("./util/pass_check.js");

// envCode += cover_function + "\r\n" + pass_check + "\r\n";
// envCode = init_env + "\r\n" + envCode;
// // workCode
// // let workCode = '';
// // let workCode = fs.readFileSync("./work/tdc.js");
// // let workCode = fs.readFileSync("./work/dy.js");
// // let workCode = fs.readFileSync("./work/rsvmp.js");
// // let workCode = fs.readFileSync("./work/5s.js");
// // let workCode = fs.readFileSync("./work/zhihu.js");
// let workCode = fs.readFileSync("./work/boss.js");

// let endCode = fs.readFileSync("./work/end.js");
// wanfeng = require("wanfeng");

// var globalMy = {
//     jsdom: dom,
// };
// var sandbox = {
//     wanfeng: wanfeng,
//     globalMy: globalMy,
//     console: console,
// }
// console.log("jsdom初始化 耗时:", +new Date - a, "毫秒");
// var vm = new VM({ sandbox: sandbox });
// var script = new VMScript("debugger;\r\n" + envCode + "\r\n" + workCode + "\r\n" + endCode, './zcj.js');

// // var vm = require("vm");

// // globalMy.vm = vm;
// // globalMy.envCode = envCode;
// // globalMy.workCode = workCode;
// // globalMy.endCode = endCode;

// a = +new Date;
// vm.run(script);

// // vm.runInNewContext("debugger;\r\n" + envCode + "\r\n" + workCode + "\r\n" + endCode, sandbox);
// // vm.runInNewContext(envCode + "\r\nwin=this;", sandbox);

// // debugger;
// // var ifr = dom.window.document.createElement("iframe");
// // dom.window.document.body.appendChild(ifr);
// // var sandbox_ = { wanfeng: wanfeng, globalMy: { dom_window: ifr.contentWindow, parent_window: sandbox.win }, console: console }
// // vm.runInNewContext(envCode + "\r\nwindow.parent = window.top = globalMy.parent_window;\r\ndebugger;\r\n" + workCode + "\r\n" + endCode + "\r\n", sandbox_);

// console.log("运行环境Js + 工作Js 耗时:", +new Date - a, "毫秒");




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


let init_env = fs.readFileSync("./util/init_env.js");
let cover_function = fs.readFileSync("./util/cover_function.js");
let pass_check = fs.readFileSync("./util/pass_check.js");

envCode +=  cover_function + pass_check;

// workCode
// let workCode = '';
// let workCode = fs.readFileSync("./work/tdc.js");
// let workCode = fs.readFileSync("./work/dy.js");
// let workCode = fs.readFileSync("./work/rsvmp.js");
// let workCode = fs.readFileSync("./work/5s.js");
// let workCode = fs.readFileSync("./work/zhihu.js");
let workCode = fs.readFileSync("./work/boss.js");
let endCode = fs.readFileSync("./work/end.js");
wanfeng = require("wanfeng");

globalMy = {
    // jsdom: dom,
    dom_window: dom.window
    // script_text: `<script type="text/javascript" r='m'>_$a0();</script>`,
};
const sandbox = {
    wanfeng: wanfeng,
    globalMy: globalMy,
    console: console,
}
// var vm = new VM({ sandbox: sandbox });
// var script = new VMScript("debugger;\r\n" + init_env + envCode + "\r\n" + workCode + "\r\n" + endCode, './zcj.js');
// console.log("jsdom初始化 + new VMScript 耗时:", +new Date - a, "毫秒");

// a = +new Date;
// vm.run(script);
// console.log("运行环境Js + 工作Js 耗时:", +new Date - a, "毫秒");

var vm = require("vm");
a = +new Date;
vm.runInNewContext("debugger;\r\n" + init_env + envCode + "\r\nWin=this;\r\n", sandbox);

var ifr = dom.window.document.createElement("iframe");
dom.window.document.body.appendChild(ifr);

const sandbox_ = {
    wanfeng: wanfeng,
    globalMy: {
        dom_window: ifr.contentWindow,
        parent_window: sandbox.Win
    },
    console: console,
}
vm.runInNewContext("debugger;\r\n" + init_env + envCode + "\r\nwindow.parent = window.top = globalMy.parent_window;\r\n" + workCode + "\r\n" + endCode, sandbox_);
console.log("运行环境Js + 工作Js 耗时:", +new Date - a, "毫秒");