/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure, setAddon } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import withPropsCombinations from 'react-storybook-addon-props-combinations'

const req = require.context('../stories', true, /\.story.js$/)

function loadStories () {
  req.keys().forEach(req)
}

setAddon(withPropsCombinations)
setOptions({
  downPanelInRight: true,
  sortStoriesByKind: true
})

configure(loadStories, module)
