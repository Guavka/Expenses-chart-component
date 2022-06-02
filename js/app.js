import card from "./views/card.js";
import ChartService from "./chart/chart.service.js";

async function init() {
  /* Test change data */
  card.setBalanceText(15.14);
  card.setTotalBalanceText(495.15);
  card.setPercentText(3.1);

  card.setValue(0, 15.1);
  /* Test change data */

  ChartService.ParseData()
    .then((res) => {
      return ChartService.CalculateProcents(res);
    })
    .then((res) => {
      const [array, maxIndex] = res;
      array.forEach((el, index) => {
        card.setValue(index, el[0]);
        card.setChartPercent(index, el[1]);
      });
      card.setChartMax(maxIndex);
    })
    .catch((err) => {
      //alert("Something wrong! Try again later.");
      console.log(err);
    });
}

init();
