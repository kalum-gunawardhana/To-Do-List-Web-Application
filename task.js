let taskArray = [];
let num = 1;

let date = new Date();
// console.log(new Date());
document.getElementById("dateID").innerHTML = date;

function AddTask() {
    let taskID = document.getElementById("taskID").value;

    taskArray.push({ no: num++, task: taskID, status: "Finished" },);
    // console.log(taskArray);

    view();
}

function deleteTask(index) {
    console.log(index);

    taskArray.splice(index - 1, 1);
    view();
}

function view() {
    let body = "";
    let index = 0;
    taskArray.forEach(element => {
        body += `
        <tr id="${++index}">
            <td>${element.no}</td>
            <td>${element.task}</td>
            <td>${element.status}</td>
            <td><input type="checkbox" name="" id="${"C" + index}" onchange="deleteTask(${index})"></td>
         </tr>
        `;
    });

    document.getElementById("trID").innerHTML = body;

    document.getElementById("taskID").value = "";
}


