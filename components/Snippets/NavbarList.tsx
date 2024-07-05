import React from "react";

export interface MenuItem {
  title: string;
  url: string;
}
const MenuItems: MenuItem[] = [
  {
    title: "Home",
    url: "#home",
  },
  {
    title: "About",
    url: "#about",
  },
  {
    title: "Services",
    url: "#services",
  },
  {
    title: "Contact",
    url: "#contact",
  },
];
export default function NavbarList() {
  return (
    <ul
      id="primary-navigation"
      data-visible="false"
      role="list"
      className={`navbar__menu | u-flex u-items-center u-gap-2
      `}
    >
      {MenuItems.map((item: MenuItem, index: number) => {
        return (
          <li key={index} className="hover-underline-animation">
            <a
              className="u-clr-white-0 u-ff-nav u-fw-bold u-uppercase"
              href={item.url}
            >
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
