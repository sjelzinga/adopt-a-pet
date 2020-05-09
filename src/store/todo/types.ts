export interface ITodo {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ITodoState {
  todo: ITodo | null;
  loading: boolean;
  error: string | null;
}
