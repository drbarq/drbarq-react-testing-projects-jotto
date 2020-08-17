import React from "react";
import { findByTestAttr } from "../test/testUtils";
import Input from "./Input";
import { shallow } from "enzyme";

/**
 * Setup function for the input component
 * @returns { ShallowWrapper }
 */

const setup = () => {
  return shallow(<Input />);
};

test("Input renders without errro", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-input");
  expect(component.length).toBe(1);
});
