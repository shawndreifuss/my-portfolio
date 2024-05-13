import { Typography, IconButton } from "@material-tailwind/react";

const LINKS = ["Github", "About Me", "Product", "Blog", "Pricing"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="pb-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 grid items-center justify-center gap-10">
          <ul className="flex flex-wrap justify-center gap-8 items-center">
            {LINKS.map((link, idx) => (
              <li key={link}>
                <Typography
                 placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                  as="a"
                  href="#"
                  className={`py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900 ${
                    idx === LINKS.length - 1 ? "pl-2" : "px-2"
                  }`}
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
          <div className="gap-2 lg:flex items-center justify-center">
            <IconButton  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} variant="text" color="gray" size="sm">
              <i className="fa-brands fa-twitter text-lg" />
            </IconButton>
            <IconButton  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} variant="text" color="gray" size="sm">
              <i className="fa-brands fa-youtube text-lg" />
            </IconButton>
            <IconButton  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} variant="text" color="gray" size="sm">
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
            <IconButton  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} variant="text" color="gray" size="sm">
              <i className="fa-brands fa-github text-lg" />
            </IconButton>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
