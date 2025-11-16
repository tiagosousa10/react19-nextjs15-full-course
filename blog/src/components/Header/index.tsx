"use client";

import clsx from "clsx";

export function Header() {
  console.log("Header");
  return (
    <h1
      className={clsx(
        true &&
          "text-6xl font-bold hover:text-blue-50 hover:bg-blue-500 transition duration-1000 "
      )}
      onClick={() => alert(123)}
    >
      Ola dentro de page.tsx
    </h1>
  );
}
