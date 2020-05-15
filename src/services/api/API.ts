import axios, { AxiosInstance } from "axios";

export const baseURL = "https://jsonplaceholder.typicode.com/";

export const axiosClient: AxiosInstance = axios.create({
  baseURL,
  responseType: "json",
  headers: {
    Accept: "application/json",
  },
});

export default class API {
  public static client: AxiosInstance = axiosClient;
}
