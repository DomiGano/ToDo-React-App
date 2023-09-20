import { API_KEY, API_URL } from "./constants";

/**
 * Fetch all tasks
 * @param {function} successCallback - Function that saves incoming data
 */

export const getTasks = (successCallback) => {
  fetch(`${API_URL}/tasks`, {
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((r) => r.json())
    .then((data) => {
      if (data.error === false && typeof successCallback === "function") {
        successCallback(data.data);
      }
    })
    .catch(err => console.log(err));
};
  