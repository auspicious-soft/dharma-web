import React from "react";
import FooterLogo from "@/assets/footer-logo.png";
import SocialIcons from "./SocialIcons";
import { NavLink } from "react-router-dom";

export default function FooterMenu() {
  const companyLinks = [
    { title: "About Us", href: "#" },
    { title: "Contact Us", href: "#" },
    { title: "Corporate Trainings", href: "/corporate-training" },
    { title: "Company", href: "#" },  
  ];

  const links = [
    { title: "Book appointment", href: "#" },
    { title: "FAQs", href: "#" },
    { title: "Our Current Promotions", href: "#" },
    { title: "Refer & Earn", href: "#" },
    { title: "Terms of Service", href: "#" },
    { title: "Privacy Policy", href: "#" },
    { title: "Refund Policy", href: "#" },
  ];

  const resources = [
    { title: "Blogs", href: "#" },
    { title: "Podcasts", href: "#" },
    { title: "Webinars", href: "#" },
    { title: "Mobile App", href: "#" },
  ];

  const examPrep = [
    { title: "PMP", href: "#" },
    { title: "PgMP", href: "#" },
    { title: "PfMP", href: "#" },
    { title: "PMOCP", href: "#" },
    { title: "PMI-ACP", href: "#" },
  ];

  return (
  
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-8 lg:gap-6">
          {/* Logo and Contact Info */}
          <div className="flex flex-col gap-4">
            <img src={FooterLogo} alt="vCare Logo" className="w-[70px]" />
            
            <div className="flex flex-col gap-4">
              <p className="text-light-blue text-sm leading-relaxed">
                325 N Saint Paul Street, Suite 3100,
                <br />
                Dallas TX 75201
              </p>
              <p className="text-light-blue text-sm">
                <a 
                  href="tel:+16502830123" 
                  className="hover:text-blue-400 transition-colors no-underline"
                >
                  +1-650-283-0123
                </a>
              </p>
              <p className="text-light-blue text-sm">
                <a
                  href="mailto:team@vcareprojectmanagement.com"
                  className="hover:text-primary_blue transition-colors no-underline break-all"
                >
                  team@vcareprojectmanagement.com
                </a>
              </p>
            </div>

            <SocialIcons />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-[1fr_1fr_1fr_1fr] gap-8 lg:gap-6">
          {/* Company Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-primary_blue text-base font-medium">Company</h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.href}
                    className=" text-light-blue text-xs font-light hover:text-primary_heading transition-colors no-underline"
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
              <h3 className="text-primary_blue text-base font-medium">Links</h3>
            <ul className="flex flex-col gap-3">
              {links.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.href}
                     className=" text-light-blue text-xs font-light hover:text-primary_heading transition-colors no-underline"
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4">
              <h3 className="text-primary_blue text-base font-medium">Resources</h3>
            <ul className="flex flex-col gap-3">
              {resources.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.href}
                      className=" text-light-blue text-xs font-light hover:text-primary_heading transition-colors no-underline"
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Exam Prep Training */}
          <div className="flex flex-col gap-4">
             <h3 className="text-primary_blue text-base font-medium">Exam Prep Training</h3>
            <ul className="flex flex-col gap-3">
              {examPrep.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.href}
                     className=" text-light-blue text-xs font-light hover:text-primary_heading transition-colors no-underline"
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
  );
}