import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Semoji } from "./index";

it("renders a Twitter emoji as default", () => {
  const { getByRole } = render(<Semoji emoji="💃" />);
  const img = getByRole("img");

  expect(img).toHaveAttribute(
    "src",
    "https://twemoji.maxcdn.com/v/latest/svg/1f483.svg"
  );
});

it("renders a Twitter emoji", () => {
  const { getByRole } = render(<Semoji emoji="💃" source="Twitter" />);
  const img = getByRole("img");

  expect(img).toHaveAttribute(
    "src",
    "https://twemoji.maxcdn.com/v/latest/svg/1f483.svg"
  );
});

it("renders a Twitter emoji", () => {
  const { getByRole } = render(<Semoji emoji="💃" source="GitHub" />);
  const img = getByRole("img");

  expect(img).toHaveAttribute(
    "src",
    "https://github.githubassets.com/images/icons/emoji/unicode/1f483.png?v8"
  );
});

it("renders null", () => {
  const { queryByRole } = render(<Semoji emoji="" />);
  const img = queryByRole("img");

  expect(img).not.toBeInTheDocument();
});
