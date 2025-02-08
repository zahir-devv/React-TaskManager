import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
const CreateTask = () => {
  const data = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  const [dueDate, setDueDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newtask = {
      title: taskTitle,
      description: description,
      date: dueDate,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    const employee = data.employees.find((emp) => emp.firstName == assignedTo);
    if (employee) {
      employee.tasks.push(newtask);
      employee.taskStats.active += 1;

      localStorage.setItem("employees", JSON.stringify(data.employees));

      setAssignedTo("");
      
      setDescription("");
      setDueDate("");
      setTaskTitle("");
    } else {
      alert("please write valid user");
    }
  };

  return (
    <div>
      <div className="mt-6">
        <form
          className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 bg-white p-8 rounded-lg shadow-lg w-full"
          onSubmit={handleSubmit}
        >
          {/* First Box: Input Fields */}
          <div className="flex flex-col space-y-4 w-full md:w-1/2">
            <input
              required
              type="text"
              placeholder="Task Title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 w-full"
            />
            <input
              required
              type="text"
              placeholder="Assign to"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 w-full"
            />
            
            <input
              required
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 w-full"
            />
          </div>

          {/* Second Box: Description and Submit Button */}
          <div className="flex flex-col space-y-4 w-full md:w-1/2">
            <textarea
              required
              name="description"
              rows="6"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 w-full"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500 transition-colors w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
