import Validator from "../helpers/validator.js";

export default class ChartModel {
  #dayValue = "mon";
  #amountValue = 0;

  get day() {
    return this.#dayValue;
  }

  /**
   * @param {string} value
   */
  set #day(value) {
    Validator.IsString(value, "day");
    this.#dayValue = value;
  }

  get amount() {
    return this.#amountValue;
  }

  /**
   * @param {number} value
   */
  set #amount(value) {
    Validator.IsNumber(value, "amount");
    this.#amountValue = value;
  }

  constructor(settings) {
    const { day, amount } = settings;
    this.#day = day;
    this.#amount = amount;
  }
}
