"use strict";

// private
var treeString;

/**
 *
 * @constructor
 */
function Ancestors(ancestorObject) {
    treeString = "";
    // call the private method createAncestorTree, starting at level 0
    createAncestorTree(ancestorObject, 0);
}

/**
 * This function is a recursive function that updates the property treeString
 * to represent a treeview.
 * @param {Object} current - The current object to examin
 * @param {Number} level - The current object level
 * @private
 */
var createAncestorTree = function(current, level) {

    var i;
    var childrenLength;

    if (!current || !current.children) {
        return;
    }

    // Get the length so we now if this object have any children
    childrenLength = current.children.length;

    // tab in as many levels
    for (i = 0; i < level; i += 1) {
        treeString += "\t";
    }

    treeString += current.name;

    // go through the child
    for (i = 0; i < childrenLength; i += 1) {
        // add a line break for each child
        treeString += "\n";
        // the reuse the funtion for each child, and add +1 to the level
        createAncestorTree(current.children[i], level + 1);
    }


};

/**
 *
 * @returns {string}
 */
Ancestors.prototype.toString = function() {
    return treeString;
};

module.exports = Ancestors;
