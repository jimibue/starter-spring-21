import styled from 'styled-components'
import { PADDING, PRIMARY_COLOR } from '../styles'
import Button from './Button'

const ButtonGroup = styled.div`
  display:flex;
  justify-content: flex-start;
  padding: ${PADDING};
//   border: 2px solid ${PRIMARY_COLOR};
  ${'button'} {
    margin-right: 10px;
  }
`

export default ButtonGroup