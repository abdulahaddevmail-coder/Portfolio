"use client";
import Link from "next/link";
import Image from "next/image";

import { motion } from "motion/react";

export const Contact = () => {
  return (
    // <section className="section pb-20">
    //   <div className="w-[75%] rounded-4xl mx-auto bg-secondary-foreground flex py-16 px-12 relative">
    //     <div className="mr-10">
    //       <Image
    //         src="/emoji/soph.png"
    //         loading="eager"
    //         alt="Let’s Get In Touch Today And Get Started With Your Project"
    //         width={160}
    //         height={160}
    //         className="size-48 object-contain rotate-350"
    //       />
    //     </div>

    //     <div className="w-[476px] text-background">
    //       <h2 className="text-4xl text-[34px] font-extrabold mb-6">
    //         Let’s get in touch today and get started with{" "}
    //         <span className="text-nowrap">your project!</span>
    //       </h2>
    //       <div className="flex flex-col gap-3 text-lg font-semibold">
    //         <a
    //           href="mailto:abdulahad.devmail@gmail.com"
    //           className="w-fit inline-flex items-center gap-4 transition hover:scale-[1.03]"
    //         >
    //           <Image
    //             src="/email.png"
    //             loading="eager"
    //             alt="Email Icon Contact"
    //             width={24}
    //             height={24}
    //             className="size-6 object-contain"
    //           />
    //           <div className="">abdulahad.devmail@gmail.com</div>
    //         </a>
    //         <a
    //           href="tel:(+92)313-6624697"
    //           className="w-fit inline-flex items-center gap-4 transition hover:scale-[1.03]"
    //         >
    //           <Image
    //             src="/phone.png"
    //             loading="eager"
    //             alt="Phone Icon Contact"
    //             width={24}
    //             height={24}
    //             className="size-6 object-contain"
    //           />
    //           <div className="">(+92) 313 - 6624697</div>
    //         </a>
    //       </div>
    //     </div>
    //     <motion.div
    //       initial={false}
    //       whileHover={{ x: 3, y: -3 }}
    //       className="absolute top-10 right-10"
    //     >
    //       <Link
    //         href="/contact"
    //         className="size-12 bg-background rounded-xl grid place-items-center"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="22"
    //           height="22"
    //           viewBox="0 0 22 22"
    //           fill="none"
    //         >
    //           <g clipPath="url(#clip0_5530_9584)">
    //             <path
    //               d="M3.66669 18.3334L18.3334 3.66671"
    //               strokeWidth="2"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               className="stroke-[#202020] dark:stroke-white"
    //             />
    //             <path
    //               d="M18.3334 17.4945V3.66673H4.50558"
    //               strokeWidth="2"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               className="stroke-[#202020] dark:stroke-white"
    //             />
    //           </g>
    //           <defs>
    //             <clipPath id="clip0_5530_9584">
    //               <rect width="22" height="22" fill="white" />
    //             </clipPath>
    //           </defs>
    //         </svg>
    //       </Link>
    //     </motion.div>
    //   </div>
    // </section>
    <section className="section pb-20">
      <div className="w-[90%] md:w-[85%] lg:w-[75%] rounded-4xl mx-auto bg-secondary-foreground flex flex-col md:flex-row justify-between items-center py-8 px-7.5 md:py-14 lg:py-16 md:px-10 lg:px-12">
        <div className="flex flex-col text-background">
          <h2 className="text-[28px] md:text-3xl lg:text-4xl lg:text-[34px] font-bold md:font-extrabold mb-6 md:w-[77%] lg:w-[65%]">
            Want to work <span className="text-nowrap">with me?</span> Let’s get{" "}
            <span className="text-nowrap">in touch!</span>
          </h2>
          <div className="flex flex-col lg:flex-row gap-y-3 md:gap-y-1 gap-x-3 md:text-lg lg:text-xl font-semibold">
            <a href="mailto:abdulahad.devmail@gmail.com" className="inline-flex items-center gap-4">
              <Image
                src="/email.png"
                loading="eager"
                alt="Email Icon Contact"
                width={32}
                height={32}
                className="size-6 md:size-8 object-contain"
              />
              <div className="">abdulahad.devmail@gmail.com</div>
            </a>
            <a href="tel:(+92)313-6624697" className="inline-flex items-center gap-4">
              <Image
                src="/phone.png"
                loading="eager"
                alt="Phone Icon Contact"
                width={32}
                height={32}
                className="size-6 md:size-8 object-contain"
              />
              <div className="">(+92) 313 - 6624697</div>
            </a>
          </div>
        </div>
        <div className="w-full md:w-fit flex justify-end mt-12 md:mt-0">
          <Image src="/mail.png" alt="Mail Box" width={200} height={115} className="" />
        </div>
      </div>
    </section>
  );
};
