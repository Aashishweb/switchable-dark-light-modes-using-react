export default function SectionaMain(props) {
  return (
    // Main Section
    <main
      // toggle dark mode
      className={`${props.darkMode ? "bg-light-black" : "bg-white"}  ${
        props.darkMode ? "bg-dark-img" : "bg-img"
      }  h-screen   ${props.darkMode ? "text-white" : "text-light-black"} `}
    >
      {/* main content */}
      <h1 className="text-4xl sm:p-12 p-6 font-bold ">Fun facts about React</h1>
      <ul className=" sm:px-20 px-10 list-disc list-inside marker:text-regal-blue">
        <li className="p-3">Was first released in 2013</li>
        <li className="p-3">Was originally created by Jordan Walke</li>
        <li className="p-3">Has well over 100K stars on GitHub</li>
        <li className="p-3">Is maintained by Facebook</li>
        <li className="p-3">
          Powers thousands of enterprise apps, including mobile apps
        </li>
      </ul>
    </main>
  );
}
