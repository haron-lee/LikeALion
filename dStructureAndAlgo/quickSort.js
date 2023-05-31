let myArr = [10, 9, 8, 5, 6, 1, 3, 4, 2, 1];
function quickSort([...arr]) {
  // 섹션의 길이가 1이거나, 1보다 작을 경우 파티셔닝을 종료합니다.
  if (arr.length <= 1) {
    return arr;
  }
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  const leftSection = [];
  const rightSection = [];
  for (let i = 0; i < arr.length; i++) {
    // 기준값보다 작으면 왼쪽으로
    if (arr[i] < pivot) {
      leftSection.push(arr[i]);
      // 기준값보다 크거나 같다면 오른쪽으로
    } else {
      rightSection.push(arr[i]);
    }
  }
  console.log('leftSection: ' + leftSection);
  console.log('rightSection: ' + rightSection);

  return quickSort(leftSection).concat([pivot], quickSort(rightSection));
}

console.log(quickSort(myArr));

// 다음에 주어지는 나라 이름을 길이에 따라 짧은 이름을 앞으로, 긴 이름을 뒤로 정렬하여보시길 바랍니다.

const countries = ['USA', 'Australia', 'Canada', 'Germany', 'Japan', 'Brazil'];

function quickSort([...arr]) {
  // 섹션의 길이가 1이거나, 1보다 작을 경우 파티셔닝을 종료합니다.
  if (arr.length <= 1) {
    return arr;
  }
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  const leftSection = [];
  const rightSection = [];
  for (let i = 0; i < arr.length; i++) {
    // 기준값보다 작으면 왼쪽으로
    // length만 추가하면 된다.
    if (arr[i].length < pivot.length) {
      leftSection.push(arr[i]);
      // 기준값보다 크거나 같다면 오른쪽으로
    } else {
      rightSection.push(arr[i]);
    }
  }
  console.log('leftSection: ' + leftSection);
  console.log('rightSection: ' + rightSection);

  return quickSort(leftSection).concat([pivot], quickSort(rightSection));
}

console.log(quickSort(countries));
