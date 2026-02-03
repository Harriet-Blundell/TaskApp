import ToDoList from "@/components/ToDoList";
import { render, screen } from "@testing-library/react";

describe("ToDoList component", () => {
  const mockHandleToggleTask = jest.fn();
  const mockHandleDeleteTask = jest.fn();

  const task = {
    id: 1,
    title: "Make breakfast",
    completed: false,
    priority: "Low",
    created_at: new Date().toString(),
  };

  it("should render the ToDoList component", () => {
    render(
      <>
        <ToDoList
          handleToggleTask={mockHandleToggleTask}
          handleDeleteTask={mockHandleDeleteTask}
          tasks={[task]}
        />
      </>
    );

    expect(screen.getByText(/Make breakfast/i)).toBeInTheDocument();
  });
});
