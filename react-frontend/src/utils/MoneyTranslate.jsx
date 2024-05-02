const getCurrency = (cost) => {
  for (var i = 0; i < cost.length; i++) {
    if (
      cost[i] !== "," &&
      cost[i] !== "." &&
      !(parseInt(cost[i]) instanceof Number)
    )
      return cost[i];
  }
};
const getMoney = (cost) => {
  var money = "";
  for (var i = 0; i < cost.length; i++) {
    if (cost[i] !== getCurrency(cost)) money += cost[i];
  }
  return parseFloat(money);
};
export { getCurrency, getMoney };
