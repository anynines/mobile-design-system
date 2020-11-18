import React from 'react'
import { storiesOf } from '@storybook/react-native'

import Checkbox from '../Checkbox'

storiesOf('atoms/Checkbox', module).add('default', () => {
  const Wrapper = () => {
    const [isChecked, setIsChecked] = React.useState(false)
    return (
      <Checkbox
        checked={isChecked}
        onPress={() => {
          setIsChecked(!isChecked)
        }}
      />
    )
  }
  return <Wrapper />
})
