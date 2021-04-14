import axios from 'axios'

export const createHall = async(token,data) => await axios.post(`${process.env.REACT_APP_API}/create-hall`,data,{
    headers:{
        Authorization: `Bearer ${token}`        
    }
})

export const allHalls = async() => await axios.get(`${process.env.REACT_APP_API}/halls`)