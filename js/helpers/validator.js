function isUndefined(value, name) {
  if (value === undefined) {
    throw new Error(`${name} is undefined`);
  }
}
function isNull(value, name) {
  if (value === null) {
    throw new Error(`${name} is null`);
  }
}

export default class Validator {
  static CheckValue(value, name) {
    isNull(value, name);
    isUndefined(value, name);
  }

  /**
   *
   * @param {object} value - value what need check
   * @param {string} name - name of parameter
   */
  static IsHTMLElement(value, name = "value") {
    Validator.CheckValue(value, name);
    if (!(value instanceof HTMLElement)) {
      throw new Error(`${value} is not HTMLElement`);
    }
  }
  /**
   *
   * @param {object} value - value what need check
   * @param {string} name - name of parameter
   */
  static IsNumber(value, name = "value") {
    Validator.CheckValue(value, name);
    if (typeof value !== "number") {
      throw new Error(`${value} is not Number`);
    }
  }

  /**
   *
   * @param {object} value - value what need check
   * @param {string} name - name of parameter
   */
  static IsString(value, name = "value") {
    Validator.CheckValue(value, name);
    if (typeof value !== "string") {
      throw new Error(`${value} is not Number`);
    }
  }

  /**
   *
   * @param {object} value - value what need check
   * @param {string} name - name of parameter
   */
  static IsArray(value, name = "value") {
    Validator.CheckValue(value, name);
    if (typeof value !== "array") {
    }
  }

  /**
   *
   * @param {number} value
   * @param {number} leftEdge
   * @param {number} rightEdge
   * @param {string} valueName
   */
  static IsInRange(value, leftEdge, rightEdge, valueName = "value") {
    Validator.IsNumber(value, valueName);
    Validator.IsNumber(leftEdge, "left edge");
    Validator.IsNumber(rightEdge, "right edge");

    if (value < leftEdge || value > rightEdge) {
      throw new Error(
        `${nameValue} not in in range [${leftEdge},${rightEdge}]`
      );
    }
  }

  /**
   *
   * @param {number} value
   * @param {Array} array
   * @param {string} nameValue
   */
  static IsIndexInRange(
    value,
    array,
    nameArray = "array",
    nameValue = "value"
  ) {
    Validator.IsArray(array, nameArray);
    Validator.IsInRange(value, 0, array.length - 1, nameValue);
  }

  /**
   *
   * @param {object} value
   * @param {type} type
   * @param {str} valueName
   */
  static IsInstanceOf(value, type, valueName = "value") {
    if (!(value instanceof type)) {
      throw new Error(`${valueName} if not instance of ${type}`);
    }
  }
}
