// Tasks02 array operations.


let styles = ["jaaz", "bluse"];
styles.push("rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "classics";
console.log(styles.shift());
styles.unshift("rap", "reggaes")
console.log(styles);