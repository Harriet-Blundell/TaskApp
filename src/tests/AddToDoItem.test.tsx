import { render, screen, fireEvent } from "@testing-library/react";
import AddToDoItem from "../components/AddToDoItem";

describe("AddToDoItem Component", () => {
  const mockHandleAddTask = jest.fn();

  it("should render the AddToDoItem component", () => {
    render(<AddToDoItem handleAddTask={mockHandleAddTask} />);
    expect(
      screen.getByPlaceholderText("What do you need to do?")
    ).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Add task/i })
    ).toBeInTheDocument();
  });

  it("should show the input field as required when a user does not enter any text and clicks the 'Add task' button", () => {
    render(<AddToDoItem handleAddTask={mockHandleAddTask} />);
    const inputElement = screen.getByRole("textbox");
    const addTaskButton = screen.getByRole("button", { name: /Add task/i });
    fireEvent.click(addTaskButton);
    expect(inputElement).toBeInvalid();
  });

  it("should call handleAddTask when a new task is added", () => {
    render(<AddToDoItem handleAddTask={mockHandleAddTask} />);
    const inputElement = screen.getByRole("textbox");
    const addTaskButton = screen.getByRole("button", { name: /Add task/i });

    fireEvent.change(inputElement, { target: { value: "New Task" } });
    fireEvent.click(addTaskButton)

    expect(mockHandleAddTask).toHaveBeenCalledTimes(1);
  });
});
