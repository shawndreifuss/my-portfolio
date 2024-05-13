"use client";

import React from "react";
import {
  Button,
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import BlogPostCard from "@/components/blog-post-card";
import Link from "next/link";

const BLOG_POSTS = [
  {
    img: "/img/blog.png",
    title: "Ripple: Start to finish Business Management and Website Host platform",
    desc: "Built and developed a comprehensive business management and web design platform using a modern technology stack: Next.js, TypeScript, Clerk, Stripe, Tailwind CSS, Vercel, Planet Scale, Prisma, and SQL.",
    link: "https://rippleproduction.vercel.app/"
  },
  {
    img: "/img/aurora-logo.png",
    title: "Aurora: AI generation all in one tool",
    desc: "AI tool for conversations, images, videos, music and code generation. Built with Next.js, TypeScript, Tailwind CSS, Vercel, and OpenAI.",
    link: "https://auroraproduction.vercel.app/"
  },
  {
    img: "https://img.freepik.com/premium-vector/chat-app-logo-sms-messenger-label-design-mobile-app-online-conversation-with-texting-message-ui-design-concept-vector-illustration_172533-1513.jpg",
    title: "Chat app: A real-time chat application",
    desc: "Chat application for real time messaging and chatting built with React, Javascript, Tailwind CSS, Netlify, and Firebase.",
    link: "https://app.netlify.com/sites/sweet-souffle-90e0b9/overview"
  },
];

export function LatestBlogPosts() {
  return (
    <section className="py-40 px-8">
      <div className="container mx-auto mb-12">
        <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} variant="h3" color="blue-gray">
          Check my latest work!
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        {BLOG_POSTS.map((props, idx) => (
          <BlogPostCard key={idx} {...props} />
        ))}
        <Card
         placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
          className="relative grid h-full w-full place-items-center overflow-hidden
            bg-black"
        >
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <Link href="https://github.com/shawndreifuss">
          <CardBody className="relative w-full"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} variant="h3" className="mt-4" color="white">
              Discover all my Work
            </Typography>
            <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} color="white" className="py-4 font-normal">
              I am a versatile developer in a wide range of technologies. Check out all my projects 
            </Typography>
            
            <Button
              
                variant="text"
                color="white"
                className="flex items-center gap-2"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              My Github
              <ArrowRightIcon
                strokeWidth={3}
                className="h-3.5 w-3.5 text-white"
              />
            </Button>
          </CardBody>
          </Link>
        </Card>
      </div>
    </section>
  );
}


export default LatestBlogPosts;