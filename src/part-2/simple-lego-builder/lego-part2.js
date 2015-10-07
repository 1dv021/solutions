"use strict";

/**
 * Creates a new Lego object
 *
 * @constructor
 * @param {Number} x Number horisontal knobs on the lego brick
 * @param {Number} y Number vertical knobs on the lego brick
 * @param {Number} z Hight of the lego brick
 * @param {String} color Color of the lego brick ("blue", "red", "green" etc.)
 */
function Lego(x, y, z, color) {
    this.x = x || 2;
    this.y = y || 4;
    this.z = z || 2;
    this.color = color || "red";

    this.toString = function() {

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
    };

    this.render  = function() {
        console.log(this.toString());
    };

}

exports.Lego = Lego;
