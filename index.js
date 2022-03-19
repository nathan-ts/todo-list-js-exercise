function newTask(title, desc) {
  const task = {
    title: title,
    description: desc,
    complete: false,

    logTaskState: function() {
      console.log(`${this.title} has ${this.complete ? "" : "not "}been completed.`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

tasks[1].markCompleted();

for (let t of tasks) {
  t.logTaskState();
}
