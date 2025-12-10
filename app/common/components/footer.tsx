import Image from "next/image";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="md:sticky md:bottom-0 md:-z-10 md:[--top-overlap:32px] grid w-full place-items-center px-10 md:px-20 pb-8 pt-[84px] lg:px-[116px] md:pb-0 md:-mt-(--top-overlap) md:h-[calc(444px+var(--top-overlap))] md:pt-[calc(72px+var(--top-overlap))] bg-foreground">
      <div className="w-full h-80 text-background flex flex-col justify-between">
        <div className="flex flex-col gap-y-2">
          <Image
            src="/avatar.jpg"
            width={60}
            height={60}
            alt="Avatar"
            className="rounded-full"
          />
          <p className="text-2xl">Design a better digital experience.</p>
          <div className="flex flex-col gap-3.5 font-medium mt-6">
            <a
              href="mailto:abdulahad.devmail@gmail.com"
              className="inline-flex items-center gap-4 transition hover:scale-[1.03]"
            >
              <Image
                src="/email.png"
                loading="eager"
                alt="Email Icon Contact"
                width={18}
                height={18}
                className="size-4.5 object-contain"
              />
              <div className="">abdulahad.devmail@gmail.com</div>
            </a>
            <a
              href="tel:(+92)313-6624697"
              className="inline-flex items-center gap-4 transition hover:scale-[1.03]"
            >
              <Image
                src="/phone.png"
                loading="eager"
                alt="Phone Icon Contact"
                width={18}
                height={18}
                className="size-4.5 object-contain"
              />
              <div className="">(+92) 313 - 6624697</div>
            </a>
          </div>
        </div>
        <div className="flex justify-center ">
          <p className="text-center text-background/60">
            © {currentYear} Created by{" "}
            <span className="text-background">Abdul Ahad</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
