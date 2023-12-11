export const state = () => ({
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
});

export const mutations = {
  ADD_TASK(state, task) {
    state.tasks = [{ content: task, done: false }, ...state.tasks];
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  },
  REMOVE_TASK(state, task) {
    const index = state.tasks.indexOf(task);
    state.tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  },
  TOGGLE_TASK(state, task) {
    task.done = !task.done;
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  },
};