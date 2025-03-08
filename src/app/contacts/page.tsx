import React from "react";
// import { useTranslations } from "next-intl";
import Contacts from "../main/_components/contacts";

const ContactPage = () => {
  // const t = useTranslations("ContactsBlock");

  return (
    <div className="flex flex-col mt-[150px] gap-[100px]">
      {/* <div className="mx-auto container px-[30px] w-full flex flex-col gap-6 justify-center">
        <h2 className="text-[#1151AB] text-[48px] leading-[52px] md:text-[64px] font-semibold">
          Наши контакты
          {t("title")}
        </h2>
        <div className="grid grid-cols-1 mt-5 md:mt-10 md:grid-cols-2 gap-5 md:gap-6 -mb-20 relative z-10">
          <div className="flex flex-col  md:flex-row gap-5">
            <div className="flex flex-col ">
              <p className="text-base uppercase font-bold text-[#CACACA]">
                {t("almatyOfficePhone")}
                НОМЕР ТЕЛЕФОНА офиса алматы{" "}
              </p>
              <p className="text-2xl font-semibold">+7 (XXX)XXX - XX - XX </p>
            </div>
            <div className="flex flex-col ">
              <p className="text-base uppercase font-bold text-[#CACACA]">
                {t("assistantSecretary")}
                секретарь помощника{" "}
              </p>
              <p className="text-2xl font-semibold">+7 (XXX)XXX - XX - XX </p>
            </div>
          </div>
          <div className="flex flex-col  md:flex-row gap-5">
            <div className="flex flex-col ">
              <p className="text-base uppercase font-bold text-[#CACACA]">
                {t("email")}
                Электронная почта{" "}
              </p>
              <p className="text-2xl font-semibold">info@kcmg.kz </p>
            </div>
            <div className="flex flex-col ">
              <p className="text-base uppercase font-bold text-[#CACACA]">
                {t("inquiriesEmail")}
                Электронная почта для обращений{" "}
              </p>
              <p className="text-2xl font-semibold">info@kcmg.kz </p>
            </div>
          </div>
          <div className="flex flex-col  md:flex-row gap-5">
            <div className="flex flex-col ">
              <p className="text-base uppercase font-bold text-[#CACACA]">
                {t("astanaOfficePhone")}
                НОМЕР ТЕЛЕФОНА офиса астаны{" "}
              </p>
              <p className="text-2xl font-semibold">+7 (XXX)XXX - XX - XX </p>
            </div>
            <div className="flex flex-col ">
              <p className="text-base uppercase font-bold text-[#CACACA]">
                {t("chinaPhone")}
                номер телефона в китае{" "}
              </p>
              <p className="text-2xl font-semibold">+86 XXX XXX XX XXX </p>
            </div>
          </div>
          <div className="flex flex-col ">
            <p className="text-base uppercase font-bold text-[#CACACA]">
              {t("specialDepartmentEmail")}
              Электронная почта спец. отдела{" "}
            </p>
            <p className="text-2xl font-semibold">info@kcmg.kz </p>
          </div>
          <div className="flex flex-col mt-16 md:mt-20 gap-5">
            <div className="flex flex-col ">
              <p className="text-base uppercase font-bold text-[#CACACA]">
                {t("astanaOfficeAddress")}
                адрес офиса в г. Астана
              </p>
              <p className="text-2xl font-semibold">
                {t("addressDetails")}
                пр. Кабанбай Батыра 2/8, БЦ “Вамос”, 314
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2502.8019541824424!2d71.42381315992068!3d51.14900311483395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424586b7c4e3ffff%3A0xeaa2e1e41c05a638!2z0L_RgNC-0YHQvy4g0JrQsNCx0LDQvdCx0LDQuSDQkdCw0YLRi9GA0LAgMi82LCDQkNGB0YLQsNC90LAgMDEwMDAw!5e0!3m2!1sru!2skz!4v1732976634673!5m2!1sru!2skz"
              height="450"
              className="border-0 w-full"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="flex flex-col mt-10 md:mt-20  gap-5">
            <div className="flex flex-col ">
              <p className="text-base uppercase font-bold text-[#CACACA]">
                {t("almatyOfficeAddress")}
                адрес офиса в г. алматы{" "}
              </p>
              <p className="text-2xl font-semibold">
                {t("addressDetails")}
                ул. Гоголя 384, ЖК “Вамос”, офис 314{" "}
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2502.8019541824424!2d71.42381315992068!3d51.14900311483395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424586b7c4e3ffff%3A0xeaa2e1e41c05a638!2z0L_RgNC-0YHQvy4g0JrQsNCx0LDQvdCx0LDQuSDQkdCw0YLRi9GA0LAgMi82LCDQkNGB0YLQsNC90LAgMDEwMDAw!5e0!3m2!1sru!2skz!4v1732976634673!5m2!1sru!2skz"
              height="450"
              className="border-0 w-full"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div> */}
      <Contacts />
    </div>
  );
};

export default ContactPage;
