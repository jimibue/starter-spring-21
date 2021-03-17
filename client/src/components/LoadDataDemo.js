import useAxios from 'axios-hooks'
import Button from './Button'
import ErrorMessage from './ErrorMessage'
import Fade from './Fade'
import Spinner from './Spinner'

function LoadDataDemo(props) {
  let url = props.err ? 'https://reqres.in/ap/users?delay=1':  'https://reqres.in/api/users?delay=1'
  const [{ data, loading, error }, refetch] = useAxios(url)

  if (loading) return <Button loading></Button>
  if (error) return <ErrorMessage fullError={props.fullErr} error={error} />

  return (
    <div>
      <Button onClick={refetch}>refetch</Button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default LoadDataDemo
