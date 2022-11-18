import axios from "axios";
import CryptoJS from "crypto-js";
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
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("type", responce.data.user.type);
      alert("successful login");
    } else {
      alert("Login Failed");
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
    if (responce.data === "successed") {
      alert("user added successfully");
    } else {
      alert(responce.data);
    }
    return responce.data
  } catch (e) {
    alert("unsuccesful");
    console.log(e);
  }
}

//add message
export async function addMessage(message) {
  //encrypt the message
  const encrypt = CryptoJS.enc.Base64.stringify(
    CryptoJS.enc.Utf8.parse(message)
  );
  console.log("ENCRYPT", encrypt);
  //create son object and send as API Call
  var data = {
    username: localStorage.getItem("user"),
    message: encrypt,
  };
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
    alert("message sent successfully");
    console.log(responce);
  } catch (e) {
    alert("unsuccessful");
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
    alert("file sent successfully");
    console.log(responce);
  } catch (e) {
    alert("unsuccessful");
    console.log(e);
  }
}
