module.exports = function reverse (n) {
    var input = Math.abs(n).toString();
    var resultStr = "";
    for (var i = input.length - 1; i >= 0; i--) {
      if (resultStr !== "" || input[i] !== "0")
      resultStr += input[i];
    }
    return resultStr;
  }
