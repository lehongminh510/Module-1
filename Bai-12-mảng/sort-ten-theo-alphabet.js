const lstFullNames = ['Ha Van Ngoc', 'Le Thi Trang', 'Nguyen Van A', 'Nguyen Thi B'];
lstFullNames.sort(function(a, b) {
    let namesA = a.split(' ');
    let namesB = b.split(' ');
    if (namesA[namesA.length -1] < namesB[namesB.length-1]) return -1;
    if (namesA[namesA.length -1] > namesB[namesB.length-1]) return 1;
    return 0;
})
