import client from '../api/api-client'



// REGISTER SERVICE

const register = async (formData) => {
    
    try {
    const res = await client.post('/users/register', formData)
      return res
        } catch (error) {
        console.log(error.response)
    }
}

// LOGIN SERVICE

const login = async (formData) => {
    try {
        const res = await client.post('/users/login', formData)
        return res
    } catch (error) {
        
    }
}
// LOGOUT

const logout = () => {
    localStorage.removeItem('user')
}


export {
    register, login, logout
}