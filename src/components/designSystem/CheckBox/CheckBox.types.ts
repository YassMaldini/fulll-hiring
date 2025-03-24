import { ViewProps } from "react-native";
import { JSX } from "react";

export interface CheckBoxProps extends ViewProps {
  value?: boolean;
  onValueChange?: (value: boolean) => void;
  disabled?: boolean;
  icon?: JSX.Element;
}