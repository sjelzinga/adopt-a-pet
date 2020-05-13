import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";

const useError = (error: AxiosResponse) => {
  const [errorMessage, setErrorMessage] = useState("");

  switch (error.status) {
    case 404:
      setErrorMessage("Niets gevonden");
  }

  return errorMessage;
};
