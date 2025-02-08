import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div>
      <div className="mt-6 bg-white p-6 rounded-lg shadow-lg max-h-60 ">
        {/* List Header */}
        <div className="flex justify-between mb-4 font-bold text-lg border-b pb-2">
          <div className="w-1/3">Name</div>
          <div className="w-1/3">Task</div>
          <div className="w-1/3">Status</div>
        </div>
        <div className=" p-2 overflow-auto h-40">
          {/* List of All Task */}
          {authData.employees.map((employee) => {
            return employee.tasks.map((task, idx) => (
              <div key={idx} className="flex justify-between py-2 border-b">
                <div className="w-1/3">{employee.firstName}</div>
                <div className="w-1/3">{task.title}</div>
                <div
                  className={`w-1/3 ${
                    task.completed
                      ? "text-green-500"
                      : task.failed
                      ? "text-red-500"
                      : task.active
                      ? "text-yellow-500"
                      : "text-gray-500"
                  }`}
                >
                  {task.completed
                    ? "Completed"
                    : task.failed
                    ? "Failed"
                    : task.active
                    ? "In Progress"
                    : "Not Started"}
                </div>
              </div>
            ));
          })}
        </div>
      </div>
    </div>
  );
};

export default AllTask;
