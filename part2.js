var x = [];
function addTask(task) {
    x.push(task);
    console.log("Task added to array");
    return x.length;
}
function listAllTasks() {
    var i = 0;
    for (i; i <= x.length; i++) {
        console.log(x[i]);
    }
    // Using for each
    //x.forEach(function(item)
    // {
    //     console.log(item);
    // }
}
function deleteTask(task) {
    var index = x.indexOf(task);
    if (index > -1) {
        x.splice(index, 1);
        console.log("The deleted task is " + task);
    }
    else {
        console.log("ItemL " + task + "is not in tasks");
    }
    return x.length;
}
addTask("Part A");
addTask("Part B");
listAllTasks();
deleteTask("Part B");
deleteTask("Part 5");
