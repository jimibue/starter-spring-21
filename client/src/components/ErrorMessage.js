import FormattedMessage from "./FormattedMessage"

const ErrorMessage = (props) =>{
    const {error,fullError} = props
    console.log(error)
    return (
        <FormattedMessage type='alert'>
        {!fullError && <pre>{JSON.stringify(error.message, null, 1)}</pre>}
        {fullError && <pre>{JSON.stringify(error, null, 1)}</pre>}
        </FormattedMessage>
    )
} 
export default ErrorMessage