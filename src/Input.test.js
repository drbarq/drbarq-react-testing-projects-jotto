import React from "react";
import { findByTestAttr, checkProps } from "../test/testUtils";
import Input from "./Input";
import { shallow } from "enzyme";

/**
 * Setup function for the input component
 * @returns { ShallowWrapper }
 */

const setup = (secretWord = "party") => {
  return shallow(<Input secretWord={secretWord} />);
};

test("Input renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-input");
  expect(component.length).toBe(1);
});

test("does not throw warning with expected props", () => {
  checkProps(Input, { secretWord: "party" });
});

describe("state controlled input field", () => {
  test("state updates with value of input box upon change", () => {
    const mockSetCurrentGuess = jest.fn();
    // this is a mock to take the place of setState
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

    const wrapper = setup();
    const inputBox = findByTestAttr(wrapper, "input-box");

    // simulates typing in input box
    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });
});
