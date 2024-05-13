"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";


function Hero() {
  return (
    <header className="bg-gray-900 mb-96">
      <div className="container mx-auto px-8 h-[22rem] lg:px-48 translate-y-64">
        <Image
          width={1024}
          height={1024}
          alt="avatar"
          src="/me.jpeg"
          className="w-40 rounded-xl"
        />
        <div className="flex mt-16 justify-between">
          <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} variant="h5" className="text-3xl">
            Shawn Dreifuss Full Stack Developer
          </Typography>
        </div>
        <div className="flex items-center gap-6">
         

        </div>
        <Typography variant="lead" className="!text-gray-500 mt-8"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        Hi I&aposm Shawn Dreifuss Fueled by high energy levels and boundless enthusiasm, I&aposm
                                    easily inspired and more then willing to follow my fascinations wherever they take
                                    me. I&aposm passionate, expressive, multi-talented spirit with a natural ability to
                                    entertain and inspire. I&aposm never satisfied to just come up with ideas. Instead I
                                    have an almost impulsive need to act on them.
        </Typography>
        {/* <Button
          variant="text"
          color="gray"
          className="flex items-center gap-2 mt-2"
        >
          more about me
          <ArrowRightIcon
            strokeWidth={3}
            className="h-3.5 w-3.5 text-gray-900"
          />
        </Button> */}
      </div>
    </header>
  );
}
export default Hero;
