import {myInterface} from './interface';

class ToDo implements myInterface
{
    x: Array<string>;
    addTask(task: string): number 
    {
        this.x.push(task);
        console.log("Task added to array");
        return this.x.length;
    }

    listAllTasks():void
    {
    let i= 0;
    for(i;i <= this.x.length;i++)
    {
        console.log(this.x[i]);
    }
    }

    deleteTask(task:string):number
    {
    let index = this.x.indexOf(task);
    if(index > -1)
    {
    this.x.splice(index,1);
    console.log("The deleted task is " + task);
    }
    else{
        console.log("ItemL " + task+ "is not in tasks")
    }
    return this.x.length;
    }
}