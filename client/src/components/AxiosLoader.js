import useAxiosOnMount from '../hooks/useAxiosOnMount'
import ErrorMessage from './ErrorMessage'
import Spinner from './Spinner'

const AxiosLoader = (props) => {
    const {children, loading, error, fullError} = props
    
    if (loading) return <Spinner />
    if (error) return  <ErrorMessage fullError={fullError} error={error} />
    return children
}
export default AxiosLoader