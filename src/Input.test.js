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
