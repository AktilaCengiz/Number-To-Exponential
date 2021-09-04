//###############
// Venosa, Aktila
//###############
var exponentialOne =   "¹";
var exponentialTwo =   "²";
var exponentialThree = "³";
var exponentialFour =  "⁴";
var exponentialFive =  "⁵";
var exponentialSix =   "⁶";
var exponentialSeven = "⁷";
var exponentialEight = "⁸";
var exponentialNine =  "⁹";
var exponentialZero =  "⁰";

var zArray = [];

module.exports = {

    run : async function(number) {
        
        var Nstring = String(number);

        for(let karakter of Nstring) {

            if(karakter == 1) {
                var n = exponentialOne
            }

            if(karakter == 2) {
                var n = exponentialTwo
            }
            
            if(karakter ==  3) {
                var n = exponentialThree
            }
            if(karakter == 4) {
                var n = exponentialFour
            }
            if(karakter == 5) {
                var n = exponentialFive
            }
            if(karakter == 6) {
                var n = exponentialSix
            }
            if(karakter == 7) {
                var n = exponentialSeven
            }
            if(karakter == 8) {
                var n = exponentialEight
            }
            if(karakter == 9) {
                var n = exponentialNine
            }
            if(karakter == 0) {
                var n = exponentialZero
            }

            zArray.push(n);
          }
          
          var s = zArray.toString()
          var d = s.replace(",", "");
          return d;
    }
};
// Everything start with end..