// import {useState, useEffect} from 'react'
// import axios from 'axios'
import useAxiosOnMount from '../hooks/useAxiosOnMount'

const OnMountTest = () => {
    const {data, loading, error} = useAxiosOnMount('https://reqres.in/api/users?delay=3')
    
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
export default OnMountTest