import { TableHeaders } from "@/components/TableHeaders";
import { render, screen } from "@testing-library/react";

describe("TableHeaders Component", () => {
  it("should render the TableHeaders component", () => {
    render(<TableHeaders />);
    expect(screen.getByText("Delete")).toBeInTheDocument();
    expect(screen.getByText("Task")).toBeInTheDocument();
    expect(screen.getByText("Priority")).toBeInTheDocument();
    expect(screen.getByText("Done")).toBeInTheDocument();
  });

  it("renders responsive priority labels", () => {
    render(<TableHeaders />);

    const shortLabel = screen.getByText("P");
    const longLabel = screen.getByText("Priority");

    expect(shortLabel).toHaveClass("inline sm:hidden");
    expect(longLabel).toHaveClass("hidden sm:inline");
  });
});
