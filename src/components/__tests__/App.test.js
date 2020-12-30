import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

it("displays a comment box", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);

  //look inside div for the comment box
  expect(div.innerHTML).toContain("Comment Box");

  //clean up
  ReactDOM.unmountComponentAtNode(div);
});
