const solution = (people, limit) => {
  people.sort((a, b) => a - b); // 몸무게 기준으로 오름차순 정렬
  let result = 0;
  let left = 0; // 가장 가벼운 사람
  let right = people.length - 1; // 가장 무거운 사람

  while (left <= right) {
      if (people[left] + people[right] <= limit) {
          // 두 사람의 몸무게 합이 제한 무게 이하인 경우, 두 사람 모두 구명보트에 태웁니다.
          left++;
      }
      right--; // 가장 무거운 사람은 항상 구명보트에 탐
      result++;
  }
  return result;
};