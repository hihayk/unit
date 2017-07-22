import styled, { css } from 'styled-components'
import { unit } from './variables'

const FONT_STYLES = {
  size0: css`
    font-size: 14px;
    line-height: ${3 * unit}px;
  `,
  size1: css`
    font-size: 24px;
    line-height: ${4 * unit}px;
  `,
  size2: css`
    font-size: 32px;
    line-height: ${5 * unit}px;
  `,
  size3: css`
    font-size: 40px;
    line-height: ${6 * unit}px;
  `
}

const Text = styled.span`
  ${props => FONT_STYLES[props.size]}
`

export default Text
