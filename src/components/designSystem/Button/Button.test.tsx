import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Button from "./Button";
import { theme } from "../../../utils/theme/theme";
import Icon from "@react-native-vector-icons/ionicons";

describe("Button Component", () => {
  it("renders correctly with children", () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText("Click me")).toBeTruthy();
  });

  it("applies the correct background color based on the color prop", () => {
    const { getByTestId } = render(
      <Button color="secondary" testID="button">Click me</Button>
    );
    expect(getByTestId("button").props.style[1].backgroundColor).toBe(
      theme.colors.secondary
    );
  });

  it("applies disabled styling when disabled", () => {
    const { getByTestId } = render(
      <Button disabled testID="button">Click me</Button>
    );
    expect(getByTestId("button").props.style[1].backgroundColor).toBe(
      theme.colors.secondaryLight
    );
  });

  it("renders an icon when provided", () => {
    const icon = <Icon testID="icon" name="checkmark" size={18} color="#fff" />;
    const { getByTestId } = render(<Button icon={icon}>Search</Button>);
    expect(getByTestId("icon")).toBeTruthy();
  });

  it("calls the onPress function when pressed", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Button onPress={onPressMock} testID="button">Press</Button>
    );
    fireEvent.press(getByTestId("button"));
    expect(onPressMock).toHaveBeenCalled();
  });
});
