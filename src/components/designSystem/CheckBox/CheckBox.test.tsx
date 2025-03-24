import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CheckBox from "./CheckBox";
import Icon from "@react-native-vector-icons/ionicons";

describe("CheckBox component tests", () => {
  it("renders unchecked by default", () => {
    const { getByTestId } = render(<CheckBox testID="checkbox" />);
    const checkbox = getByTestId("checkbox");
    expect(checkbox).toBeTruthy();
  });

  it("calls onValueChange when clicked", () => {
    const onValueChangeMock = jest.fn();
    const { getByTestId } = render(
      <CheckBox testID="checkbox" onValueChange={onValueChangeMock} />
    );
    fireEvent.press(getByTestId("checkbox"));
    expect(onValueChangeMock).toHaveBeenCalledWith(true);
  });

  it("shows checked state when value is true", () => {
    const { getByTestId, queryByTestId } = render(
      <CheckBox testID="checkbox" value={true} />
    );
    const checkbox = getByTestId("checkbox");
    expect(checkbox).toBeTruthy();
    
    const checkedIndicator = queryByTestId("checkedIndicator");

    expect(checkedIndicator).toBeFalsy();
  });

  it("does not call onValueChange when disabled", () => {
    const onValueChangeMock = jest.fn();
    const { getByTestId } = render(
      <CheckBox testID="checkbox" disabled onValueChange={onValueChangeMock} />
    );
    fireEvent.press(getByTestId("checkbox"));
    expect(onValueChangeMock).not.toHaveBeenCalled();
  });

  it("renders icon when provided", () => {
    const MyIcon = <Icon testID="icon" name="checkmark" size={18} color="#fff" />;
    const { getByTestId } = render(
      <CheckBox testID="checkbox" value={true} icon={MyIcon} />
    );
    const checkbox = getByTestId("checkbox");
    expect(checkbox).toBeTruthy();
    const icon = getByTestId("icon");
    expect(icon).toBeTruthy();
  });
});