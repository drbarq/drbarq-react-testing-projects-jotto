import React from "react";
import Enzye, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adaper-react-16";

import Congrats from "./Congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });
