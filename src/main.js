import { useState } from "react";

export default function Main({
  children,
  isOpen1,
  isOpen2,
  setIsOpen1,
  setIsOpen2,
  movies,
  watched,
}) {
  return <main className="main">{children}</main>;
}
