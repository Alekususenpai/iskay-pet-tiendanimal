import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching tasks
export const fetchTasksAsync = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const data = await response.json();
  return data;
});

export const addTaskAsync = createAsyncThunk(
  'tasks/addTask',
  async (taskData, { getState }) => {
    const newTask = {
      ...taskData,
      id: Date.now() // simplistic approach for generating a unique ID
    };
    return newTask;
  }
);

export const deleteTaskAsync = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, { rejectWithValue }) => {
    try {
      // Instead of making an API call, we directly return the taskId
      return taskId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Task slice
const taskSlice = createSlice({
  name: 'tasks',
  initialState: { entities: [], loading: 'idle' },
  reducers: {
    // Reducers for other sync actions
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasksAsync.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchTasksAsync.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.loading = 'idle';
      })
      .addCase(fetchTasksAsync.rejected, (state) => {
        state.loading = 'idle';
      })
      .addCase(addTaskAsync.fulfilled, (state, action) => {
        state.entities.push(action.payload); // Add the new task to the tasks array
      })
      .addCase(deleteTaskAsync.fulfilled, (state, action) => {
        state.entities = state.entities.filter(task => task.id !== action.payload);
      });
},
});

export default taskSlice.reducer;