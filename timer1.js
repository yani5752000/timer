let arr = process.argv.slice(2);
arr.sort();

for (let x of arr) {
  if (!isNaN(x)) {
    x = 1000 * Number(x);
    if (x >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, x);
    }
  }
}

