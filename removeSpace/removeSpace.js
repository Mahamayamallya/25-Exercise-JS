/*Simple, remove the spaces from thestring, then return the resultant string*/
function noSpace(x) {
  const arr = x.split(" ");

  let result = [];

  for (let i = 0; i < x.length; i++) {
    let trimmedX = arr[i].trim("");
    result.push(trimmedX);
  }

  let ans = result.join("");
  return ans;
}
