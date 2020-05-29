import axios, { AxiosInstance } from "axios";

export const baseURL = "https://api.petfinder.com/v2";

export const axiosClient: AxiosInstance = axios.create({
  baseURL,
  responseType: "json",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_PETFINDER_TOKEN}`,
  },
});

export default class PetfinderAPI {
  public static client: AxiosInstance = axiosClient;

  public static getAnimals(page: number = 1) {
    return axiosClient.get(`/animals?page=${page}`);
  }

  public static getType(type: string) {
    return axiosClient.get(`/animals?type=${type}`);
  }
}
