import { forwardRef } from "react";
import { TextInputProps } from "./TextInput.types";
import { TextInput } from "react-native";
import { theme } from "../../../utils/theme/theme";

export default forwardRef<TextInput, TextInputProps>(
  ({ style, placeholder, ...props }, ref) => {
    return (
      <TextInput
        ref={ref}
        style={[{
          backgroundColor: '#d5d4d5',
          borderRadius: 12,
          fontSize: 16,
          paddingVertical: theme.spacing.m,
          paddingHorizontal: 20
        }, style]}
        placeholder={placeholder || 'Type something...'}
        {...props}
      />
    )
  })