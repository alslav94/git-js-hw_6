"use strict";

var arr = [1, 2, 3];

function arrayToList(arr) {
    var list = null;
    if(arr.length) {
        list =  {
            value: arr.shift(),
            rest: arrayToList(arr)
        }
    }
    return list;
}


function listToArray(list){
    var arr = [];
    while (list !== null){
        arr.push(list.value);
        list = list.rest;

    }
    return arr;
}

function prepend(list) {
    var list = {value: "first", rest: list};
    return list;
}

function nth(list, position) {
    var i = 1;
    while (list.rest != null && i <= (position - 1)) {
        var list = list.rest;
        i++;
    }
    if (position > i) {
        return undefined;
    }
    return list;
}