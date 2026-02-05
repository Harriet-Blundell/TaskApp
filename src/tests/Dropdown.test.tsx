import Dropdown from "@/components/Dropdown";
import { render, screen } from "@testing-library/react";

describe("Dropdown component", () => {
  const mockHandleSelectedPriorityOption = jest.fn();
  it("should render the Dropdown component closed by default", () => {
    render(
      <Dropdown
        handleSelectedPriorityOption={mockHandleSelectedPriorityOption}
      />
    );

    const dropdownBtn = screen.getByRole("button", { name: /Open sort menu/i });

    expect(dropdownBtn).toBeInTheDocument();
    expect(screen.queryByText("High")).not.toBeInTheDocument();
    expect(screen.queryByText("Medium")).not.toBeInTheDocument();
    expect(screen.queryByText("Low")).not.toBeInTheDocument();
  });
});

/*

- use getByText when you EXPECTED THE ELEMENT to be there
- If it is missing, that's a test failure

*/
