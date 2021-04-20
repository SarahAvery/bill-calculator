import "../resources/scss/main";

function calculateTip() {
  var billAmt = document.getElementById("billAmt").value;
  var serviceQ = document.getElementById("quality").value;
  var numPeople = document.getElementById("splitBy").value;

  //Check if number of people is empty or less than 1
  if (numPeople === "" || numPeople <= 1) {
    numPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "inline-block";
  }

  // Calculate total
  var tipAmount = billAmt * serviceQ - billAmt;
  var totalSplit = (billAmt * serviceQ) / numPeople;

  //   Rounding to 2 decimal places
  tipAmount = Math.round(tipAmount * 100) / 100;
  tipAmount = tipAmount.toFixed(2);

  totalSplit = Math.round(totalSplit * 100) / 100;
  totalSplit = totalSplit.toFixed(2);

  // Make Tip Section Visable
  document.getElementById("totalSplit").style.display = "flex";
  //   Bill totals
  document.getElementById("total-bill").innerHTML = billAmt;
  document.getElementById("total-tip").innerHTML = tipAmount;
  document.getElementById("total-split").innerHTML = totalSplit;
}

//   Calulate Button
document.getElementById("calculate").onclick = function () {
  calculateTip();
};

// Make Tip Section Hidden on load
document.getElementById("totalSplit").style.display = "none";
document.getElementById("each").style.display = "none";
