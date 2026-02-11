import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

type MenuItem = {
  label: string;
  href?: string;
  dropdown?: { label: string; href: string }[];
};

const menuItems: MenuItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "PMP",
    dropdown: [
      { label: "PMP Exam Prep Course ", href: "/pmp/pmp-exam-prep-course" },
      { label: "PMP On Demand Course", href: "/pmp/pmp-on-demand-course" },
      { label: "PMP Exam Simulator", href: "/pmp/pmp-exam-simulator" },
      { label: "PMP Flash Cards", href: "/pmp/pmp-flash-cards" },
      { label: "PMP Real Practice Exam", href: "#" },
      { label: "PMP Domains and Tasks", href: "#" },
      { label: "PMP Application Support", href: "#" },
    ],
  },
  {
    label: "PgMP",
    dropdown: [{ label: "PgMP Exam Prep Course ", href: "#" }],
  },
  {
    label: "PfMP",
    dropdown: [{ label: "PfMP Exam Prep Course ", href: "#" }],
  },
  {
    label: "PMOCP",
    dropdown: [{ label: "PMOCP Exam Prep Course ", href: "#" }],
  },
    {
    label: "PMI-ACP",
    dropdown: [{ label: "PMI-ACP Exam Prep Course ", href: "#" }],
  },
  {
    label: "Exam Simulators",
    href: "#",
  },
    {
    label: "PDUs",
    href: "#",
  },
  {
    label: "Other Certification",
    dropdown: [
      { label: "Other Certification", href: "" },
      { label: "Yearly", href: "#" },
    ],
  }, 
    {
    label: "Corporate Training",
    href: "#",
  },
];

interface NavigationProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  isMobile = false,
  onItemClick,
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  if (isMobile) {
    return (
      <nav className="flex flex-col">
        {menuItems.map((item, index) => (
          <div key={item.label}>
            {/* Menu WITHOUT dropdown */}
            {!item.dropdown && item.href && (
              <Link
                to={item.href}
                className="flex items-center justify-between px-6 py-3 text-paragraph text-sm hover:text-primary_heading transition-colors group"
                onClick={onItemClick}
              >
                <span>{item.label}</span>
              </Link>
            )}

            {/* Menu WITH dropdown */}
            {item.dropdown && (
              <div>
                <button
                  className="w-full flex items-center justify-between px-6 py-3 text-paragraph text-sm hover:text-primary_heading transition-colors"
                  onClick={() => toggleDropdown(item.label)}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 bg-light-blue ${
                    openDropdown === item.label
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="py-2">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.href}
                        className="block px-8 py-2 text-paragraph text-xs hover:text-primary_heading transition-colors"
                        onClick={onItemClick}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Divider (except for last item) */}
            {index < menuItems.length - 1 && (
              <div className="border-b border-gray-100 " />
            )}
          </div>
        ))}
      </nav>
    );
  }

  // Desktop Navigation
  return (
    <nav className="flex-wrap flex gap-3 xl:gap-7 px-4 justify-center items-center border-[1px] border-primary_blue rounded-[20px] bg-white">
      {menuItems.map((item) => (
        <div key={item.label} className="relative group inline-block">
          {!item.dropdown && item.href && (
            <Link
              to={item.href}
              className="px-1 py-4 text-paragraph text-sm hover:text-primary_heading transition-colors inline-block"
            >
              {item.label}
            </Link>
          )}

          {item.dropdown && (
            <div className="relative">
              <button className="px-1 py-4 text-paragraph text-sm hover:text-primary_heading flex items-center gap-1 transition-colors">
                {item.label}
                <ChevronDown size={16} />
              </button>

              <div className="absolute left-0 top-full bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[200px] z-50">
                {item.dropdown.map((sub) => (
                  <Link
                    key={sub.label}
                    to={sub.href}
                    className="block px-4 py-2 text-paragraph text-sm hover:text-primary_heading  transition-colors"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
