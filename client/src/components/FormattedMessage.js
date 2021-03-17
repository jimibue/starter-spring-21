import styled from 'styled-components'
import { ALERT_BACKGROUND, ALERT_TEXT_COLOR, BORDER_RADIUS, NOTIFY_BACKGROUND, NOTIFY_TEXT_COLOR, PADDING, PADDING2_EVEN_LARGE, WARN_BACKGROUND, WARN_TEXT_COLOR } from '../styles'
import {useState} from 'react'
import Fade from './Fade'

// <FormatedMessage type='alert'
const getTextColor = (props) =>{
    if(props.type === 'alert'){
        return ALERT_TEXT_COLOR
    } else if(props.type === 'warn'){
        return WARN_TEXT_COLOR
    } else {
        return NOTIFY_TEXT_COLOR
    }
}

const getBackgroundColor = (props) =>{
    if(props.type === 'alert'){
        return ALERT_BACKGROUND
    } else if(props.type === 'warn'){
        return WARN_BACKGROUND
    } else {
        return NOTIFY_BACKGROUND
    }
}

const FormattedMessage = styled.div`
  color: ${(props) =>  getTextColor(props)};
    border: 2px solid ${(props) => !props.noBackground ? getTextColor(props) : 'white'};
    background: ${(props) => !props.noBackground ? getBackgroundColor(props) : 'white'};
    border-radius: ${BORDER_RADIUS};
    padding: ${ (props) => !props.noBackground ? PADDING2_EVEN_LARGE: '0px'};
    margin-bottom:5px;
`

export default (props) => {
    const [hide, setHide] = useState(false)
    return (
        <Fade hide={hide}>
            <FormattedMessage {...props} >
            <div style={{display:'flex', justifyContent:'space-between'}}>
                {props.children} 
                <span onClick={()=> setHide(true)}>X</span>
                </div>
            </FormattedMessage>
        </Fade>
    )
}