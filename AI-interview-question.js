// example of closure
function createBank(initialBalance) {
  let balance = initialBalance;

  return {
    depositAmt: (amt) => (balance = balance + amt),
    withdraw: (amt) => (balance -= amt),
    getbalance: () => balance,
  };
}

const fun = createBank(100);
console.log(fun.getbalance());
console.log(fun.depositAmt(300));
// example of closure

// event loop example
console.log("start"); //callstack
setTimeout(() => {
  console.log("settimeout"); //task queue (macro task queue)
}, 0);

Promise.resolve().then(() => {
  console.log("promise task"); // miro task queue have a high priority
});
console.log("end");

// event loop example
