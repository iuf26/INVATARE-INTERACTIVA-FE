import axios from "axios";

const GET_USER_PROGRESS = 'http://localhost:8080/users/getUserProgress'
const SET_USER_PROGRESS = "http://localhost:8080/users/updateProgress";
const UPDATE_USER_RESULTS = "http://localhost:8080/users/updateResults";
const GET_USER_RESULTS = "http://localhost:8080/users/getUserResults"

export const getUserProgress = (userEmail:string) => {
return axios.get(`${GET_USER_PROGRESS}/${userEmail}`);
}

export const updateUserProgress = (email:string,chapter:string) => {
const body  = {
    email,
    chapter
}
console.log(body)

return axios.put(SET_USER_PROGRESS,body);

}

export const updateUserResults = (email:string,chapter:string,score:string) => {
    const body  = {
        email,
        chapter,
        score
    }
    
    console.log({body})
    return axios.put(UPDATE_USER_RESULTS,body);
    
    }

    export const getUserResults = (userEmail:string) => {
        return axios.get(`${GET_USER_RESULTS}/${userEmail}`);
        }
