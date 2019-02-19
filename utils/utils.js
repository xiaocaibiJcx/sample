function setStars(stars) {
  let num = stars.toString().substring(0, 1);
  let arr = [];
  for (let i = 1; i < 6; i++) {
    i <= num ? arr.push(1) : arr.push(0)
  }
  return arr;
}
module.exports ={
  setStars
}