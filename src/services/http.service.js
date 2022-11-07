import axios from 'axios';
export async function loginUser(data){
    try {
        const responce = await axios.post('http://localhost:5000/userRoute/login', data)
        console.log(responce);
    } catch (e) {
        console.log(e);
    }
}

