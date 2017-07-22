import styled from 'styled-components'
import { unit } from './variables'

const Spacer = styled.span`
  display: inline-block;
  margin-top: ${props => props.top * unit}px;
  margin-right: ${props => props.right * unit}px;
  margin-left: ${props => props.left * unit}px;
  margin-bottom: ${props => props.bottom * unit}px;
`

export default Spacer
