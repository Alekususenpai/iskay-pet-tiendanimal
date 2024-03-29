export interface Task {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TaskList extends Array<Task> {}
