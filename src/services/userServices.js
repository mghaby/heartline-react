import heartLineApi from '../config/api'


// random call for users with public = true
export default async function getRandom(){
    const response = await heartLineApi.get('/api/users/random')
    return response.data
};

// show all user
// export async function getUser() {
//     const response = await heartLineApi.get('/api/users')
//     return response.data
// };

// show user with id
// might need to change to username instead of id
export async function getUser(id) {
    const response = await heartLineApi.get(`api/users/${id}`)
    return response.data
};