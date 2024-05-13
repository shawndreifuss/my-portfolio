"use client";

import React from "react";
import {
  Button,
  IconButton,
  Typography,
  Card,
  CardBody,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { PhoneIcon, EnvelopeIcon, TicketIcon } from "@heroicons/react/24/solid";


export function ContactForm() {
  return (
    <section className="px-8 pt-20">
    <div className="container mx-auto mb-5 md:mb-20 text-center">
      <Typography  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} variant="h1" color="blue-gray" className="mb-4">
        Say Hi!
      </Typography>
      <Typography  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} variant="lead" className="mx-auto !text-gray-500">
        Any questions or remarks? Just write us a messaage!
      </Typography>
    </div>
    <div className="container mx-auto">
      <Card  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} shadow={true} className="border border-gray/50">
        <CardBody className="flex justify-center align-center"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>

          <div className="w-full rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
            <Typography  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} variant="h4" color="white" className="mb-2">
              Contact Information
            </Typography>
            <Typography
             placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
              variant="lead"
              className="mx-auto mb-8 text-base !text-gray-500"
            >
              Available for hire! I am open to new opportunities and challenges.
            </Typography>
            <div className="flex gap-5">
              <PhoneIcon className="h-6 w-6 text-white" />
              <Typography variant="h6" color="white" className="mb-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                +1(760) 470 0245
              </Typography>
            </div>
            <div className="flex my-2 gap-5">
              <EnvelopeIcon className="h-6 w-6 text-white" />
              <Typography  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} variant="h6" color="white" className="mb-2">
                DreifussShawn@gmail.com
              </Typography>
            </div>
            <div className="flex mb-10 gap-5">
              <TicketIcon className="h-6 w-6 text-white" />
              <Typography  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} variant="h6" color="white" className="mb-2">
                San Diego, California
              </Typography>
            </div>
            <div className="flex items-center gap-5">
              <IconButton  variant="text" color="white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <i className="fa-brands fa-facebook text-lg" />
              </IconButton>
              <IconButton  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} variant="text" color="white">
                <i className="fa-brands fa-instagram text-lg" />
              </IconButton>
              <IconButton  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} variant="text" color="white">
                <i className="fa-brands fa-github text-lg" />
              </IconButton>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  </section>
  );
}
export default ContactForm;