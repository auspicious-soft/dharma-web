import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
      { label: "PMP Real Practice Exam", href: "/pmp/pmp-real-practice-exam" },
      { label: "PMP Domains and Tasks", href: "/pmp/pmp-domains-and-tasks" },
      {
        label: "PMP Application Support",
        href: "/pmp/pmp-application-support",
      },
      { label: "PMP Flashcards", href: "/pmp/pmp-flash-cards" },
    ],
  },
  {
    label: "PgMP",
    dropdown: [
       { label: "PgMP Exam Prep Course ", href: "/pgmp/pgmp-exam-prep-course" },
      { label: "PgMP On Demand Course", href: "/pgmp/pgmp-on-demand-course" },
      { label: "PgMP Exam Simulator", href: "/pgmp/pgmp-exam-simulator" },
      { label: "PgMP Real Practice Exam", href: "/pgmp/pgmp-real-practice-exam" },
      { label: "PgMP Domains and Tasks", href: "/pgmp/pgmp-domains-and-tasks" },
      {
        label: "PgMP Application Support",
        href: "/pgmp/pgmp-application-support",
      },
      { label: "PgMP Flashcards", href: "/pgmp/pgmp-flash-cards" }
    ],
  },
  {
    label: "PfMP",
    dropdown: [
      { label: "PfMP Exam Prep Course ", href: "/pfmp/pfmp-exam-prep-course" },
      { label: "PfMP On Demand Course", href: "/pfmp/pfmp-on-demand-course" },
      { label: "PfMP Exam Simulator", href: "/pfmp/pfmp-exam-simulator" },
      { label: "PfMP Real Practice Exam", href: "/pfmp/pfmp-real-practice-exam" },
      { label: "PfMP Domains and Tasks", href: "/pfmp/pfmp-domains-and-tasks" },
      {
        label: "PfMP Application Support",
        href: "/pfmp/pfmp-application-support",
      },
      { label: "PfMP Flashcards", href: "/pfmp/pfmp-flash-cards" }
    ],
  },
  {
    label: "PMOCP",
    dropdown: [
      { label: "PMOCP Exam Prep Course ", href: "/pmocp/pmocp-exam-prep-course" },
      { label: "PMOCP On Demand Course", href: "/pmocp/pmocp-on-demand-course" },
      { label: "PMOCP Exam Simulator", href: "/pmocp/pmocp-exam-simulator" },
      { label: "PMOCP Real Practice Exam", href: "/pmocp/pmocp-real-practice-exam" },
      { label: "PMOCP Domains and Tasks", href: "/pmocp/pmocp-domains-and-tasks" },
      {
        label: "PMOCP Application Support",
        href: "/pmocp/pmocp-application-support",
      },
      { label: "PMOCP Flashcards ", href: "/pmocp/pmocp-flash-cards" },
    ],
  },
  {
    label: "PMI-ACP",
    dropdown: [
      { label: "PMI-ACP Exam Prep Course ", href: "/pmi-acp/pmi-acp-exam-prep-course" },
      { label: "PMI-ACP On Demand Course", href: "/pmi-acp/pmi-acp-on-demand-course" },
      { label: "PMI-ACP Exam Simulator", href: "/pmi-acp/pmi-acp-exam-simulator" },
      { label: "PMI-ACP Real Practice Exam", href: "/pmi-acp/pmi-acp-real-practice-exam" },
      { label: "PMI-ACP Domains and Tasks", href: "/pmi-acp/pmi-acp-domains-and-tasks" },
      {
        label: "PMI-ACP Application Support",
        href: "/pmi-acp/pmi-acp-application-support",
      },
      { label: "PMI-ACP Flashcards ", href: "/pmi-acp/pmi-acp-flash-cards" },
    ],
  },
  {
    label: "Exam Simulators",
    href: "/exam-simulators",
  },
  {
    label: "PDUs",
    href: "/pdus",
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
    href: "/corporate-training",
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
            <NavLink
              to={item.href}
              className={({ isActive }) =>
                `px-1 py-4 text-sm transition-colors inline-block ${
                  isActive
                    ? "text-paragraph hover:text-primary_heading"
                    : "text-paragraph hover:text-primary_heading"
                }`
              }
            >
              {item.label}
            </NavLink>
          )}

          {item.dropdown && (
            <div className="relative">
              <button className="px-1 py-4 text-paragraph text-sm hover:text-primary_heading flex items-center gap-1 transition-colors">
                {item.label}
                <ChevronDown size={16} />
              </button>

              <div className="absolute left-0 top-full bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[200px] z-50">
                {item.dropdown.map((sub) => (
                  <NavLink
                    key={sub.label}
                    to={sub.href}
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm transition-colors ${
                        isActive
                          ? "text-paragraph hover:text-primary_heading"
                          : "text-paragraph hover:text-primary_heading"
                      }`
                    }
                  >
                    {sub.label}
                  </NavLink>
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
