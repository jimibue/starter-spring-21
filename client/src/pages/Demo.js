import {useState, useEffect} from 'react'
import axios from 'axios'
const Demo = () => {
    // state for component
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    // mount
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        try {
            let res = await axios.get('https://reqres.in/api/users?delay=3')
            setData(res.data.data ? res.data.data : res.data)
            setLoading(false)
        } catch (err) {
            alert('err')
            setError(err)
            setLoading(false)
        }
    }
    const renderData = () => {
        return data.map(d => <p>{d.id}</p> )
        // return data.map(d => <HowToRenderData {...d} />)
    }
    if (loading) return <p>Loading</p>
    if (error) return <p>Error occurred</p>
    return (
        <div>
            <h1>Home</h1>
            <div>
                <header>datas</header>
                {renderData()}
            </div>
        </div>
    )
}
export default Demo