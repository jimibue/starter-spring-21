import {useState, useEffect} from 'react'
import axios from 'axios'
const useAxiosOnMount = (url) => {
    // state for component
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    // mount
    useEffect(()=>{
        getData()
    },[])
    const getData = async()=>{
        try{
          let res = await axios.get(url)
            setData(res.data.data ? res.data.data : res.data)
            setLoading(false)
        } catch(err){
            setError(err)
            setLoading(false)
        }
    }
    return {data, error, loading}
}
export default useAxiosOnMount