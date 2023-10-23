function checkForSpam(message) {
  messageLow = message.toLowerCase();
  if (messageLow.includes("spam") || messageLow.includes("sale")) {
    return true;
  } else {
    return false;
  }
}

// function checkForSpam(message) {
//   const regex = /(spam|sale)/i;
//   return regex.test(message);
// }

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
