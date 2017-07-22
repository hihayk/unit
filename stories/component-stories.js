import { storiesOf, setAddon } from '@storybook/react'
import { withKnobs, select, text } from '@storybook/addon-knobs'
import JSXAddon from 'storybook-addon-jsx'
setAddon(JSXAddon)

const componentStories = storiesOf('Components', module)

componentStories.addDecorator(withKnobs)

export default componentStories
