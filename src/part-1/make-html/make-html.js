/**
 * Namespace for Make Html assignment
 *
 * @namespace MakeHtml
 * @author thajo
 * @version 1.0.0
 */
var MakeHtml = (function() {
    "use strict";


    return {

        makeStartTag: function(element) {
            // TODO: Write this code first

            var result = "<" + element +">";
            return result;
        },

        makeEndTag: function(element) {
            // TODO: Write this code second

            var result = "</" + element + ">";
            return result;
        },

        makeElement: function(element, text) {

            // TODO: Write this code third
            var result = MakeHtml.makeStartTag(element);
            result += text;
            result += MakeHtml.makeEndTag(element);
            return result;
        },

        makeSnippet: function(blocks) {
            // TODO: Write this code last
            var result = "";
            blocks.forEach(function(current) {
                var key = Object.keys(current)[0];
                var value = current[key];
                result += MakeHtml.makeElement(key, value);
            });

            return result;
        }
    };
}());

module.exports = MakeHtml;
