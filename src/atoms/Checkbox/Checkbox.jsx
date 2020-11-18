import React from 'react'

// 🗄 D A T A
import { theme } from '../../theme'

// 🧩 C O M P O N E N T S
import { CheckBox } from 'react-native-elements'

// ✨ M A I N   C O M P O N E N T
const Checkbox = (props) => {

  // S T Y L E S
  const styles = {
    flexGrow: 1
  }
  return (
    <CheckBox
      {...props}
      style={styles}
      checkedColor={theme.colors.primary}
      containerStyle={{
        margin: 0,
        marginLeft: 0,
        marginRight: 0,
        padding: 0,
        width: 26
      }}
    />
  )
}


export default Checkbox
