import axios from 'axios'


export const createHall = async(token,data) => await axios.post(`${process.env.REACT_APP_API}/create-hall`,data,{
    headers:{
        Authorization: `Bearer ${token}`        
    }
})

export const allHalls = async() => await axios.get(`${process.env.REACT_APP_API}/halls`)

export const diffDays = (from,to) =>{
    const day = 24 * 60 * 60 * 1000;
    const start = new Date(from)
    const end = new Date(to);
    const diff = Math.round(Math.abs(start-end)/day);
    return diff;
}

export const sellerHalls = async(token)=> await axios.get(`${process.env.REACT_APP_API}/seller/halls`,{
    headers:{
        Authorization: `Bearer ${token}`,
    }
})


export const deleteHall = async(token,hallId) => await axios.delete(`${process.env.REACT_APP_API}/delete-hall/${hallId}`,{
    headers:{
        Authorization: `Bearer ${token}`
    }
})

export const read = async(hallId) => await axios.get(`${process.env.REACT_APP_API}/hall/${hallId}`);

export const updateHall = async(token,data,hallId) => await axios.put(`${process.env.REACT_APP_API}/update-hall/${hallId}`,data,{
    headers:{
        Authorization: `Bearer ${token}`        
    }
})