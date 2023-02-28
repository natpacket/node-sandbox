new Promise((resolve, reject) => {
    var event = globalMy.createEvent("load")
    resolve(event);
}).then((event) => {
    window.dispatchEvent(event);
});

// window.dispatchEvent(globalMy.createEvent("load"))


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

function getEnv() {
    var env = "globalMy.mydefineProperty(sessionStorage, '$_YVTX', '" + localStorage.$_YVTX + "', true, undefined, true, undefined, undefined);\n" +
        "globalMy.mydefineProperty(sessionStorage, '$_YWTU', '" + localStorage.$_YWTU + "', true, undefined, true, undefined, undefined);\n" +
        "globalMy.mydefineProperty(localStorage, '__#classType', 'localStorage', true, undefined, true, undefined, undefined);\n" +
        "globalMy.mydefineProperty(localStorage, '_$rc', '" + localStorage._$rc + "', true, undefined, true, undefined, undefined);\n" +
        "globalMy.mydefineProperty(localStorage, '$_YVTX', '" + localStorage.$_YVTX + "', true, undefined, true, undefined, undefined);\n" +
        "globalMy.mydefineProperty(localStorage, '$_YWTU', '" + localStorage.$_YWTU + "', true, undefined, true, undefined, undefined);\n";
    return env;
}

function getData(url) {
    // mouseEvent()
    !globalMy.xhr ? globalMy.xhr = new XMLHttpRequest : 1;
    globalMy.callInterval();
    globalMy.xhr.open("POST", url, true);
    return document.cookie.split("GW1gelwM5YZuT=")[1].split(";")[0] + "******" + window.url;
}

globalMy.console.log("运行瑞数vmp耗时:", +new Date - globalMy.memory.begin_time, "毫秒");

globalMy.console.log(document.cookie);
globalMy.console.log(localStorage._$rc);