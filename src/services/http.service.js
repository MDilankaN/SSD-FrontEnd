import axios from "axios";

 const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InR5cGUiOiJhZG1pbiIsInVzZXJuYW1lIjoiYWRtaW54IiwicGFzc3dvcmQiOiIkMmIkMTAkZzFPTDNIOUJhV2o5QkpiNXJ4WXBhLm9oazBxNzVQUENuaVBTZk1COHcwU2JZTWJJYkN2TVciLCJlbWFpbCI6ImFkbWlueEBnbWFpbC5jb20ifSwiaWF0IjoxNjY3ODQ0Mjg2LCJleHAiOjE2Njc4NDUxODZ9.UpVQ2u4P-IgOo9gYpotU7Rd-2ZhRYFOIbXYQLXggPYs"
export async function loginUser(data) {
  try {
    const responce = await axios.post(
      "http://localhost:5000/userRoute/login",
      data
    );
    console.log(responce);
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
          Authorization: `Basic ${token}`,
        },
      }
    );
    console.log(responce);
  } catch (e) {
    console.log(e);
  }
}