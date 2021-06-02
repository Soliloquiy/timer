const args = process.argv.slice(2);
if (args.length === 0) {
  return console.log('No Input');
};

Numargs = args.map((str) => Number(str));
const timer = function () {
  for (num of Numargs) {
    if (num < 0) {
      continue;
    }
    else if (!num) {
      continue;
    }
    else {setTimeout(() => {
      process.stdout.write('\x07');
    }, (num * 1000))
  }}
};

timer();