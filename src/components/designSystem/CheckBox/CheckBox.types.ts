import { ViewProps } from "react-native";
import Icon from '@react-native-vector-icons/ionicons';
import { IconProps } from "@react-native-vector-icons/common";
import { FC, JSX } from "react";

export interface CheckBoxProps extends ViewProps {
  value?: boolean;
  onValueChange?: (value: boolean) => void;
  disabled?: boolean;
  icon?: JSX.Element;
}