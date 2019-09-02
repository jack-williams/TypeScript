//// [voidIsInitialized.ts]
const x: void = undefined;

if(typeof x === "undefined") {
    x // no error
}


//// [voidIsInitialized.js]
"use strict";
var x = undefined;
if (typeof x === "undefined") {
    x; // no error
}
