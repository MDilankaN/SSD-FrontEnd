import axios from "axios";
import CryptoJS from 'crypto-js';
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InR5cGUiOiJhZG1pbiIsInVzZXJuYW1lIjoiYWRtaW54IiwicGFzc3dvcmQiOiIkMmIkMTAkZzFPTDNIOUJhV2o5QkpiNXJ4WXBhLm9oazBxNzVQUENuaVBTZk1COHcwU2JZTWJJYkN2TVciLCJlbWFpbCI6ImFkbWlueEBnbWFpbC5jb20ifSwiaWF0IjoxNjY3ODQ0Mjg2LCJleHAiOjE2Njc4NDUxODZ9.UpVQ2u4P-IgOo9gYpotU7Rd-2ZhRYFOIbXYQLXggPYs";
export async function loginUser(data) {
  try {
    const responce = await axios.post(
      "https://localhost:5000/userRoute/login",
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
      "https://localhost:5000/userRoute/register",
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

//add message
export async function addMessage(message) {

  //encrypt the message
  const encrypt = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(message));
  console.log("ENCRYPT", encrypt);
  //create son object and send as API Call
  var data = {
    "username": localStorage.getItem("user"),
    "message": encrypt
  }
  try {
    const responce = await axios.post(
      "https://localhost:5000/messageRoute/sendmessage",
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

// add file
export async function addFile(formData) {
  try {

    const responce = await axios.post(
      "https://localhost:5000/fileUploadRoute/fileAdd",
      formData,
      {
        headers: {
          Authorization: `bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(responce);
  } catch (e) {
    console.log(e);
  }
}
