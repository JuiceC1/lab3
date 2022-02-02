let x: string[] = [];

function addTask(task:string):number
{
    x.push(task);
    console.log("Task added to array");
    return x.length;
}


function listAllTasks():void
{
    let i= 0;
    for(i;i <= x.length;i++)
    {
        console.log(x[i]);
    }
    // Using for each
    //x.forEach(function(item)
    // {
    //     console.log(item);
    // }
}

function deleteTask(task:string):number
{
    let index = x.indexOf(task);
    if(index > -1)
    {
    x.splice(index,1);
    console.log("The deleted task is " + task);
    }
    else{
        console.log("ItemL " + task+ "is not in tasks")
    }
    return x.length;
}



addTask("Part A");
addTask("Part B");

listAllTasks();

deleteTask("Part B");
deleteTask("Part 5");