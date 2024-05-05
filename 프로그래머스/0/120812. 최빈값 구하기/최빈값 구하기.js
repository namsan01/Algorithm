function solution(array) {
  let setArr = []
  let count = 0;

  [...new Set(array)].map((v) => setArr.push([v, count]));

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < setArr.length; j++) {
      if (array[i] == setArr[j][0]) setArr[j][1]++;
    }
  }

  setArr.sort((a, b) => b[1] - a[1]);

  if (array.length == 1 || setArr.length == 1) return array[0];
  else if (setArr[0][1] == setArr[1][1]) return -1;
  else return setArr[0][0];
}