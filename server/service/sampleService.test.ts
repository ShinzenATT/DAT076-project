import { makeTaskService } from "./sampleService.js"

test("If a task is added to the list then it should be in the list", async () => {
    const desc = "Test description";
    const taskService = makeTaskService();
    await taskService.addTask(desc);
    const tasks = await taskService.getTasks();
    expect(tasks.some((task) => task.description === desc)).toBeTruthy();
})
