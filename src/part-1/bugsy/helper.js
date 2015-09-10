"use strict";

var _itterator = 0;

exports.clear = function() {
    _itterator = 0;
};

exports.getNext = function() {
    var arr = [
        "Bugsy Malone",
        "Frank Nitti",
        "Stephanie St. Clare",
        "Al Capone",
        "Helen Gills",
        "Johnny Torrio",
        "Bonnie Parker"
    ];
    if (_itterator >= arr.length) {
        return "";
    }

    var name = arr[_itterator];
    _itterator++;
    return name;
};

exports.getInitials = function(name) {
    if (name === "") {
        throw new Error("getInitials got an empty string!");
    }

    var names = name.split(" ");
    var initials = names.reduce(function(prev, next) {
        return prev += next.charAt(0);
    }, "");

    return initials;
};
