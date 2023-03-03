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
