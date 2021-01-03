# Getting Started with Create React App

This is a playground to learn React Unit testing with Enzyme

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Enzyme test example
```
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
```
