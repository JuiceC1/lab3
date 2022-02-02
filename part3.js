var ToDo = /** @class */ (function () {
    function ToDo() {
        this.x = [];
    }
    ToDo.prototype.addTask = function (task) {
        this.x.push(task);
        console.log("Task added to array");
        return x.length;
    };
    ToDo.prototype.listAllTasks = function () {
        var i = 0;
        for (i; i <= x.length; i++) {
            console.log(x[i]);
        }
    };
    ToDo.prototype.deleteTask = function (task) {
        var index = x.indexOf(task);
        if (index > -1) {
            this.x.splice(index, 1);
            console.log("The deleted task is " + task);
        }
        else {
            console.log("ItemL " + task + "is not in tasks");
        }
        return this.x.length;
    };
    return ToDo;
}());
