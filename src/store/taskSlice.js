import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTasksAsync = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const data = await response.json();
  return data;
});

export const addTaskAsync = createAsyncThunk(
  'tasks/addTask',
  async (taskData, { rejectWithValue }) => {
    try {
      const newTask = {
        ...taskData,
        id: Date.now()
      };
      return newTask;
    } catch (error) {
      return rejectWithValue('La tarea no se pudo agregar. Intente nuevamente.');
    }
  }
);

export const deleteTaskAsync = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, { rejectWithValue }) => {
    try {
      return taskId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


const taskSlice = createSlice({
  name: 'tasks',
  initialState: { entities: [], loading: 'idle' },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasksAsync.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchTasksAsync.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.loading = 'fulfilled';
      })
      .addCase(fetchTasksAsync.rejected, (state) => {
        state.loading = 'rejected';
      })
      .addCase(addTaskAsync.fulfilled, (state, action) => {
        state.entities.push(action.payload);
      })
      .addCase(addTaskAsync.rejected, (state) => {
        state.loading = 'rejected';
      })
      .addCase(deleteTaskAsync.fulfilled, (state, action) => {
        state.entities = state.entities.filter(task => task.id !== action.payload);
      })
      .addCase(deleteTaskAsync.rejected, (state) => {
        state.loading = 'rejected';
      });
  },
});

export default taskSlice.reducer;