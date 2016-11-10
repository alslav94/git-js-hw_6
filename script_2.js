"use strict";

var arr = [1, 2, 3];

function reverseArray(array) {
    var i = (array.length - 1);
    var newArr = [];
    while (i >= 0) {
        newArr.push(array[i]);
        i--;
    }
    return newArr;
}

function reverseArrayInPlace() { //не рабочая. долго колупался по всякому, но решил чуть позже доделать.
    var i = (this.length - 1);
    var newArr = [];
    while (i >= 0) {
        newArr.push(this[i]);
        i--;
    }
    this.concat(newArr);
    i = newArr.length * 2;
    while (i > newArr.length) {
        this.pop();
        i--;
    }
    return this;
}