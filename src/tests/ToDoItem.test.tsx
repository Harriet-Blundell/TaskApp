import ToDoItem from "@/components/ToDoItem";
import { render, screen } from "@testing-library/react";

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

  it("should toggle a task to true when the completed box is ticked", () => {});
});
