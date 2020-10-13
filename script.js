let money, time;
function start() {
  money = +prompt("Ваш бюджет в месяц ? ", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет в месяц ? ", "");
  }
}

start();

let appDate = {
  budjet: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeDate: time,
  savings: true,
  chooseExpenses: function name(params) {
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
        i=i=1;
      }
  }
};

function chooseExpenses() {}


}


appDate.moneyPerDay = (appDate.budjet / 30).toFixed();
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

function checkSavings() {
  if (appDate.savings == true) {
    let save = +prompt("Какова сумма накоплений?"),
      percent = +prompt("Под какой процент?");

    appDate.montIncome = (save / 100 / 12) * percent;
    alert("Доход в месяц с вашего депозита: " + appDate.montIncome);
  }
}

checkSavings();
