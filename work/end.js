
new Promise((resolve, reject) => {
    var event = globalMy.createEvent("load")
    resolve(event);
}).then((event) => {
    window.dispatchEvent(event);
});



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

// console.log((new window.ABC).z("et6DuZOBezkCoI40DI0QqWWQk+9jlQtTwG6CHaF9IGo=", parseInt("1677842735659") + 60 * (480 + (new Date).getTimezoneOffset()) * 1e3));
// console.log((new window.ABC).z(et6DuZOBezkCoI40DI0QqWWQk+9jlQtTwG6CHaF9IGo=", parseInt("1677842735659") + 60 * (480 + (new Date).getTimezoneOffset()) * 1e3));
// console.log((new window.ABC).z(et6DuZOBezkCoI40DI0QqWWQk+9jlQtTwG6CHaF9IGo=", parseInt("1677842735659") + 60 * (480 + (new Date).getTimezoneOffset()) * 1e3));
// console.log((new window.ABC).z(et6DuZOBezkCoI40DI0QqWWQk+9jlQtTwG6CHaF9IGo=", parseInt("1677842735659") + 60 * (480 + (new Date).getTimezoneOffset()) * 1e3));


debugger;
globalMy.console.log("运行瑞数vmp耗时:", +new Date - globalMy.memory.begin_time, "毫秒");
globalMy.console.log(document.cookie);
globalMy.console.log(localStorage._$rc);

// 基础对象
globalMy.basic_obj = ["console", "Object", "Function", "Array", "Number", "parseFloat", "parseInt", "Infinity", "NaN", "undefined", "Boolean", "String", "Symbol", "Date", "Promise", "RegExp", "Error", "AggregateError", "EvalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError", "globalThis", "JSON", "Math", "Intl", "ArrayBuffer", "Uint8Array", "Int8Array", "Uint16Array", "Int16Array", "Uint32Array", "Int32Array", "Float32Array", "Float64Array", "Uint8ClampedArray", "BigUint64Array", "BigInt64Array", "DataView", "Map", "BigInt", "Set", "WeakMap", "WeakSet", "Proxy", "Reflect", "FinalizationRegistry", "WeakRef", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape", "eval", "isFinite", "isNaN", "Atomics", "WebAssembly", "atob", "btoa"];

