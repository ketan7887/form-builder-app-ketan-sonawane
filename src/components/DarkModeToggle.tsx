import React, { useEffect, useState } from "react";

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Apply dark mode class to the HTML root element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="flex items-center justify-end mb-2 p-3">
      <label
        htmlFor="dark-mode-toggle"
        className="flex items-center cursor-pointer"
      >
        {/* Label for light/dark text */}
        <span className="text-gray-700 dark:text-gray-300 mr-2">
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </span>

        {/* Toggle Switch */}
        <div className="relative">
          <input
            type="checkbox"
            id="dark-mode-toggle"
            checked={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)}
            className="sr-only"
          />
          <div className="w-10 h-4 bg-gray-300 dark:bg-gray-600 rounded-full shadow-inner transition-all"></div>
          <div
            className={`absolute w-6 h-6 -top-1 bg-white dark:bg-gray-200 rounded-full shadow-md transition-transform duration-300 ${
              isDarkMode ? "translate-x-4" : "translate-x-0"
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default DarkModeToggle;
