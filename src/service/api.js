import axios from "axios";


const url = 'https://mern-whatsapp-server.vercel.app';

export const addUser = async (data) => {
    try {
        let response = await axios.post(`${url}/add`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling addUser API ', error);
    }
}
export const getUser = async (data) => {
    try {
        let response = await axios.get(`${url}/users`);
        return response.data;
    } catch (error) {
        console.log('Error while calling getUser API ', error);
    }
}

export const setConversation = async(data)=>{
    try{
        let response= await axios.post(`${url}/conversation/add`, data);
        return response.data;
    }catch(err){
        console.log('Error while calling add Convertion API ', err); 
    }
    }
export const getConversation = async(data)=>{
    try{
        let response = await axios.post(`${url}/conversation/get`, data);
        return response.data;
    }catch(err){
        console.log('Error while calling Get Convertion API ', err); 
    }
}
export const getMessage = async(id)=>{
    try{
        let response = await axios.get(`${url}/message/get/${id}`);
        return response.data;
    }catch(err){
        console.log('Error while calling Get Message API ', err); 
    }
}
export const newMessages = async(data)=>{
    try{
        let response = await axios.post(`${url}/message/add`, data);
        return response.data;
    }catch(err){
        console.log('Error while calling  message add API ', err); 
    }
}

