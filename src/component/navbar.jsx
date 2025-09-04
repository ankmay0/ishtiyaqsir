import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [active, setActive] = useState("Home"); // <-- Track active tab

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Research", link: "#" },
    { name: "Teaching", link: "/teaching" },
    { name: "Curriculum Vitae", link: "#" },
    { name: "Youtube Videos", link: "/youtube" },
  ];

  const otherItems = [
    { name: "Some useful links", link: "/SomeUsefulLinks" },
    { name: "Personal", link: "#" },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="w-full flex items-center justify-between px-6 py-4">
        <a href="#" className="text-2xl font-bold">Ishtiyaq</a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg items-center ml-auto">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                onClick={() => setActive(item.name)}
                className={`hover:text-gray-300 ${
                  active === item.name
                    ? "text-blue-400 font-semibold border-b-2 border-blue-400"
                    : ""
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}

          {/* Others Dropdown */}
          <li
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={`flex items-center hover:text-gray-300 ${
                active === "Others"
                  ? "text-blue-400 font-semibold border-b-2 border-blue-400"
                  : ""
              }`}
              onClick={() => setActive("Others")}
            >
              Others <ChevronDown size={18} className="ml-1" />
            </button>
            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-lg py-2">
                {otherItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      onClick={() => setActive(item.name)}
                      className={`block px-4 py-2 hover:bg-gray-700 whitespace-nowrap ${
                        active === item.name
                          ? "text-blue-400 font-semibold"
                          : ""
                      }`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col space-y-4 px-6 pb-6 text-lg ml-auto">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                onClick={() => setActive(item.name)}
                className={`hover:text-gray-300 ${
                  active === item.name
                    ? "text-blue-400 font-semibold border-b-2 border-blue-400"
                    : ""
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}

          {/* Mobile Dropdown */}
          <li>
            <button
              className={`flex items-center justify-between w-full hover:text-gray-300 ${
                active === "Others"
                  ? "text-blue-400 font-semibold border-b-2 border-blue-400"
                  : ""
              }`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Others <ChevronDown size={18} />
            </button>
            {dropdownOpen && (
              <ul className="mt-2 ml-4 flex flex-col space-y-2">
                {otherItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      onClick={() => setActive(item.name)}
                      className={`hover:text-gray-300 whitespace-nowrap ${
                        active === item.name
                          ? "text-blue-400 font-semibold"
                          : ""
                      }`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
}
