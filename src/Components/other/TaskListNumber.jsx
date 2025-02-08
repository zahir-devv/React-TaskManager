import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <div>
      <div className="mt-5 p-6 flex justify-between items-center  bg-gray-100 overflow-auto">
        {/* Box 1 */}
        <div className="w-[22%] p-6 bg-green-500 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-white">
            {data.taskStats.completed}
          </h2>
          <p className="text-lg text-white">Completed</p>
        </div>

        {/* Box 2 */}
        <div className="w-[22%] p-6 bg-blue-500 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-white">
            {data.taskStats.new}
          </h2>
          <p className="text-lg text-white">New Task</p>
        </div>

        {/* Box 3 */}
        <div className="w-[22%] p-6 bg-yellow-500 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-white">
            {data.taskStats.active}
          </h2>
          <p className="text-lg text-white">Active Task</p>
        </div>

        {/* Box 4 */}
        <div className="w-[22%] p-6 bg-red-500 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-white">
            {data.taskStats.failed}
          </h2>
          <p className="text-lg text-white">Failed Task</p>
        </div>
      </div>
    </div>
  );
};

export default TaskListNumber;
