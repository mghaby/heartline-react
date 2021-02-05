import heartLineApi from '../config/api'

// create user
export default async function signUp(user) {
    const response = await heartLineApi.post('/api/users/', user)
    return response.data
}

// random call for users with public = true
export default async function getRandom(){
    const response = await heartLineApi.get('/api/users/random')
    return response.data
};

// show user with id
// might need to change to username instead of id
export async function getUser(id) {
    const response = await heartLineApi.get(`api/users/${id}`)
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
export default async function signIn(user) {
    const response = await heartLineApi.post('/api/users/sign_in', user)
    return response.data
}
