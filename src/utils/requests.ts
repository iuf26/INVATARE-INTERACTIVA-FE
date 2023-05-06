import axios from "axios";

const GET_USER_PROGRESS = 'http://localhost:8080/users/getUserProgress'


export const getUserProgress = (userEmail:string) => {
return axios.get(`${GET_USER_PROGRESS}/${userEmail}`);
}