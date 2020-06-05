type photoObject = { small: string; medium: string; large: string };
type breedObject = {
  primary: string;
  secondary: string;
  mixed: boolean;
  unknown: boolean;
};

export interface IAnimal {
  id: number;
  type: string;
  age: string;
  breeds: breedObject;
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
