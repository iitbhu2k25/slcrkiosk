"use client";

import { useState, useEffect, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItemProps {
  href: string;
  text: string;
}

interface DropdownProps {
  label: string;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<Record<string, boolean>>>;
  type: string;
}

interface DropdownItemProps {
  href: string;
  text: string;
}

interface MobileNavItemProps {
  href: string;
  text: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

interface MobileDropdownProps {
  label: string;
  items: { href: string; text: string }[];
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<Record<string, boolean>>>;
  type: string;
}

/* Desktop Nav Item */
const NavItem: React.FC<NavItemProps> = ({ href, text }) => (
  <li>
    <Link
      href={href}
      className="relative px-3 py-1 text-gray-100 font-sans hover:text-white transition-all duration-200
                  after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white
                  after:transition-all after:duration-200 hover:after:w-full"
    >
      {text}
    </Link>
  </li>
);

/* Desktop Dropdown */
const Dropdown: React.FC<DropdownProps> = ({ label, children, isOpen, setIsOpen, type }) => (
  <li
    className="relative"
    onMouseEnter={() => setIsOpen((prev) => ({ ...prev, [type]: true }))}
    onMouseLeave={() => setIsOpen((prev) => ({ ...prev, [type]: false }))}
  >
    <button className="flex items-center gap-1 text-gray-100 font-sans hover:text-white transition-colors">
      {label}
      <ChevronDown
        size={16}
        className={`transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
      />
    </button>

    <AnimatePresence>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          className="absolute left-0 mt-2 w-52 bg-white border border-gray-200 shadow-md rounded-md z-50"
        >
          {children}
        </motion.ul>
      )}
    </AnimatePresence>
  </li>
);

const DropdownItem: React.FC<DropdownItemProps> = ({ href, text }) => (
  <li>
    <Link
      href={href}
      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900 font-sans"
    >
      {text}
    </Link>
  </li>
);

/* Mobile Nav */
const MobileNavItem: React.FC<MobileNavItemProps> = ({ href, text, setIsOpen }) => (
  <li className="px-6 py-3 border-b border-gray-200">
    <Link href={href} onClick={() => setIsOpen(false)} className="block font-sans text-gray-800">
      {text}
    </Link>
  </li>
);

const MobileDropdown: React.FC<MobileDropdownProps> = ({ label, items, isOpen, setIsOpen, type }) => (
  <li className="px-6 py-3 border-b border-gray-200">
    <button
      className="flex justify-between w-full text-left font-sans text-gray-800"
      onClick={() => setIsOpen((prev) => ({ ...prev, [type]: !prev[type] }))}
    >
      {label}
      <ChevronDown
        size={18}
        className={`transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
      />
    </button>

    <AnimatePresence>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-2 pl-4 space-y-1 text-gray-700"
        >
          {items.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                onClick={() => setIsOpen((prev) => ({ ...prev, [type]: false }))}
                className="block py-1 pl-4 border-l-2 border-blue-700 hover:text-blue-700 font-sans"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  </li>
);

/* Main Navbar */
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<Record<string, boolean>>({
    about: false,
    projects: false,
    activities: false,
  });
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState<Record<string, boolean>>({
    about: false,
    projects: false,
    activities: false,
  });

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  return (
    <nav className="w-full sticky top-0 z-50 bg-white shadow-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between p-4 lg:px-16 gap-4 md:gap-0">
        {/* Logos */}
        <div className="flex items-center gap-6">
          <Image src="/denmark.png" alt="Denmark Logo" width={160} height={60} className="object-contain" />
          <Image src="/Ministry_of_Jal_Shakti.svg" alt="Jal Shakti" width={100} height={60} className="object-contain" />
        </div>

        {/* Title */}
        <h1 className="text-center text-gray-900 font-serif font-bold text-2xl md:text-3xl lg:text-4xl">
          Smart Laboratory on Clean Rivers
        </h1>

        {/* Right Logos */}
        <div className="flex items-center gap-6">
          <Image src="/Logo_edited.png" alt="SLCR Logo" width={100} height={60} className="object-contain" />
          <Image src="/namiti_gange.gif" alt="Namami Gange" width={70} height={60} className="object-contain" />
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center bg-[#081f5c] border-t border-gray-200">
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 right-0 bg-white shadow-md z-40"
          >
            <ul className="flex flex-col text-lg font-medium text-gray-800 py-4">
              <MobileNavItem href="/" text="Home" setIsOpen={setIsOpen} />
              <MobileDropdown
                label="About"
                type="about"
                isOpen={isMobileDropdownOpen.about}
                setIsOpen={setIsMobileDropdownOpen}
                items={[
                  { href: "/about/slcr", text: "SLCR" },
                  { href: "/about/partner", text: "Partner Institutes" },
                ]}
              />
              <MobileNavItem href="/secretariat" text="Secretariat" setIsOpen={setIsOpen} />
              <MobileDropdown
                label="Projects"
                type="projects"
                isOpen={isMobileDropdownOpen.projects}
                setIsOpen={setIsMobileDropdownOpen}
                items={[
                  { href: "/projects/project1", text: "DSS-WRM" },
                  { href: "/projects/project2", text: "Fingerprint Analysis" },
                  { href: "/projects/project3", text: "Hydrological Modelling of Varuna" },
                ]}
              />
              <MobileDropdown
                label="Activities"
                type="activities"
                isOpen={isMobileDropdownOpen.activities}
                setIsOpen={setIsMobileDropdownOpen}
                items={[
                  { href: "/event/rhar", text: "RHAR 2025" },
                  { href: "/activities/peoples_varuna", text: "People’s Varuna" },
                ]}
              />
              <MobileNavItem href="/data" text="Data" setIsOpen={setIsOpen} />
              <MobileNavItem href="/media" text="Gallery" setIsOpen={setIsOpen} />
              <MobileNavItem href="/contact" text="Contact" setIsOpen={setIsOpen} />
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
