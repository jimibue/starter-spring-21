import {useState} from 'react'
import { PADDING_EVEN } from '../styles'
import CardContainer from './CardContainer'
import Fade from './Fade'

const Card = (props) => {
    const [showBody, setShowBody] = useState(false)
    const {header, children} = props
    return (
        <CardContainer>
            <header style={{marginBottom: showBody ? PADDING_EVEN : '0px', display:'flex', justifyContent:'space-between'}}>
                <h3>{header}</h3>
                <p onClick={() =>setShowBody(!showBody)}>toggle</p>
            </header>
            <Fade hide={showBody}>
             {children}
            </Fade>
        </CardContainer>
    )
}

export default Card