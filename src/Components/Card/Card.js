import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="w-full p-3 rounded border shadow-md bg-white mb-4 cursor-pointer">
        <div className="flex items-center justify-between">
          <div className="text-gray-700 font-semibold">
            {props.cardDetails.id}
          </div>
          <div className="flex items-center">
            <div className="h-4 w-4 flex items-center justify-center bg-orange-500 rounded-full">
              <div className="uppercase text-xs text-white flex justify-center translate-x-1">
                {props.cardDetails.userObj.name.slice(0, 1)}
              </div>
              <div
                className={`h-2 w-2 border-[1px] border-white rounded-full translate-x-1 translate-y-1 ${
                  props.cardDetails.userObj.available
                    ? "bg-green-500"
                    : "bg-yellow-500"
                }`}
              ></div>
            </div>
          </div>
        </div>

        <div className="items-center mt-2 justify-between ">
          {props.cardDetails.priority === 0 && (
            <div className="h-5 w-5 rounded-full mr-2 bg-blue-500"></div>
          )}
          {props.cardDetails.priority === 1 && (
            <div className="h-5 w-5 rounded-full mr-2 bg-yellow-500"></div>
          )}
          {props.cardDetails.priority === 2 && (
            <div className="h-5 w-5 rounded-full mr-2 bg-purple-500"></div>
          )}
          {props.cardDetails.priority === 3 && (
            <div className="h-5 w-5 rounded-full mr-2 bg-red-500"></div>
          )}
          {props.cardDetails.priority === 4 && (
            <div className="h-5 w-5 rounded-full mr-2 bg-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 16 16"
              >
                <path
                  fill="red"
                  d="M5.96 4.457a2.075 2.075 0 1 1 4.08 0l-.856 4.56a1.205 1.205 0 0 1-2.368 0l-.855-4.56ZM9.5 12.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"
                ></path>
              </svg>
            </div>
          )}
          <div className="text-[1rem] text-black my-2">
            {props.cardDetails.title}
          </div>
        </div>
        {props.cardDetails.tag.map((tag, index) => (
          <div
            key={index}
            className=" w-fit border rounded border-gray-200 px-2  flex justify-between items-center"
          >
            <div className="h-2 w-2 bg-gray-600 rounded-full mx-2"></div>
            <div className="text-xs font-semibold text-gray-400">{tag}</div>
          </div>
        ))}
      </div>
    </>
  );
}
