const ExponentialNumbers = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"], 
      NormalNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function Change(String, Space = false) {
    if (!String || typeof String !== "string" || String.length < 0) throw new Error("No text was entered for the conversion of exponential numbers.");
      if (typeof Space !== "boolean") throw new Error("The space parameter must be a boolean.");
      
      let Text = String.split("");
      for (let i = 0; i < ExponentialNumbers.length; i++) {
          Text = Text.map((x) => x.replace(NormalNumbers[i], ExponentialNumbers[i]));
      }
      return Space ? Text.join(" ") : Text.join("");
}

module.exports = Change;