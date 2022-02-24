let count = 0;

export function increase() {
  count++;
}

export function getCount() {
  return count;
}

// 이전 방식
// module.exports.getCount = getCount;
// module.exports.increase = increase;
