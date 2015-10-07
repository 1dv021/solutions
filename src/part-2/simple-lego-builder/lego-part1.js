"use strict";

/**
 * Lego builder part1
 *
 * @author Johan Leitet
 * @version 1.0.0
 */

/**
 * Returns a new object
 *
 * @param {Number} x Number horisontal knobs on the lego brick default 2
 * @param {Number} y Number vertical knobs on the lego brick default 4
 * @param {Number} z Hight of the lego brick default 2
 * @param {String} color Color of the lego brick ("blue", "red", "green" etc.) default red
 * @returns {{x: Number, y: Number, z: Number, color: String, toString: function, render: function}}
 */
exports.createLego = function(x, y, z, color) {
    x = x || 2;
    y = y || 4;
    z = z || 2;
    color = color || "red";

    var returnObj = {
        x: x,
        y:y,
        z:z,
        color: color,
        toString: function() {

            var xc;
            var yc;
            var str = "";

            for (yc = 0; yc < this.y; yc += 1) {

                for (xc = 0; xc < this.x; xc += 1) {

                    str += "®";

                    if (xc < this.x - 1) {
                        str += " ";
                    }
                }

                if (yc < this.y - 1) {
                    str += "\n";
                }

            }

            return str;
        },
        render: function() {
            console.log(this.toString());
        }
    };

    return returnObj;
};
