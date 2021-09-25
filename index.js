// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = []

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  // taskTitles.push(title);
  // taskDescriptions.push(description)
  // taskComplete.push(false);
  const task = {
    title: title,
    description: description,
    complete: false,

    // Print the state of a task to the console in a nice readable way
    logState: function() {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },

    // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
    markCompleted: function() {
      task.complete = true;
    },
  };
  return task;
};


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(task1);
task1.markCompleted(task1);
task1.logState(task1)

console.log(tasks);



// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed
