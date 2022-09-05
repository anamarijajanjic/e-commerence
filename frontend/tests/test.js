import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Footer from "./Footer";

test("Renderira se sadrzaj: ", () => {
  const komponenta = render(<Footer />);
  expect(komponenta.container).toHaveTextContent("E-TRGOVINA");
});

// test za frontend
