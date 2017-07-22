import React from 'react'
import componentStories from './component-stories'
import { number } from '@storybook/addon-knobs'
import Spacer from '../src/spacer'

componentStories.add('Spacer', () => {
  const top = number('top', 1)
  const right = number('right', 1)
  const left = number('left', 1)
  const bottom = number('bottom', 1)
  return <Spacer top={top} right={right} left={left} bottom={left} />
})
