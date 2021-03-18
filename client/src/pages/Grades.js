import AxiosContainer from '../components/AxiosContainer'
import List from '../components/List'
import useAxiosOnMount from '../hooks/useAxiosOnMount'
const Grades = (props) => {
    const { data, loading, error } = useAxiosOnMount('/api/grades')
    return (
        <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading URL, please wait'}>
            <List name='Grades'
                data={data}
            />
        </AxiosContainer>
    )
}
export default Grades