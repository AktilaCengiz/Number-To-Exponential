const Change = require("./src/Change");

module.exports = {
    run: (Number) => {
        if (!Number || typeof Number !== "number") throw new Error("No number was entered for the conversion of exponential numbers.");
        return Change(Number.toString());
    }
}