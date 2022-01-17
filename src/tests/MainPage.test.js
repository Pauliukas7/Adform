import { React } from "react";
import { render, screen } from "@testing-library/react";
import MainPage from "../components/MainPage";

test("renders MainPage", () => {
  render(<MainPage />);
  const mainPage = screen.getByText("name", { exact: false });
  expect(mainPage).toBeInTheDocument();
});
