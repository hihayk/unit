import React from 'react'
import componentStories from './component-stories'
import { select, text } from '@storybook/addon-knobs'
import Text from '../src/text'

componentStories.addWithJSX('Text', () =>
  <Text size={select('size', ['size0', 'size1', 'size2', 'size3'], 'size1')}>
    {text('text', 'unit. design system')}
  </Text>
)
