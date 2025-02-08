import React from "react";

const TaskList = ({ data }) => {
  return (
    <div>
      {" "}
      <div className="mt-5 p-6 flex gap-5 items-center  bg-gray-100 overflow-auto">
        {data.tasks.map((task, idx) => {
          let statusColor;
          if (task.completed) {
            statusColor = "bg-green-500";
          } else if (task.failed) {
            statusColor = "bg-red-500";
          } else if (task.active) {
            statusColor = "bg-yellow-500";
          } else {
            statusColor = "bg-gray-500";
          }
          return (
            <div
              key={idx}
              className={`w-[300px] shrink-0 p-6 rounded-lg shadow-md h-[300px] ${statusColor}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="px-3 py-2 rounded bg-indigo-600 text-l font-bold text-white">
                  {task.active
                    ? "Active"
                    : task.completed
                    ? "Completed"
                    : "Failed"}
                </h3>
                <h2 className="text-white">{task.date}</h2>
              </div>
              <h2 className="mt-2 text-2xl font-bold text-white">
                {task.title}
              </h2>
              <h3 className="mt-2 text-l text-white">{task.description}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskList;
