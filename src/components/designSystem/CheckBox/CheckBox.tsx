import { StyleSheet, TouchableOpacity, View } from "react-native"
import { CheckBoxProps } from "./CheckBox.types"
import { theme } from "../../../utils/theme/theme"

export default ({ 
  value, 
  onValueChange, 
  icon, 
  disabled,
  ...props 
}: CheckBoxProps) => {
  return (
    <TouchableOpacity
      {...(onValueChange && {
        onPress: () => onValueChange(!value)
      })}
      {...{ disabled }}
    >
      <View style={[
        style.box, 
        props.style,
        disabled && {
          backgroundColor: theme.colors.secondaryLight
        }
      ]}>
        {value &&
          <View style={[
            style.checked,
            {
              backgroundColor: disabled ? theme.colors.secondaryLight : theme.colors.primary
            }
          ]}>
            {Boolean(icon) && icon}
          </View>
        }
      </View>
    </TouchableOpacity>
  )
}

const SIZE = 28

const style = StyleSheet.create({
  box: {
    padding: 2,
    borderWidth: 1,
    borderColor: '#8a8c90',
    width: SIZE,
    height: SIZE,
    borderRadius: 4
  },
  checked: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})