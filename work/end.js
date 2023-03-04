
// new Promise((resolve, reject) => {
//     var event = globalMy.createEvent("load")
//     resolve(event);
// }).then((event) => {
//     window.dispatchEvent(event);
// });



globalMy.asyncFunc = function () {
    while (1) {
        // debugger
        var func_promise = globalMy.func_promise.shift();
        if (!func_promise) {
            while (1) {
                var func = globalMy.func.shift();
                if (!func) {
                    return;
                }
                try {
                    func[0].apply(window, func[1]);
                } catch (e) {
                    globalMy.console.log("执行setTimeout方法报错, 报错信息如下: ", e);
                    // break
                }
            }
        }
        try {
            func_promise[0].apply(window, func_promise[1]);
        } catch (e) {
            globalMy.console.log("执行Promise方法报错, 报错信息如下: ", e);
        }
    }
}
globalMy.asyncFunc();


function getCK() {
    // mouseEvent()
    globalMy.callInterval();
    return document.cookie;
}

function getData(url) {
    // mouseEvent()
    !globalMy.xhr ? globalMy.xhr = new XMLHttpRequest : 1;
    globalMy.callInterval();
    globalMy.xhr.open("POST", url, true);
    return document.cookie.split("GW1gelwM5YZuT=")[1].split(";")[0] + "******" + window.url;
}

console.log((new window.ABC).z("et6DuZOBezkCoI40DI0QqdRieXNtVrwrpcAjtzr9/fk=", parseInt("1677821727513") + 60 * (480 + (new Date).getTimezoneOffset()) * 1e3));
// console.log((new window.ABC).z("et6DuZOBezkCoI40DI0QqdRieXNtVrwrpcAjtzr9/fk=", parseInt("1677821727513") + 60 * (480 + (new Date).getTimezoneOffset()) * 1e3));
// console.log((new window.ABC).z("et6DuZOBezkCoI40DI0QqdRieXNtVrwrpcAjtzr9/fk=", parseInt("1677821727513") + 60 * (480 + (new Date).getTimezoneOffset()) * 1e3));
// console.log((new window.ABC).z("et6DuZOBezkCoI40DI0QqdRieXNtVrwrpcAjtzr9/fk=", parseInt("1677821727513") + 60 * (480 + (new Date).getTimezoneOffset()) * 1e3));


debugger;
// globalMy.console.log("运行瑞数vmp耗时:", +new Date - globalMy.memory.begin_time, "毫秒");
// globalMy.console.log(document.cookie);
// globalMy.console.log(localStorage._$rc);


// globalMy.cookies = "__g=-; wd_guid=4b0af4e0-f861-438f-97b2-aac8c458bafa; historyState=state; _bl_uid=jjlsbeI9syF1zzgjyv5va0dcRysI; Hm_lvt_194df3105ad7148dcf2b98a91b5e727a=1677817919; Hm_lpvt_194df3105ad7148dcf2b98a91b5e727a=1677818563; __zp_stoken__=d84deEDF3EBx6fgA0f25LVToiURoXewkoNnMYSGZDFCZLVSYQPFUOBVp4UTdKHWxFGm41FmcXV0c6VhcYLTFfZR1jNRQ3UXJKASl1VxQcFWw6CVFCHBVqIgovKFkNKjAuWFcHd31sfD9yZUU%3D; __zp_sseed__=et6DuZOBezkCoI40DI0QqRe+cUEpgPIeSPrKnU6P45Q=; __zp_sname__=85a97204; __zp_sts__=1677818564123; __c=1677817918; __l=l=%2Fwww.zhipin.com%2Fweb%2Fgeek%2Fjob%3Fquery%3D%25E7%2588%25AC%25E8%2599%25AB%26city%3D101190100%26page%3D3&r=&g=&s=3&friend_source=0&s=3&friend_source=0; __a=87646262.1677817918..1677817918.6.1.6.6"
//     .split("; ");
//
// globalMy.cookies.map((item) => {
//     globalMy.dom_window.document.cookie = item + "; "
// });

// 基础对象
globalMy.basic_obj = ["console", "Object", "Function", "Array", "Number", "parseFloat", "parseInt", "Infinity", "NaN", "undefined", "Boolean", "String", "Symbol", "Date", "Promise", "RegExp", "Error", "AggregateError", "EvalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError", "globalThis", "JSON", "Math", "Intl", "ArrayBuffer", "Uint8Array", "Int8Array", "Uint16Array", "Int16Array", "Uint32Array", "Int32Array", "Float32Array", "Float64Array", "Uint8ClampedArray", "BigUint64Array", "BigInt64Array", "DataView", "Map", "BigInt", "Set", "WeakMap", "WeakSet", "Proxy", "Reflect", "FinalizationRegistry", "WeakRef", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape", "eval", "isFinite", "isNaN", "Atomics", "WebAssembly", "atob", "btoa"];

