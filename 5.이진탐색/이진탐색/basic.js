const binarySearch = (arr, target) => {
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    let midIdx = Math.floor((start + end) / 2)
    let mid = arr[midIdx]
    if (mid === target) {
      return midIdx
    } else if (mid < target) {
      start = midIdx + 1
    } else {
      end = midIdx - 1
    }
  }

  return -1
}

const lower = (arr, target) => {
  let start = 0
  let end = arr.length

  while (start < end) {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] >= target) end = mid
    else start = mid + 1
  }
  return end
}

const upper = (arr, target) => {
  let start = 0
  let end = arr.length

  while (start < end) {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] > target) end = mid
    else start = mid + 1
  }
  return end
}
