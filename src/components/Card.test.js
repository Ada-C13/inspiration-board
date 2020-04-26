import React from "react";
import { render, cleanup } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  test("that it matches the existing snapshot", () => {
    // Arrange-Act
    const { asFragment } = render(
      <Card
        key={1}
        id={1}
        text={"happy"}
        emoji={"dog"}
        deleteCard={() => null}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});
