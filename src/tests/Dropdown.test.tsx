import Dropdown from "@/components/Dropdown";
import { render, screen, fireEvent } from "@testing-library/react";

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

  it("should render the dropdown options after clicking the button", () => {
    render(
      <Dropdown
        handleSelectedPriorityOption={mockHandleSelectedPriorityOption}
      />
    );

    const dropdownBtn = screen.getByRole("button", { name: /Open sort menu/i });

    fireEvent.click(dropdownBtn);

    expect(screen.getByText("High")).toBeInTheDocument();
    expect(screen.getByText("Medium")).toBeInTheDocument();
    expect(screen.getByText("Low")).toBeInTheDocument();
  });
});

/*

- use getByText when you expect the element TO BE there
- If it is missing, that's a test failure

- use queryByText when you expect the element NOT to be there
- Assert absence without crashing the test
- queryByText returns null

- If you're asserting presence -> getBy*
- If you're asserting absence -> queryBy*
*/
