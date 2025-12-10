"use client";

import { Activity, useCallback, useEffect, useRef, useState } from "react";
import { QRCodeSVG as QRCode } from "qrcode.react";
import { useMediaQuery } from "@/hooks/media-query";

import "./whatsapp.component.css";

export const Whatsapp: React.FC<{ phNumber: number; message?: string }> = ({ phNumber, message = "Hello" }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const intervalRef = useRef<any>(null);
  // const [chatLink, setChatLink] = useState("");
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [open, setOpen] = useState(false);

  const handleMouseIn = useCallback(() => {
    if (window.innerWidth < 1280) {
      intervalRef.current = setTimeout(() => {
        setOpen(true);
      }, 0.5);
    } else {
      intervalRef.current = setTimeout(() => {
        setOpen(true);
      }, 1000);
    }
  }, []);

  const handleMouseOut = () => {
    clearTimeout(intervalRef.current);
  };

  const handleClick = useCallback(() => {
    const chatLink = `https://api.whatsapp.com/send?phone=${phNumber}&text=${message}`;
    window.open(chatLink, "_blank");
  }, [message, phNumber]);

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [message, phNumber]);

  return (
    <div className={`joinchat fixed bottom-12 right-5 group ${open ? "joinchat--chatbox" : ""}`}>
      <div
        className="joinchat__button"
        onMouseOver={() => handleMouseIn()}
        onMouseLeave={() => handleMouseOut()}
        // target="_blank"
        // href={`https://api.whatsapp.com/send?phone=${phNumber}&text=${message}`}
        onClick={() => open && handleClick()}
      >
        <div className="joinchat__button__open"></div>
        <div className="joinchat__button__sendtext">Open chat</div>
        <svg
          className="joinchat__button__send"
          width="60"
          height="60"
          viewBox="0 0 400 400"
          strokeLinecap="round"
          strokeWidth="33"
        >
          <path
            className="joinchat_svg__plain"
            d="M168.83 200.504H79.218L33.04 44.284a1 1 0 0 1 1.386-1.188L365.083 199.04a1 1 0 0 1 .003 1.808L34.432 357.903a1 1 0 0 1-1.388-1.187l29.42-99.427"
          ></path>
          <path
            className="joinchat_svg__chat"
            d="M318.087 318.087c-52.982 52.982-132.708 62.922-195.725 29.82l-80.449 10.18 10.358-80.112C18.956 214.905 28.836 134.99 81.913 81.913c65.218-65.217 170.956-65.217 236.174 0 42.661 42.661 57.416 102.661 44.265 157.316"
          ></path>
        </svg>
        <div className="joinchat__tooltip">
          <div>Need help?</div>
        </div>
        <Activity mode={isMobile ? "hidden" : "visible"}>
          <div className="joinchat__qr">
            <div>Scan the code</div>
            <QRCode
              value={`https://api.whatsapp.com/send?phone=${phNumber}&text=${message}`}
              level="H"
              className="size-full"
            />
            {/* <qrcode [qrdata]="chatLink" [elementType]="'url'" [width]="256" [errorCorrectionLevel]="'H'"></qrcode> */}
          </div>
        </Activity>
      </div>
      <div className="joinchat__box">
        <div className="joinchat__header">
          <svg className="joinchat__wa" width="120" height="28" viewBox="0 0 120 28">
            <title>WhatsApp</title>
            <path d="M117.2 17c0 .4-.2.7-.4 1-.1.3-.4.5-.7.7l-1 .2c-.5 0-.9 0-1.2-.2l-.7-.7a3 3 0 0 1-.4-1 5.4 5.4 0 0 1 0-2.3c0-.4.2-.7.4-1l.7-.7a2 2 0 0 1 1.1-.3 2 2 0 0 1 1.8 1l.4 1a5.3 5.3 0 0 1 0 2.3zm2.5-3c-.1-.7-.4-1.3-.8-1.7a4 4 0 0 0-1.3-1.2c-.6-.3-1.3-.4-2-.4-.6 0-1.2.1-1.7.4a3 3 0 0 0-1.2 1.1V11H110v13h2.7v-4.5c.4.4.8.8 1.3 1 .5.3 1 .4 1.6.4a4 4 0 0 0 3.2-1.5c.4-.5.7-1 .8-1.6.2-.6.3-1.2.3-1.9s0-1.3-.3-2zm-13.1 3c0 .4-.2.7-.4 1l-.7.7-1.1.2c-.4 0-.8 0-1-.2-.4-.2-.6-.4-.8-.7a3 3 0 0 1-.4-1 5.4 5.4 0 0 1 0-2.3c0-.4.2-.7.4-1 .1-.3.4-.5.7-.7a2 2 0 0 1 1-.3 2 2 0 0 1 1.9 1l.4 1a5.4 5.4 0 0 1 0 2.3zm1.7-4.7a4 4 0 0 0-3.3-1.6c-.6 0-1.2.1-1.7.4a3 3 0 0 0-1.2 1.1V11h-2.6v13h2.7v-4.5c.3.4.7.8 1.2 1 .6.3 1.1.4 1.7.4a4 4 0 0 0 3.2-1.5c.4-.5.6-1 .8-1.6.2-.6.3-1.2.3-1.9s-.1-1.3-.3-2c-.2-.6-.4-1.2-.8-1.6zm-17.5 3.2l1.7-5 1.7 5h-3.4zm.2-8.2l-5 13.4h3l1-3h5l1 3h3L94 7.3h-3zm-5.3 9.1l-.6-.8-1-.5a11.6 11.6 0 0 0-2.3-.5l-1-.3a2 2 0 0 1-.6-.3.7.7 0 0 1-.3-.6c0-.2 0-.4.2-.5l.3-.3h.5l.5-.1c.5 0 .9 0 1.2.3.4.1.6.5.6 1h2.5c0-.6-.2-1.1-.4-1.5a3 3 0 0 0-1-1 4 4 0 0 0-1.3-.5 7.7 7.7 0 0 0-3 0c-.6.1-1 .3-1.4.5l-1 1a3 3 0 0 0-.4 1.5 2 2 0 0 0 1 1.8l1 .5 1.1.3 2.2.6c.6.2.8.5.8 1l-.1.5-.4.4a2 2 0 0 1-.6.2 2.8 2.8 0 0 1-1.4 0 2 2 0 0 1-.6-.3l-.5-.5-.2-.8H77c0 .7.2 1.2.5 1.6.2.5.6.8 1 1 .4.3.9.5 1.4.6a8 8 0 0 0 3.3 0c.5 0 1-.2 1.4-.5a3 3 0 0 0 1-1c.3-.5.4-1 .4-1.6 0-.5 0-.9-.3-1.2zM74.7 8h-2.6v3h-1.7v1.7h1.7v5.8c0 .5 0 .9.2 1.2l.7.7 1 .3a7.8 7.8 0 0 0 2 0h.7v-2.1a3.4 3.4 0 0 1-.8 0l-1-.1-.2-1v-4.8h2V11h-2V8zm-7.6 9v.5l-.3.8-.7.6c-.2.2-.7.2-1.2.2h-.6l-.5-.2a1 1 0 0 1-.4-.4l-.1-.6.1-.6.4-.4.5-.3a4.8 4.8 0 0 1 1.2-.2 8.3 8.3 0 0 0 1.2-.2l.4-.3v1zm2.6 1.5v-5c0-.6 0-1.1-.3-1.5l-1-.8-1.4-.4a10.9 10.9 0 0 0-3.1 0l-1.5.6c-.4.2-.7.6-1 1a3 3 0 0 0-.5 1.5h2.7c0-.5.2-.9.5-1a2 2 0 0 1 1.3-.4h.6l.6.2.3.4.2.7c0 .3 0 .5-.3.6-.1.2-.4.3-.7.4l-1 .1a21.9 21.9 0 0 0-2.4.4l-1 .5c-.3.2-.6.5-.8.9-.2.3-.3.8-.3 1.3s.1 1 .3 1.3c.1.4.4.7.7 1l1 .4c.4.2.9.2 1.3.2a6 6 0 0 0 1.8-.2c.6-.2 1-.5 1.5-1a4 4 0 0 0 .2 1H70l-.3-1v-1.2zm-11-6.7c-.2-.4-.6-.6-1-.8-.5-.2-1-.3-1.8-.3-.5 0-1 .1-1.5.4a3 3 0 0 0-1.3 1.2v-5h-2.7v13.4H53v-5.1c0-1 .2-1.7.5-2.2.3-.4.9-.6 1.6-.6.6 0 1 .2 1.3.6.3.4.4 1 .4 1.8v5.5h2.7v-6c0-.6 0-1.2-.2-1.6 0-.5-.3-1-.5-1.3zm-14 4.7l-2.3-9.2h-2.8l-2.3 9-2.2-9h-3l3.6 13.4h3l2.2-9.2 2.3 9.2h3l3.6-13.4h-3l-2.1 9.2zm-24.5.2L18 15.6c-.3-.1-.6-.2-.8.2A20 20 0 0 1 16 17c-.2.2-.4.3-.7.1-.4-.2-1.5-.5-2.8-1.7-1-1-1.7-2-2-2.4-.1-.4 0-.5.2-.7l.5-.6.4-.6v-.6L10.4 8c-.3-.6-.6-.5-.8-.6H9c-.2 0-.6.1-.9.5C7.8 8.2 7 9 7 10.7c0 1.7 1.3 3.4 1.4 3.6.2.3 2.5 3.7 6 5.2l1.9.8c.8.2 1.6.2 2.2.1.6-.1 2-.8 2.3-1.6.3-.9.3-1.5.2-1.7l-.7-.4zM14 25.3c-2 0-4-.5-5.8-1.6l-.4-.2-4.4 1.1 1.2-4.2-.3-.5A11.5 11.5 0 0 1 22.1 5.7 11.5 11.5 0 0 1 14 25.3zM14 0A13.8 13.8 0 0 0 2 20.7L0 28l7.3-2A13.8 13.8 0 1 0 14 0z"></path>
          </svg>
          <div className="joinchat__close" aria-label="Close" onClick={() => setOpen(false)}></div>
        </div>
        <div className="joinchat__box__scroll">
          <div className="joinchat__box__content">
            <div className="joinchat__message">
              Hello,
              <br />
              Can we help you?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
