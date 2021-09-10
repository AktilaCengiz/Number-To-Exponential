const ExponentialNumbers = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"], 
    NormalNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

module.exports = {
  run: function(String, Space = false) {
    if (!String || typeof String !== "string" || String.length < 0) throw new Error("Exponential sayıların dönüşümü için herhangi bir yazı girilmedi.");

    let NewString = "";
    for (i = 0; i < String.length; i++) {
      const CurrentNumber = String[i];
      if (NormalNumbers.includes(CurrentNumber)) 
        NewString += ExponentialNumbers[CurrentNumber];

      if (Space && !NormalNumbers.includes(CurrentNumber))
        NewString += " ";
    };

    return NewString;
  };
};
