import { PressableProps } from "react-native";
import { Theme } from "../../../utils/theme/theme";
import { JSX } from "react";

export interface ButtonProps extends PressableProps {
  children: string;
  color?: keyof Theme['colors'];
  icon?: JSX.Element;
}