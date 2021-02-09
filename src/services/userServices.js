import heartLineApi from '../config/api'
import axios from 'axios';

// create user
export async function signUp(data) {
    const response = await heartLineApi.post('/api/users/', data)
    return response.data
}

// random call for users with public = true
export async function getRandom(){
    // const response = await heartLineApi.get('/api/users/random')
    // return response.data
    
    let one = "http://localhost:3000/api/users/random"
    let two = "http://localhost:3000/api/users/random"
    let three = "http://localhost:3000/api/users/random"
    let four = "http://localhost:3000/api/users/random"
    let five = "http://localhost:3000/api/users/random"

    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    const requestThree = axios.get(three);
    const requestFour = axios.get(four);
    const requestFive = axios.get(five);

    axios.all([requestOne, requestTwo, requestThree, requestFour, requestFive])
    .then(axios.spread((...responses) => {
    const responseOne = responses[0]
    const responseTwo = responses[1]
    const responseThree = responses[2]
    const responseFour = responses[3]
    const responseFive = responses[4]
    console.log(responses)
}))
.catch(errors => {
  console.log(errors)
});



};

// show user with id
// might need to change to username instead of id
export async function getUser(id) {
    const response = await heartLineApi.get(`/api/users/${id}`)
    return response.data
};

// update user settings
    export async function updateUser(user){
        const response = await heartLineApi.put(`/api/users/${user.id}`, user)
        return response.data
    }


// destroy user 
export async function deleteUser(id){
    const response = await heartLineApi.delete(`/api/users/${id}`)
    return response.data

}

//logout user 
export async function signOut(data) {
    sessionStorage.clear()
    return "Logged out"
};

// user sign in 
export async function signIn(data) {
    const response = await heartLineApi.post('/api/users/sign_in', data)
    return response.data
}


// default thing
export default async function defExp(e){
    console.log(e)
};