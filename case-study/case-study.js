let students = [];

function addStudent() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let className = document.getElementById("class").value;

    let file = document.getElementById("image").files[0];
    let imgURL = "";

    if (file) {
        imgURL = URL.createObjectURL(file);
    }

    let student = {
        id: id,
        name: name,
        dob: dob,
        gender: gender,
        class: className,
        image: imgURL
    };

    students.push(student);
    renderTable();
}

function renderTable() {
    let body = document.getElementById("body");
    body.innerHTML = "";

    for (let i = 0; i < students.length; i++) {
        let s = students[i];

        let row = "<tr>";
        row += "<td>" + s.id + "</td>";
        row += "<td>" + s.name + "</td>";
        row += "<td>" + s.dob + "</td>";
        row += "<td>" + s.gender + "</td>";
        row += "<td>" + s.class + "</td>";

        if (s.image !== "") {
            row += "<td><img src='" + s.image + "'></td>";
        } else {
            row += "<td></td>";
        }
        row += "</tr>";

        body.innerHTML += row;
    }
}

function saveData() {
    localStorage.setItem("students", JSON.stringify(students));
    alert("Đã lưu!");
}

window.onload = function () {
    let data = localStorage.getItem("students");

    if (data) {
        students = JSON.parse(data);
        renderTable();
    }
};
