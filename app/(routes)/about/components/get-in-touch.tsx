// "use client";

import Link from "next/link";

// import Link from "next/link";
// import Image from "next/image";

// import { motion } from "motion/react";

// export const Contact = () => {
//   return (
//     <section className="section my-20">
//       <div className="w-[90%] md:w-[85%] lg:w-[75%] rounded-4xl mx-auto bg-secondary-foreground flex py-16 px-12 relative">
//         <div className="mr-10">
//           <Image
//             src="/emoji/soph.png"
//             loading="eager"
//             alt="Let’s Get In Touch Today And Get Started With Your Project"
//             width={160}
//             height={160}
//             className="size-48 object-contain rotate-350"
//           />
//         </div>

//         <div className="w-[476px] text-background">
//           <h2 className="text-[28px] md:text-3xl lg:text-4xl lg:text-[34px] font-bold mb-6">
//             Let’s get in touch today and get started with <span className="text-nowrap">your project!</span>
//           </h2>
//           <div className="flex flex-col gap-3 text-lg font-medium">
//             <a
//               href="mailto:abdulahad.devmail@gmail.com"
//               className="w-fit inline-flex items-center gap-4 transition hover:scale-[1.03]"
//             >
//               <Image
//                 src="/email.png"
//                 loading="eager"
//                 alt="Email Icon Contact"
//                 width={24}
//                 height={24}
//                 className="size-6 md:size-8 object-contain"
//               />
//               <div className="">abdulahad.devmail@gmail.com</div>
//             </a>
//             <a
//               href="tel:(+92)313-6624697"
//               className="w-fit inline-flex items-center gap-4 transition hover:scale-[1.03]"
//             >
//               <Image
//                 src="/phone.png"
//                 loading="eager"
//                 alt="Phone Icon Contact"
//                 width={24}
//                 height={24}
//                 className="size-6 md:size-8 object-contain"
//               />
//               <div className="">(+92) 313 - 6624697</div>
//             </a>
//           </div>
//         </div>
//         <motion.div initial={false} whileHover={{ x: 3, y: -3 }} className="absolute top-10 right-10">
//           <Link href="/contact" className="size-12 bg-background rounded-xl grid place-items-center">
//             <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
//               <g clipPath="url(#clip0_5530_9584)">
//                 <path
//                   d="M3.66669 18.3334L18.3334 3.66671"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="stroke-[#202020] dark:stroke-white"
//                 />
//                 <path
//                   d="M18.3334 17.4945V3.66673H4.50558"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="stroke-[#202020] dark:stroke-white"
//                 />
//               </g>
//               <defs>
//                 <clipPath id="clip0_5530_9584">
//                   <rect width="22" height="22" fill="white" />
//                 </clipPath>
//               </defs>
//             </svg>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s discuss how we can work together to create something amazing.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass-card-dark p-8 rounded-4xl">
              <h3 className="text-2xl font-semibold mb-6">Let&apos;s Connect</h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                I&apos;m always interested in new opportunities and exciting projects. Whether you have a question, want
                to collaborate, or just want to say hello, I&apos;d love to hear from you.
              </p>
              <div className="space-y-6">
                <a href="mailto:abdulahad.devmail@gmail.com" target="_blank">
                  <div className="flex items-center p-2.5 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-200 group mb-2">
                    <div className="p-3 rounded-lg bg-muted text-foreground group-hover:bg-muted/80 transition-colors duration-200 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-mail h-6 w-6"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                    <div className="ml-4 flex-1 min-w-0 overflow-hidden">
                      <div className="text-sm text-foreground/60">Email</div>
                      <div className="font-medium group-hover:text-foreground transition-colors duration-200 wrap-break-word word-break break-all">
                        abdulahad.devmail@gmail.com
                      </div>
                      <div className="text-xs text-foreground/50">Drop me a line anytime</div>
                    </div>
                  </div>
                </a>
                <a href="https://www.upwork.com/freelancers/~019d8faa90a00bafcb" target="_blank">
                  <div className="flex items-center p-2.5 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-200 group mb-2">
                    <div className="p-3 rounded-lg bg-muted text-foreground group-hover:bg-muted/80 transition-colors duration-200 shrink-0">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 641 512"
                        className="h-6 w-6"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M494.7 295.6c-50.3 0-83.5-38.9-92.8-53.9c11.9-95.3 46.8-125.4 92.8-125.4c45.5 0 80.9 36.4 80.9 89.7s-35.4 89.7-80.9 89.7zm0-237.8c-81.9 0-127.8 53.4-141 108.4c-14.9-28-25.9-65.5-34.5-100.3H206v141c0 51.1-23.3 89-68.8 89s-71.6-37.8-71.6-89l.5-141H.8v141c0 41.1 13.3 78.4 37.6 105.1c25 27.5 59.2 41.8 98.8 41.8c78.8 0 133.8-60.4 133.8-146.9V112.1c8.2 31.2 27.8 91.1 65.3 143.6l-35 199.4h66.4l23.1-141.3c7.6 6.3 15.7 12 24.2 17c22.2 14 47.7 21.9 73.9 22.8c0 0 4 .2 6.1 .2c81.2 0 145.9-62.9 145.9-147.8s-64.8-148.1-146-148.1z"></path>
                      </svg>
                    </div>
                    <div className="ml-4 flex-1 min-w-0 overflow-hidden">
                      <div className="text-sm text-foreground/60">Upwork</div>
                      <div className="font-medium group-hover:text-foreground transition-colors duration-200 wrap-break-words word-break break-all">
                        Abdul Ahad.
                      </div>
                      <div className="text-xs text-foreground/50">Hire me on Upwork</div>
                    </div>
                  </div>
                </a>
                <a target="_blank">
                  <div className="flex items-center p-2.5 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-200 group mb-2">
                    <div className="p-3 rounded-lg bg-muted text-foreground group-hover:bg-muted/80 transition-colors duration-200 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-map-pin h-6 w-6"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div className="ml-4 flex-1 min-w-0 overflow-hidden">
                      <div className="text-sm text-foreground/60">Location</div>
                      <div className="font-medium group-hover:text-foreground transition-colors duration-200 wrap-break-words word-break break-all">
                        Lahore, Pakistan
                      </div>
                      <div className="text-xs text-foreground/50">Available for remote work</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="bg-secondary-foreground text-background p-10 rounded-3xl">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-3 bg-red-500"></div>
                <span className="text-sm font-medium">Currently unavailable</span>
              </div>
              <p className="text-sm mt-2 opacity-60">
                Focused on existing projects, but feel free to reach out for future opportunities
              </p>
            </div>
          </div>
          <div className="">
            <div className="glass-card-dark rounded-4xl p-8 h-full flex flex-col justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-6">Follow My Journey</h3>
                <p className="text-foreground/70 mb-8">
                  Connect with me on social media and stay updated with my latest projects and insights.
                </p>
                <div className="flex justify-center space-x-6 mb-8">
                  <a href="https://github.com/rafiframadhana" target="_blank" rel="noopener noreferrer">
                    <div
                      className="p-4 rounded-xl glass-card hover-lift transition-all duration-300 hover:bg-muted hover:text-foreground"
                      aria-label="GitHub"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-github h-8 w-8"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rafif-ramadhana-230603250/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className="p-4 rounded-xl glass-card hover-lift transition-all duration-300 hover:bg-muted hover:text-foreground"
                      aria-label="LinkedIn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-linkedin h-8 w-8"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </div>
                  </a>
                  <a href="mailto:abdulahad.devmail@gmail.com" target="_blank" rel="noopener noreferrer">
                    <div
                      className="p-4 rounded-xl glass-card hover-lift transition-all duration-300 hover:bg-muted hover:text-foreground"
                      aria-label="Email"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-mail h-8 w-8"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="space-y-4">
                  <div>
                    <a href="/cv.pdf" download className="w-full block">
                      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-11 rounded-md px-8 w-full bg-linear-to-r from-foreground to-foreground/90 hover:opacity-75 text-background shadow-lg hover:shadow-xl transition-all duration-300">
                        Download Resume
                      </button>
                    </a>
                  </div>
                  <div>
                    <a href="mailto:abdulahad.devmail@gmail.com" className="w-full">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 w-full"
                      >
                        Send Me an Email
                      </Link>
                    </a>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <div className="text-sm text-foreground/60">⚡ Typically responds within 24 hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
