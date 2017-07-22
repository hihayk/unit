import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import Text from '../src/text'

const stories = storiesOf('All Components Demo', module)

stories.addDecorator(withKnobs).addWithPropsCombinations('demo', Text, {
  size: ['size0', 'size1', 'size2', 'size3'],
  children: ['Hello']
})
