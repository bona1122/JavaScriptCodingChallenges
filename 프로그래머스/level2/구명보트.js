const solution = (people, limit) => {
  people.sort((a, b) => a - b); // ������ �������� �������� ����
  let result = 0;
  let left = 0; // ���� ������ ���
  let right = people.length - 1; // ���� ���ſ� ���

  while (left <= right) {
      if (people[left] + people[right] <= limit) {
          // �� ����� ������ ���� ���� ���� ������ ���, �� ��� ��� ����Ʈ�� �¿�ϴ�.
          left++;
      }
      right--; // ���� ���ſ� ����� �׻� ����Ʈ�� Ž
      result++;
  }
  return result;
};