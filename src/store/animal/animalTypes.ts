export interface IAnimal {
  id: number;
  type: string;
  age: string;
  gender: string;
  name: string;
  status: string;
}

export interface IAnimalState {
  animals: any[] | null;
  loading: boolean;
  error: string | null;
}
