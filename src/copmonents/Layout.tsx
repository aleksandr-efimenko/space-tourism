import Link from "next/link";
import React from "react";

const mainMenu = [
  { name: "Home", path: "/" },
  { name: "Destination", path: "/destination" },
  { name: "Crew", path: "/crew" },
  { name: "Technology", path: "/technology" },
];

const convertToDoubleDigit = (number: number) => {
  return number < 10 ? `0${number}` : number;
};
export default function Layout() {
  return (
    <nav>
      <ul>
        {mainMenu.map((item, index) => (
          <li key={item.name} className="uppercase mx-5">
            <Link href={item.path} key={item.name}>
              <span className="mr-3">{convertToDoubleDigit(index)}</span>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
