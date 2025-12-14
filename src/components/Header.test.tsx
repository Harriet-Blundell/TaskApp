import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header Component", () => {
  it("should render the header component", () => {
    render(<Header />);
    expect(screen.getByText("To Do List:")).toBeInTheDocument();
  });
});
