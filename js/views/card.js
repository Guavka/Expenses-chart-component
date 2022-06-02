import Validator from "../helpers/validator.js";

class CardView {
  #balanceTextElement = HTMLElement;
  #totalBalanceTextElement = HTMLElement;
  #percentTextElement = HTMLElement;
  #valueTextElementArray = [HTMLElement];
  #valueChartElementArray = [HTMLElement];

  /**
   * @param {HTMLElement} value
   */
  set #balanceText(value) {
    Validator.IsHTMLElement(value);
    this.#balanceTextElement = value;
  }

  /**
   *
   * @param {Number} balance
   */
  setBalanceText(balance) {
    Validator.IsNumber(balance);
    this.#balanceTextElement.innerHTML = `$${balance.toFixed(2)}`;
  }

  /**
   * @param {HTMLElement} value
   */
  set #totalBalanceText(value) {
    Validator.IsHTMLElement(value);
    this.#totalBalanceTextElement = value;
  }

  /**
   *
   * @param {Number} balance
   */
  setTotalBalanceText(balance) {
    Validator.IsNumber(balance);
    this.#totalBalanceTextElement.innerHTML = `$${balance.toFixed(2)}`;
  }

  /**
   * @param {HTMLElement} value
   */
  set #percentText(value) {
    Validator.IsHTMLElement(value);
    this.#percentTextElement = value;
  }

  /**
   *
   * @param {Number} percent
   */
  setPercentText(percent) {
    Validator.IsNumber(percent);
    this.#percentTextElement.innerHTML =
      percent > 0 ? `+${percent.toFixed(1)}%` : `${percent.toFixed(1)}%`;
  }

  /**
   * @param {Array.<HTMLElement>} value
   */
  set #valueTextArray(value) {
    value.forEach((el) => {
      Validator.IsHTMLElement(el);
    });
    this.#valueTextElementArray = value;
  }

  /**
   * @param {Array.<HTMLElement>} value
   */
  set #valueChartArray(value) {
    value.forEach((el) => {
      Validator.IsHTMLElement(el);
    });
    this.#valueChartElementArray = value;
  }

  /**
   *
   * @param {number} index
   * @param {number} value
   */
  setValue(index, value) {
    Validator.IsIndexInRange(index, this.#valueTextElementArray);
    Validator.IsNumber(value);

    this.#valueTextElementArray[index].innerHTML = `$${value.toFixed(2)}`;
  }

  /**
   *
   * @param {number} index
   * @param {number} percent
   */
  setChartPercent(index, percent) {
    Validator.IsIndexInRange(index, this.#valueChartElementArray.length);
    Validator.IsInRange(percent, 0, 80);

    this.#valueChartElementArray[index].style.height = `${percent}%`;
  }

  /**
   *
   * @param {number} index
   */
  setChartMax(index) {
    Validator.IsIndexInRange(index, this.#valueChartElementArray.length);
    this.#valueChartElementArray[index].classList.add("max-chart");
  }

  constructor() {
    this.#balanceText = document.getElementById("balance");
    this.#totalBalanceText = document.getElementById("total-value");
    this.#percentText = document.getElementById("percent-value");

    this.#valueTextArray = document.querySelectorAll(".value-text");
    this.#valueChartArray = document.querySelectorAll(".value-chart");
  }
}

const instance = new CardView();

export default instance;
