let taskArray = [];
let num = 1;


function AddTask() {
    let taskID = document.getElementById("taskID").value;

    taskArray.push({ no: num++, task: taskID, status: "Finished" },);
    // console.log(taskArray);

    let body = "";

    taskArray.forEach(element => {
        body += `
        <tr>
            <td>${element.no}</td>
            <td>${element.task}</td>
            <td>${element.status}</td>
         </tr>
        `;
    });

    document.getElementById("trID").innerHTML = body;
}
