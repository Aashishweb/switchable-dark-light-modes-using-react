export default function Nav(props) {
  return (
    // Navbar
    <div
      className={`${
        props.darkMode ? "dark" : "light"
      }  flex flex-row justify-between py-6 px-5 shadow-lg `}
    >
      <div className="flex flex-row ">
        <img className="w-18 h-10 text-center" src="/assets/react.svg"></img>
        <span className="text-regal-blue text-2xl ml-1 sm:ml-10 font-bold text-center">
          ReactFacts
        </span>
      </div>
      {/* Light & Dark mode toggle button */}
      <div className=" flex flex-col justify-center   overflow-hidden">
        <div className="flex">
          <span className="mr-4 text-center text-sm font-medium ">Light</span>
          <label className="inline-flex relative items-center mr-5 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={props.darkMode}
              readOnly
            />
            <div
              onClick={props.toggleDarkMode}
              className="w-11 h-6 bg-gray-800 rounded-full peer  peer-focus:ring-white  peer-checked:after:translate-x-full peer-checked:after:border-gray-800 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white peer-checked:after:bg-gray-800 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all after:duration-500 peer-checked:bg-white"
            ></div>
          </label>
          <span className=" text-sm font-medium ">Dark</span>
        </div>
      </div>
    </div>
  );
}
