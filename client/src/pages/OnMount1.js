import AxiosLoader from '../components/AxiosLoader'
import useAxiosOnMount from '../hooks/useAxiosOnMount'

const OnMount1 = () => {
    const {data, loading, error} = useAxiosOnMount('https://reqres.in/ap1/users?delay=3')
    
    const renderData = () => {
        return data.map(d => <p>{d.id}</p> )
        // return data.map(d => <HowToRenderData {...d} />)
    }
    return (
        <AxiosLoader loading={loading} error={error} fullError>
            <h1>Home ONMOUNT1</h1>
            <div>
                <header>datas</header>
                {data && renderData()}
            </div>
        </AxiosLoader>
    )
}
export default OnMount1