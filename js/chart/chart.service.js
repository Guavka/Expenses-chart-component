import ChartModel from "./chart.model.js";
import Validator from "../helpers/validator.js";

function parseData(settings) {
  const tmp = [];
  settings.forEach((el) => {
    tmp.push(new ChartModel(el));
  });
  return tmp;
}

export default class ChartService {
  /**
   *
   * @param {string} path
   */
  static async ParseData() {
    try {
      const settingsFile = await fetch("../../data.json");
      const settingsObj = await settingsFile.json();
      return parseData(settingsObj);
    } catch (err) {
      return Promise.reject();
    }
  }

  /**
   *
   * @param {Array.<ChartModel>} array
   */
  static async CalculateProcents(array) {
    try {
      Validator.IsArray(array, "CalculateProcentsArray");
      array.forEach((el) => {
        Validator.IsInstanceOf(el, ChartModel);
      });

      const copy = [...array];
      const max = copy.sort((el1, el2) => el2.amount - el1.amount)[0];
      const index = array.indexOf(max);
      const koef = 80 / max.amount;

      const result = array.reduce((acc, el, index) => {
        acc[index] = [el.amount, Math.round(el.amount * koef)];
        return acc;
      }, []);

      return [result, index];
    } catch (error) {
      return Promise.reject();
    }
  }
}
