import React from "react";
import { shallow, mount, render } from "enzyme";
import CommentBox from "components/CommentBox";

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it("displays a text area with a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

it("has a text area that users can enter text in to", () => {
  wrapped.find("textarea").simulate("change", {
    target: { value: "New comment" },
  });
  wrapped.update();
  expect(wrapped.find("textarea").prop("value")).toEqual("New comment");
});
