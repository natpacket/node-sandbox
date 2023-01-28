// 内置了这些原型链对象,都在cyb对象下.
// [Document, EventTarget, Node, Element, HTMLElement, WebGLRenderingContext, CanvasRenderingContext2D, HTMLAnchorElement, HTMLImageElement, HTMLFontElement, HTMLOutputElement, HTMLAreaElement, HTMLInputElement, HTMLFormElement, HTMLParagraphElement, HTMLAudioElement, HTMLLabelElement, HTMLFrameElement, HTMLParamElement, HTMLBaseElement, HTMLLegendElement, HTMLFrameSetElement, HTMLPictureElement, HTMLBodyElement, HTMLLIElement, HTMLHeadingElement, HTMLPreElement, HTMLBRElement, HTMLLinkElement, HTMLHeadElement, HTMLProgressElement, HTMLButtonElement, HTMLMapElement, HTMLHRElement, HTMLQuoteElement, HTMLCanvasElement, HTMLMarqueeElement, HTMLHtmlElement, HTMLScriptElement, HTMLDataElement, HTMLMediaElement, HTMLIFrameElement, HTMLTimeElement, HTMLDataListElement, HTMLMenuElement, HTMLSelectElement, HTMLTitleElement, HTMLDetailsElement, HTMLMetaElement, HTMLSlotElement, HTMLTableRowElement, HTMLDialogElement, HTMLMeterElement, HTMLSourceElement, HTMLTableSectionElement, HTMLDirectoryElement, HTMLModElement, HTMLSpanElement, HTMLTemplateElement, HTMLDivElement, HTMLObjectElement, HTMLStyleElement, HTMLTextAreaElement, HTMLDListElement, HTMLOListElement, HTMLTableCaptionElement, HTMLTrackElement, HTMLEmbedElement, HTMLOptGroupElement, HTMLTableCellElement, HTMLUListElement, HTMLFieldSetElement, HTMLOptionElement, HTMLTableColElement, HTMLUnknownElement, HTMLTableElement, HTMLVideoElement, Event, BatteryManager, CharacterData, CSSStyleDeclaration, DocumentType, DOMParser, HTMLAllCollection, InputDeviceCapabilities, HTMLCollection, HTMLDocument, IDBFactory, IDBRequest, IDBOpenDBRequest, MediaEncryptedEvent, MimeType, MimeTypeArray, MouseEvent, Navigator, NetworkInformation, NodeList, Notification, OffscreenCanvasRenderingContext2D, Path2D, Performance, PerformanceEntry, PerformancePaintTiming, Plugin, PluginArray, PointerEvent, Request, Screen, ScreenOrientation, SpeechSynthesisUtterance, Storage, Text, UIEvent, WebGLBuffer, WebGLProgram, WebGLShader, WebGLShaderPrecisionFormat, WebGLUniformLocation, Location, WebSocket, Window, XMLHttpRequest, XMLHttpRequestEventTarget, Permissions,NavigatorUAData,EventCounts,PerformanceNavigation,PerformanceTiming]

cyb = require('cyb');
for (var i in cyb) { global[i] = cyb[i]; }
// 将这些构造函数移到global下,然后初始化一次就行了.
Utils.initEnv();
for (var i in cyb) {
    // 自定义的构造函数 比如Document. 这里只是随便生成了一个函数
    globalMy[i] = function () { };
    globalMy[i].prototype = cyb[i].prototype;
}
// 特殊对象存放在Utils对象下,window不做实现
document = Utils.document;
location = Utils.location;
// 初始化到此完全结束. 测试用例如下
globalMy.Document = function(){console.log("new Document")}
globalMy.Document.prototype = cyb.Document.prototype;
// debugger;

// 对象下的get set方法 这么定义
globalMy.document_get_location = function () { return location; }
globalMy.document_set_location = function () { console.log("document set location"); }
console.log(document.location);
document.location = 123;
// 对象下的方法 这么定义
globalMy.location_toString = function () { return 'http://www.xxx.com'; }
console.log(document.location.toString());

// 原型链get set方法 这么定义
globalMy.Document_get_cookie = function () { return globalMy.cookie; }
globalMy.Document_set_cookie = function (val) { globalMy.cookie = val; } // 友情提示: 这么补可不行啊,别直接拿来抄了
document.cookie = '天若有情天亦老';
console.log(document.cookie);
console.log(Object.getOwnPropertyDescriptors(document));
// 原型链方法调用 这么定义
globalMy.Document_createElement = function (span) {
    console.log("createElement 调用者 -> ", this, ", 标签名称 -> ", span);
}
document.createElement("a");

// 例子到此结束, 别告诉我你还是不会用 - ^ - 有啥bug联系我- v -
