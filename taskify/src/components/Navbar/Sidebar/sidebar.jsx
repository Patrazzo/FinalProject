import React from "react";
import "flowbite";
import { useState } from 'react';
import { ListTab } from "../../List/listTab";

function Sidebar() {
  const [listCount, setListCount] = useState(0); 
  const addNewListTab = () => {
    setListCount(prevCount => prevCount + 1);
  };

  return (
    <>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-16 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        {/*| Sidebar list |*/}
        <div className="h-full pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          {/*| Sidebar list items |*/}
          <ul className="flex justify-center flex-col space-y-2 font-medium">
            <li className="sticky top-0 w-full">
              <a
                href="#"
                className="flex items-center py-3 px-5 text-gray-900 rounded-none dark:text-white bg-gray-800 dark:hover:bg-gray-700 group"
                onClick={addNewListTab}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">New List</span>
              </a>
            </li>

            {[...Array(listCount)].map((_, index) => (
              <ListTab key={index} />
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
