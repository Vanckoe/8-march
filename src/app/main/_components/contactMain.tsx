import React from "react";
import { useTranslations } from "next-intl";

const ContactsMain = () => {
  const t = useTranslations("ContactsComponent");

  return (
    <div className="mx-auto container px-[30px] w-full flex flex-col gap-5 justify-center">
      <h1 className="text-[#1151AB] ">
        {/* Наши контакты */}
        {t("title")}
      </h1>
      <div className="flex flex-col gap-5 md:gap-6 relative ">
        <div className=" flex flex-col md:gap-16 gap-4 md:flex-row md:items-center md:justify-start">
          <div className="flex flex-col ">
            <p className="text-base uppercase font-bold text-[#CACACA]">
              Telegram
            </p>
            <p className="text-2xl font-semibold">
              @Vanckoe21 <br /> @Ctv777
            </p>
          </div>
          <div className="flex flex-col ">
            <p className="text-base uppercase font-bold text-[#CACACA]">
              Instagram
            </p>
            <p className="text-2xl font-semibold">@born_in_the_steppe</p>
          </div>
        </div>
        <div className="col-span-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2575602.7266141754!2d-78.79002451186905!3d24.272643039414294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQzJzQ0LjQiTiA3N8KwNDknNDEuNyJX!5e1!3m2!1sru!2skz!4v1741408405479!5m2!1sru!2skz"
            width="600"
            height="550"
            className="border-0 w-full"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2575602.7266141754!2d-78.79002451186905!3d24.272643039414294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQzJzQ0LjQiTiA3N8KwNDknNDEuNyJX!5e1!3m2!1sru!2skz!4v1741408405479!5m2!1sru!2skz"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}
        </div>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2502.8019541824424!2d71.42381315992068!3d51.14900311483395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424586b7c4e3ffff%3A0xeaa2e1e41c05a638!2z0L_RgNC-0YHQvy4g0JrQsNCx0LDQvdCx0LDQuSDQkdCw0YLRi9GA0LAgMi82LCDQkNGB0YLQsNC90LAgMDEwMDAw!5e0!3m2!1sru!2skz!4v1732976634673!5m2!1sru!2skz"
          height="450"
          className="border-0 w-full"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}
      </div>
    </div>
  );
};

export default ContactsMain;
