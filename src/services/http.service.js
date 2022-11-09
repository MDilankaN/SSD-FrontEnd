import axios from "axios";

export async function loginUser(data) {
  try {
    const responce = await axios.post(
      "http://localhost:5000/userRoute/login",
      data
    );
    if (responce.data.accessToken) {
      localStorage.setItem("token", responce.data.accessToken);
      localStorage.setItem("user", responce.data.user.username);
      localStorage.setItem("type", responce.data.user.type);
    }
    console.log(responce.data);

    return responce.data;
  } catch (e) {
    console.log(e);
  }
}

export async function addUser(data) {
  try {
    const responce = await axios.post(
      "http://localhost:5000/userRoute/register",
      data,
      {
        headers: {
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(responce);
  } catch (e) {
    console.log(e);
  }
}
