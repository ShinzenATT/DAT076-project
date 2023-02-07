import { Task } from "../model/event";

export interface ITaskService {
    // Returns the list of all tasks in the user's todo list
    getTasks() : Promise<Array<Task>>;

    // Adds a task with the given description to the todo list
    // and returns the created Task object
    addTask(description : string) : Promise<Task>;

    // Marks the task with index n done and returns true
    // If there is no task with index n, returns false
    markDone(n : number) : Promise<boolean>;
}

class TaskService implements ITaskService {
    tasks : Array<Task> = [];

    async getTasks() : Promise<Array<Task>> {
        return this.tasks;
    }

    async addTask(description : string) : Promise<Task> {
        const task = new Task(description);
        this.tasks.push(task);
        return task;
    }

    async markDone(n : number) : Promise<boolean> {
        const task = this.tasks[n];
        if (task == null) {
            return false;
        }
        task.done = true;
        return true;
    }
}

export function makeTaskService() : ITaskService {
    return new TaskService();
}
