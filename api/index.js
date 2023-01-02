import axios from 'axios';

const params={
    headers:{
        Authorization:"bearer "+process.env.API_KEY
    }
};

export const fetchdata=async(url)=>{
    try {
        const {data}=await axios.get(process.env.DEFAULT_API_URL+url,params)
        return data;
    } catch (error) {
        console.log(error)
        return error;
    }
}