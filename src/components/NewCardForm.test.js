import React from "react";
import { render, cleanup } from "@testing-library/react";
import NewCardForm from "./NewCardForm";

describe("NewCardForm", () => {
  test("that it matches the existing snapshot", () => {
    // Arrange-Act
    const text = "hello";
    const { asFragment } = render(<NewCardForm newCardInfo={{ text }} />);

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});
