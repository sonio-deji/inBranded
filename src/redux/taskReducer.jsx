import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
};

const todoApp = createSlice({
  name: "todoApp",
  initialState,
  reducers: {
    addProject: (state, action) => {
      const { id, title, taskName, taskId } = action.payload;
      let existingProject = state.projects.find(
        (project) => project.title === title
      );
      //finds project in state and check if project title exists, if it doesnt it a new project and task but if project title exists it adds task to project
      if (existingProject) {
        existingProject.id = id;
      } else {
        existingProject = { id, title, tasks: [] };
        state.projects.push(existingProject);
      }
      let existingTask = existingProject.tasks.find(
        (task) => task.name === taskName
      );
      if (existingTask) {
        existingTask.id = taskId;
      } else {
        existingProject.tasks.push({
          id: taskId,
          name: taskName,
        });
      }
    },
    updateTask: (state, action) => {
      const { taskId } = action.payload;
      const project = state.projects.find((project) =>
        project.tasks.some((task) => task.id === taskId)
      );
      if (project) {
        const task = project.tasks.find((task) => task.id === taskId);
        if (task) {
          task.checked = !task.checked;
        }
      }
    },
    editTask: (state, action) => {
      const { id, isEditing } = action.payload;
      const index = state.tasks.findIndex((t) => t.id === id);
      state.tasks[index] = { ...state.tasks[index], isEditing };
    },
    deleteTask: (state, action) => {
      const { taskId } = action.payload;
      const project = state.projects.find((project) =>
        project.tasks.some((task) => task.id === taskId)
      );
      if (project) {
        const taskIndex = project.tasks.findIndex((task) => task.id === taskId);
        project.tasks.splice(taskIndex, 1);
      }
    },
  },
});

export const {
  addProject,
  addTask,
  updateTask,
  editTask,
  deleteTask,
  addTaskToProject,
} = todoApp.actions;
export default todoApp.reducer;
