import Link from "next/link";
import React from "react";

const mainMenu = [
  { name: "Home", path: "/" },
  { name: "Destination", path: "/destination" },
  { name: "Crew", path: "/crew" },
  { name: "Technology", path: "/technology" },
];

export default function Layout() {
  return (
    <nav>
      <ul>
        {mainMenu.map((item) => (
         <li key={item.name}>
         <Link href={item.path} key={item.name}>{item.name}</Link>
         </li>
        ))}
      </ul>
    </nav>
  );
}
