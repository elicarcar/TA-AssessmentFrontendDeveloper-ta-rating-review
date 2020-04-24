export default function (array) {
  const scores = array.map((item) => parseInt(item.score));
  const averageScore = scores.reduce((curr, score) => {
    return score + curr;
  }, 0);
  return Math.floor(averageScore / array.length);
}
