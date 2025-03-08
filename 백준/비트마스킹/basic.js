// {0, 1, 2, 3}의 모든 부분집합 출력하기

// 1. 백트래킹 방법
const selected = Array(4).fill(false)
const func1 = (depth) => {
  if (depth === 4) {
    const result = []
    for (let i = 0; i < selected.length; i++) {
      if (selected[i]) result.push(i)
    }
    console.log(result.join(" "))
    return
  }
  func1(depth + 1) // 선택하지 않는 경우

  selected[depth] = true // 선택하는 경우
  func1(depth + 1)
  selected[depth] = false
}

// func1(0)

// 2. 2진수 이용
const func2 = () => {
  for (let temp = 0; temp < 16; temp++) {
    let brute = temp
    const result = []
    // 4개의 비트 확인
    for (let i = 0; i < 4; i++) {
      if (brute % 2 === 1) result.push(i) // 가장 오른쪽 비트 1인지 확인
      brute = Math.floor(brute / 2) // right shift
    }
    console.log(result.join(" "))
  }
}

// func2(0)

// 3. 비트마스킹 이용
const func3 = () => {
  for (let temp = 0; temp < 16; temp++) {
    let result = []
    // 4개의 비트 확인
    for (let i = 0; i < 4; i++) {
      if (temp & (1 << i)) result.push(i)
    }
    console.log(result.join(" "))
  }
}

func3()
