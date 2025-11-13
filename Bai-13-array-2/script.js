const matrix = [
  [1,2,3],
  [4,5],
  [6],
];
console.log(matrix[0].length); // 3
console.log(matrix[1].length); // 2
console.log(matrix[2].length); // 1

const cities = [
    ['Hanoi', 'HCM', 'DN', 'Ninh Binh'],
    ['Tokyo'],
    ['Hong Kong', 'Dai Bac', 'Van Nam'],
]
// thêm thành phố mới cho nhật bản
cities[1].push('Osaka');
cities[2][1] = 'Taipei';
