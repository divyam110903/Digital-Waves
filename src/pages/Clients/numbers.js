import React from "react";

function Numbers() {
  return (
    <div className="mt-20 px-52">
        <h1 className="text-xl font-semibold text-gray-500">Untill today we have...</h1>
        <br/>
      <div className="flex justify-between p-5 space-x-10 rounded bg-secondary">
        <div className="flex flex-col space-y-2">
          <h1 className="text-white text-9xl">152</h1>
          <h1 className="text-2xl text-white">Clients</h1>
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="text-white text-9xl">485</h1>
          <h1 className="text-2xl text-white">Projects</h1>
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="text-white text-9xl">24</h1>
          <h1 className="text-2xl text-white">Locations</h1>
        </div>
      </div>
    </div>
  );
}

export default Numbers;