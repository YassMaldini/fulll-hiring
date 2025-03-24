import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import TextInput from "./TextInput";
import { TextInput as RNTextInput } from "react-native";

describe("TextInput component tests", () => {
  it("renders default placeholder if none is provided", () => {
    const { getByPlaceholderText } = render(<TextInput />);
    expect(getByPlaceholderText("Type something...")).toBeTruthy();
  });

  it("renders custom placeholder", () => {
    const placeholderText = "Enter your name";
    const { getByPlaceholderText } = render(<TextInput placeholder={placeholderText} />);
    expect(getByPlaceholderText(placeholderText)).toBeTruthy();
  });

  it("handles text changes", () => {
    const handleChangeText = jest.fn();
    const { getByPlaceholderText } = render(
      <TextInput placeholder="Type something..." onChangeText={handleChangeText} />
    );
    const input = getByPlaceholderText("Type something...");
    fireEvent.changeText(input, "Test input");
    expect(handleChangeText).toHaveBeenCalledWith("Test input");
  });

  it("applies custom style", () => {
    const { getByPlaceholderText } = render(
      <TextInput placeholder="Type something..." style={{ backgroundColor: "pink" }} />
    );
    const input = getByPlaceholderText("Type something...");
    expect(input.props.style).toEqual(
      expect.arrayContaining([{ backgroundColor: "pink" }])
    );
  });

  it("forwards a ref correctly", () => {
    const inputRef = React.createRef<RNTextInput>();
    render(<TextInput ref={inputRef} />);
    expect(inputRef.current).not.toBeNull();
  });
});