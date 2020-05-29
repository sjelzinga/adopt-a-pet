type photoObject = { small: string; medium: string; large: string };

export interface IAnimal {
  id: number;
  type: string;
  age: string;
  gender: string;
  name: string;
  status: string;
  photo: object[];
  primary_photo_cropped: photoObject;
}

export interface IAnimalState {
  animals: any[] | null;
  loading: boolean;
  error: string | null;
}
