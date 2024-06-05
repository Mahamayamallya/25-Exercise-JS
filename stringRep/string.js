/* Write a function called repeat_str which repeats the given string src exactly count times. */

function repeatStr(n, s) {
  let ans = "";
  for (let i = 0; i < n; i++) {
    ans = ans + s;
  }
  return ans;
}
