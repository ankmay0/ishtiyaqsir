import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import NavLinkWithDraw from "./NavLinkWithDraw"; // Adjust path if needed

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Research", link: "/research" },
    { name: "Teaching", link: "/teaching" },
    { name: "Curriculum Vitae", link: "/CurriculumVitae" },
    { name: "Youtube Videos", link: "/youtube" },
  ];

  const otherItems = [
    { name: "Some useful links", link: "#" },
    { name: "Personal", link: "#" },
  ];

  return (
    <nav
      className="
        sticky top-3 z-50
        mx-auto w-fit
        rounded-full
        bg-gray-500/10 backdrop-blur-md
        ring-1 ring-white/10 shadow-lg
        text-black
        border-1 border-gray-900/10
      "
    >
      <div className="flex items-center justify-center px-4 py-3">
        {/* Desktop Menu (pill centers and shrinks to content) */}
        <ul className="hidden md:flex items-center justify-center gap-6 text-xs whitespace-nowrap">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLinkWithDraw
                href={item.link}
                onClick={() => setActive(item.name)}
                className={
                  `hover:text-gray-500 transition-colors duration-200 cursor-pointer select-none text-center ` +
                  (active === item.name
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-black")
                }
              >
                {item.name}
              </NavLinkWithDraw>
            </li>
          ))}
          {/* Others Dropdown */}
          <li
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={
                `flex items-center hover:text-gray-500 transition-colors duration-200 cursor-pointer select-none ` +
                (active === "Others"
                  ? "text-blue-400 font-semibold border-b-2 border-blue-400"
                  : "text-black")
              }
              onClick={() => setActive("Others")}
            >
              Others <ChevronDown size={18} className="ml-1" />
            </button>
            {dropdownOpen && (
              <ul
                className="
                  absolute left-1/2 -translate-x-1/2 mt-2
                  w-56 rounded-lg shadow-lg py-2 z-50
                  bg-gray-900/70 backdrop-blur-md ring-1 ring-white/10
                "
              >
                {otherItems.map((item) => (
                  <li key={item.name}>
                    <NavLinkWithDraw
                      href={item.link}
                      onClick={() => setActive(item.name)}
                      className={
                        `block px-4 py-2 hover:bg-white/5 whitespace-nowrap text-center ` +
                        (active === item.name
                          ? "text-blue-400 font-semibold"
                          : "text-white")
                      }
                    >
                      {item.name}
                    </NavLinkWithDraw>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>

        {/* Mobile Menu Button (still within the pill) */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (drops below the pill; still compact) */}
      {open && (
        <ul className="md:hidden flex flex-col items-center text-center gap-3 px-4 pb-4 text-sm">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLinkWithDraw
                href={item.link}
                onClick={() => setActive(item.name)}
                className={
                  `hover:text-gray-300 transition-colors duration-200 cursor-pointer select-none ` +
                  (active === item.name
                    ? "text-blue-400 font-semibold border-b-2 border-blue-400"
                    : "text-white")
                }
              >
                {item.name}
              </NavLinkWithDraw>
            </li>
          ))}
          {/* Others Dropdown */}
          <li>
            <button
              className={
                `flex items-center justify-center w-full hover:text-gray-300 transition-colors duration-200 cursor-pointer select-none ` +
                (active === "Others"
                  ? "text-blue-400 font-semibold border-b-2 border-blue-400"
                  : "text-white")
              }
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Others <ChevronDown size={18} className="ml-1" />
            </button>
            {dropdownOpen && (
              <ul className="mt-2 flex flex-col items-center gap-2">
                {otherItems.map((item) => (
                  <li key={item.name}>
                    <NavLinkWithDraw
                      href={item.link}
                      onClick={() => setActive(item.name)}
                      className={
                        `hover:text-gray-300 whitespace-nowrap text-center ` +
                        (active === item.name
                          ? "text-blue-400 font-semibold"
                          : "text-white")
                      }
                    >
                      {item.name}
                    </NavLinkWithDraw>
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
