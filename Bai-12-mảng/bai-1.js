// tạo mảng + duyệt qua các phần tử trong mảng
// khi bấm button add là thêm 1 phần tử vào mảng -> push
// khi bấm button display là console log phần tử đó \
//tạo ui
let x = 0;
let array = [];
function add_element_to_array() {
    array.push(document.getElementById("txtValue").value);
    //array[x] = document.getElementById("txtValue").value;
    // x++;
    document.getElementById("txtValue").value = ""
}
function display_array() {
    let e = "";
    for (let i = 0; i < array.length; i++) {
        e += "Element" + i + "=" + array[i] + "<br>";
    }
    document.getElementById("result").innerHTML = e;
}

