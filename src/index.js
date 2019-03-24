module.exports = function check(str, bracketsConfig) {
  var bracketsStack = [];
  var bracketsBalance = true;

  if (str.length%2 != 0) {
    return false;
  }

  for (var i = 0; i < str.length; i++) {
    var bracket = str[i];

    for (var j = 0; j < bracketsConfig.length; j++) {
      if (bracket == bracketsConfig[j][0] && bracket == bracketsConfig[j][1]) {
        var bracketL = bracketsStack[bracketsStack.length - 1];

        if (bracket == bracketL) {
          bracketsStack.pop();

          break;
        }
      }

      if (bracket == bracketsConfig[j][0]) {
        bracketsStack.push(bracketsConfig[j][1]);

        break;
      } else if (bracket == bracketsConfig[j][1]) {
        var bracketLast = bracketsStack.pop();

        if (bracketLast != bracketsConfig[j][1]) {
          bracketsBalance = false;
        }

        break;
      }


    }

    if (bracketsBalance == false) {
      return false;
    }
  }

  if (bracketsStack.length == 0) {
    return true;
  } else {
    return false;
  }
}
