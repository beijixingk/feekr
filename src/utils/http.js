import axios from 'axios'
export const get = ({
    url,
    method,
})=>{
    return axios({
        url,
        method
    })
    .then((result)=>{
        return result.data
    })
    .catch((err)=>{
        return err.message
    })
}

export const post =({
    url,
    data,
    headers
})=>{
    return axios({
        url,
        data,
        method:'POST',
        headers
    })
    .then((result)=>{
        return result.data
    })
    .catch((err)=>{
        return err.message
    })
}