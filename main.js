const input = ['one', 'two', 'three', 'four', 'five'];
const output = {};
for (let i = 0; i < input.length; i++) {
  if (output[input[i].length]) {
    output[input[i].length] = [...output[input[i].length], input[i]];
  } else {
    output[input[i].length] = [input[i]];
  }
}
console.log(output);
