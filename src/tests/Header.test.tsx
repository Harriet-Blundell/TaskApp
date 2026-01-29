import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header Component", () => {
  it("should render the header component", () => {
    render(
      <Header
        numOfTasks={0}
        numOfCompletedTasks={0}
        tasks={[]}
        onSortedTasksChange={() => {}}
      />
    );
    expect(screen.getByText("To Do List")).toBeInTheDocument();
  });

  it("should display the correct number of tasks and completed tasks", () => {
    render(
      <Header
        numOfTasks={3}
        numOfCompletedTasks={2}
        tasks={[
          {
            id: 1,
            title: "Complete project",
            completed: true,
            priority: "High",
            created_at: new Date().toString(),
          },
          {
            id: 2,
            title: "Read book",
            completed: false,
            priority: "Low",
            created_at: new Date().toString(),
          },
          {
            id: 3,
            title: "Grocery shopping",
            completed: true,
            priority: "Medium",
            created_at: new Date().toString(),
          },
        ]}
        onSortedTasksChange={() => {}}
      />
    );
    expect(screen.getByText("3 tasks · 2 completed")).toBeInTheDocument();
  });
});
