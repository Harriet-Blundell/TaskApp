import ToDoItem from "@/components/ToDoItem";
import { render, screen, fireEvent } from "@testing-library/react";

describe("ToDoItem Component", () => {
  const mockHandleToggleTask = jest.fn();
  const mockHandleDeleteTask = jest.fn();

  const task = {
    id: 1,
    title: "Make breakfast",
    completed: false,
    priority: "Low",
    created_at: new Date().toString(),
  };

  beforeEach(() => jest.clearAllMocks());

  it("renders thet ToDoItem component", () => {
    render(
      <ToDoItem
        task={task}
        handleToggleTask={mockHandleToggleTask}
        handleDeleteTask={mockHandleDeleteTask}
      />
    );

    expect(screen.getByText(/Make breakfast/i)).toBeInTheDocument();
    expect(screen.getByText(/Low/i)).toBeInTheDocument();
  });

  it("calls handleToggleTask with the task id when the checkbox is clicked/changed", () => {
    render(
      <ToDoItem
        task={task}
        handleToggleTask={mockHandleToggleTask}
        handleDeleteTask={mockHandleDeleteTask}
      />
    );

    const checkbox = screen.getByRole("checkbox");
    const checkboxAriaLabel = screen.getByRole("checkbox", {
      name: /Mark Make breakfast as complete/i,
    });
    fireEvent.click(checkbox);

    expect(mockHandleToggleTask).toHaveBeenCalledTimes(1);
    expect(mockHandleToggleTask).toHaveBeenCalledWith(task.id);
    expect(checkboxAriaLabel).toBeInTheDocument();
  });

  it("calls handleDeleteTask with the task id when the button is clicked", () => {
    render(
      <ToDoItem
        task={task}
        handleToggleTask={mockHandleToggleTask}
        handleDeleteTask={mockHandleDeleteTask}
      />
    );

    const deleteButton = screen.getByRole("button", {
      name: /Mark Make breakfast as deleted/i,
    });

    fireEvent.click(deleteButton);

    expect(mockHandleDeleteTask).toHaveBeenCalledTimes(1);
    expect(mockHandleDeleteTask).toHaveBeenCalledWith(task.id);
    expect(deleteButton).toBeInTheDocument();
  });
});

/*
 	•	child test → assert callback fired
	•	parent/integration test → assert state + UI update
*/
