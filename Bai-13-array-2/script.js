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

//hàm splice
var students = [
    {
        id: 1,
        name: 'Nguyen Van A',
        address: 'Ha Noi'
    },
    {
        id: 2,
        name: 'Nguyen Van B',
        address: 'Ha Noi'
    }
]
console.log(students);
for (let i = 0; i < students.length; i++) {
    if(students[i].id == 2) {
        students.splice(i,1);
    }
}
console.log(students);
