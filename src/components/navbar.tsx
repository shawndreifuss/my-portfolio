import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="small"
        className="font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
    placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} variant="h6" color={isScrolling ? "blue-gray" : "white"}>
          Shawn Dreifuss
        </Typography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          <NavItem>Home</NavItem>
          <NavItem>About Me</NavItem>
          <NavItem>Contact Me</NavItem>
          <NavItem>My Work</NavItem>
          
        </ul>
        <div className="hidden items-center lg:flex gap-2">
          <a href="/img/Shawn-Dreifuss-Full-Stack-Developer.pdf" target="_blank" download>
            <Button  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} color={isScrolling ? "gray" : "white"}>Download Resume</Button>
          </a>
        </div>
        <IconButton
         placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
          variant="text"
          color="white"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
          <NavItem>Home</NavItem>
          <NavItem>About Me</NavItem>
          <NavItem>Contact Me</NavItem>
          <NavItem>My Work</NavItem>
          </ul>
          <div className="mt-6 flex items-center gap-4">
          <a href="/img/Shawn-Dreifuss-Full-Stack-Developer.pdf" target="_blank" download>
            <Button  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} color={isScrolling ? "gray" : "white"}>Download Resume</Button>
          </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
