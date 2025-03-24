import { Pressable, StyleSheet, Text, View } from "react-native"
import { ButtonProps } from "./Button.types"
import { theme } from "../../../utils/theme/theme"

export default ({ 
  children, 
  color = 'primary', 
  icon,
  ...props 
}: ButtonProps) => {
  
  return (
    <Pressable 
      style={[
        style.btn,
        {
          backgroundColor: props.disabled ? theme.colors.secondaryLight : theme.colors[color]
        }
      ]}
      {...props}
    >
      {Boolean(icon) && (
        <View style={{ marginRight: theme.spacing.s }}>
          {icon}
        </View>
      )}
      <Text style={[style.text, { color: theme.colors.white }]}>{children}</Text>
    </Pressable>
  )
}


const style = StyleSheet.create({
  btn: {
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.s,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontWeight: '600',
    fontSize: 15
  }
})