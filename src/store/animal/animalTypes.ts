export interface IAnimal {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IAnimalState {
  animals: any[] | null;
  loading: boolean;
  error: string | null;
}
