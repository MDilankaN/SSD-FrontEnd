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
      "http://localhost:5000/ruserRoute/registe",
      data,
      {
        headers: {
          Authorization: `Basic ${token}`,
        },
      }
    );
    console.log(responce);
  } catch (e) {
    console.log(e);
  }
}

//add message
export async function addMessage(data) {
  try {
    const responce = await axios.post(
      "http://localhost:5000/messageRoute/sendmessage",
      data,
      {
        headers: {
          Authorization: `Basic ${token}`,
        },
      }
    );
    console.log(responce);
  } catch (e) {
    console.log(e);
  }
}

// add file
export async function addFile(data) {
  try {
    const responce = await axios.post(
      "http://localhost:5000/fileRoute/fileAdd",
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
