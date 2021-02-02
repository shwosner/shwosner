import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";

export default function SideMenu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <div style={{ background: "gray" }}></div>
    </>
  );
}
