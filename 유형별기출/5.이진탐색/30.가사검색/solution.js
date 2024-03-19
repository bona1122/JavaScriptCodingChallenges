const biRight = (array, target) => {
  let start = 0;
  let end = array.length;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] <= target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
};
const biLeft = (array, target) => {
  let start = 0;
  let end = array.length;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] < target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
};

const countByRange = (array, left, right) => {
  const rightIdx = biRight(array, right);
  const leftIdx = biLeft(array, left);
  return rightIdx - leftIdx;
};

const solution = (words, queries) => {
  const arr = Array(10001)
    .fill()
    .map(() => []);
  const reversed = Array(10001)
    .fill()
    .map(() => []);

  const answer = [];
  words.forEach((word) => {
    arr[word.length].push(word);
    reversed[word.length].push(word.split("").reverse().join(""));
  });

  for (let i = 0; i < 10001; i++) {
    arr[i].sort();
    reversed[i].sort();
  }
  queries.forEach((query) => {
    let result = 0;
    if (query[0] === "?") {
      //접두사인 경우
      const reversedQ = query.split("").reverse().join("");
      result = countByRange(
        reversed[query.length],
        reversedQ.replaceAll("?", "a"),
        reversedQ.replaceAll("?", "z")
      );
    } else {
      // 접미사인 경우
      result = countByRange(
        arr[query.length],
        query.replaceAll("?", "a"),
        query.replaceAll("?", "z")
      );
    }
  });
};
