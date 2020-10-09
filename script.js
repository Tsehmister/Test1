let money = +prompt("Ваш бюджет в месяц ? ", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appDate = {
  budjet: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeDate: time,
  savings: false,
};

for (let i = 0; i < 2; i++) {
  let a = prompt("ВВедите обязательную статью расходов в этом месяце", "");
  let b = prompt("Во сколько это обойдется ?", "");
  if (
    typeof a === "string" &&
    typeof a != null &&
    typeof b != null &&
    a != "" &&
    b != "" &&
    a.length < 50
  ) {
    console.log("done");
    appDate.expenses[a] = b;
  } else {
  }
}
appDate.moneyPerDay = appDate.budjet / 30;
alert("Every day bujet : " + appDate.moneyPerDay);

if (appDate.moneyPerDay < 100) {
  console.log("Mininimum dostatok");
} else if (appDate.moneyPerDay > 100 && appDate.moneyPerDay < 2000) {
  console.log("You are medium");
} else if (appDate.moneyPerDay > 2000) {
  console.log("You are rich");
} else {
  console.log("Error");
}
