import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Materials = () => {
  const t = useTranslations("InnovativeMaterialsBlock");

  return (
    <div className="relative z-10 container mx-auto px-[30px] flex flex-col gap-5 md:gap-10 w-full">
      <h1 className="text-[#1151AB]">
        {t("title")}
        {/* Инновационные материалы и оборудование */}
      </h1>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col md:flex-row ">
          <div className=" relative w-full flex ">
            <Image
              src="/technology/anker.png"
              objectFit="cover"
              width={669}
              height={438}
              alt="image"
              className="w-full min-h-[206px] hidden md:block flex-grow md:h-full  object-cover"
            />
            <Image
              src="/technology/anker.png"
              objectFit="cover"
              width={669}
              height={438}
              alt="image"
              className="w-full md:hidden min-h-[356px]"
            />
            <div className="md:hidden absolute bottom-5 left-5 flex flex-col gap-1 md:flex-row md:items-center">
              <p className="text-base w-fit font-semibold p-[18px] bg-white text-[#1151AB]">
                {t("anchorSystems.durability")}
                {/* долговечность */}
              </p>
              <p className="text-base w-fit font-semibold p-[18px] bg-white text-[#1151AB]">
                {t("anchorSystems.vibrationResistance")}
                {/* устойчивость к вибрациям */}
              </p>
              <p className="text-base w-fit font-semibold p-[18px] bg-white text-[#1151AB]">
                {t("anchorSystems.easyInstallation")}
                {/* легкость в установкеs */}
              </p>
            </div>
          </div>
          <div className="md:w-full flex flex-col gap-5 bg-[#1151AB] text-white px-5 py-8 md:px-12 md:py-[75px]">
            <p className="text-[32px] font-semibold">
              {t("anchorSystems.title")}
              {/* Анкерные системы */}
            </p>
            <p className="text-base font-medium">
              {/* Использование инъекционных анкеров для укрепления горных пород и
              предотвращения обрушений */}
              {t("anchorSystems.description1")}
            </p>
            <ul className="list-none pl-8">
              <li className="relative text-white text-base">
                <span className="absolute -left-6 top-3 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full"></span>
                {/* Применение трубчатых анкеров для создания долговечной поддержки
                в сложных геологических условиях */}
                {t("anchorSystems.description2")}
              </li>
            </ul>
            <div className="md:flex hidden flex-row flex-wrap gap-1 md:flex-row md:items-center">
              <p className="text-base text-nowrap w-fit font-semibold p-[18px] bg-white text-[#1151AB]">
                {t("anchorSystems.durability")}
                {/* долговечность */}
              </p>
              <p className="text-base text-nowrap w-fit font-semibold p-[18px] bg-white text-[#1151AB]">
                {t("anchorSystems.vibrationResistance")}
                {/* устойчивость к вибрациям */}
              </p>
              <p className="text-base text-nowrap w-fit font-semibold p-[18px] bg-white text-[#1151AB]">
                {t("anchorSystems.easyInstallation")}
                {/* легкость в установкеs */}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row ">
          <div className=" relative w-full flex ">
            <Image
              src="/technology/mixer.png"
              objectFit="cover"
              width={669}
              height={438}
              alt="image"
              className="w-full  flex-grow md:h-full"
            />
          </div>
          <div className="md:w-full flex flex-col gap-5 bg-[#1151AB] text-white px-5 py-8 md:px-12 md:py-[104px]">
            <p className="text-[32px] font-semibold">
              {t("crushingEquipment.title")}
              {/* Дробильное оборудование */}
            </p>
            <p className="text-base font-medium">
              {t("crushingEquipment.description1")}
              {/* Композитные материалы увеличивают срок службы деталей в 2-3 раза. */}
            </p>
            <ul className="list-none pl-8">
              <li className="relative text-white text-base">
                <span className="absolute -left-6 top-3 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full"></span>
                {/* Технология оптимизации процесса дробления позволяет сократить
                износ оборудования и снизить эксплуатационные затраты. */}
                {t("crushingEquipment.description2")}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row ">
          <div className=" relative w-full flex ">
            <Image
              src="/technology/conveer.png"
              objectFit="cover"
              width={669}
              height={438}
              alt="image"
              className="w-full flex-grow md:h-full "
            />
          </div>
          <div className="md:w-full flex flex-col gap-5 bg-[#1151AB] text-white px-5 py-8 md:px-12 md:py-[104px]">
            <p className="text-[32px] font-semibold">
              {t("conveyorSystems.title")}
              {/* Конвейерные системы */}
            </p>
            <p className="text-base font-medium">
              {/* Ролики из сверхпрочного полиэтилена: снижение трения и
              энергопотребления */}
              {t("conveyorSystems.description1")}
            </p>
            <ul className="list-none pl-8">
              <li className="relative text-white text-base">
                <span className="absolute -left-6 top-3 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full"></span>
                {/* Ударные ролики для защиты конвейерных лент при транспортировке
                тяжелых грузов. */}
                {t("conveyorSystems.description2")}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row ">
          <div className=" relative w-full flex ">
            <Image
              src="/technology/extractor.png"
              objectFit="cover"
              width={669}
              height={438}
              alt="image"
              className="w-full  flex-grow md:h-full"
            />
          </div>
          <div className="md:w-full flex flex-col gap-5 bg-[#1151AB] text-white px-5 py-8 md:px-12 md:py-[60px]">
            <p className="text-[32px] font-semibold">{t("Crushing.title")}</p>{" "}
            {/* Измельчение */}
            <p className="text-base font-medium">
              {t("Crushing.description")}
            </p>{" "}
            {/* Мельницы — ключевое оборудование для процесса измельчения в горной, химической, строительной и других отраслях. */}
            <p className="text-base font-medium">{t("Crushing.usage")}</p>{" "}
            {/* Они предназначены для переработки различных материалов (руды, угля, цемента и др.), используя энергосберегающие и эффективные технологии. */}
            <ul className="list-none pl-8">
              <li className="relative text-white text-base">
                <span className="absolute -left-6 top-3 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full"></span>
                {t("Crushing.types.Ball")} {/* Шаровые */}
              </li>
              <li className="relative text-white text-base">
                <span className="absolute -left-6 top-3 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full"></span>
                {t("Crushing.types.Rod")} {/* Стержневые */}
              </li>
              <li className="relative text-white text-base">
                <span className="absolute -left-6 top-3 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full"></span>
                {t("Crushing.types.Autogenous")} {/* Самоизмельчения */}
              </li>
              <li className="relative text-white text-base">
                <span className="absolute -left-6 top-3 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full"></span>
                {t("Crushing.types.SemiAutogenous")} {/* Полусамоизмельчения */}
              </li>
              <li className="relative text-white text-base">
                <span className="absolute -left-6 top-3 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full"></span>
                {t("Crushing.types.Vertical")}{" "}
                {/* Вертикальные с перемешиванием мелющей среды */}
              </li>
            </ul>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col md:flex-row ">
          <div className=" relative w-full flex ">
            <Image
              src="/technology/floatation.png"
              objectFit="cover"
              width={669}
              height={438}
              alt="image"
              className="w-full hidden md:block flex-grow md:h-full  object-cover"
            />
            <Image
              src="/technology/floatationMini.png"
              objectFit="cover"
              width={669}
              height={438}
              alt="image"
              className="w-full md:hidden"
            />
          </div>
          <div className="md:w-full flex flex-col gap-5 bg-[#1151AB] text-white px-5 py-8 md:px-12 md:py-[104px]">
            <p className="text-[32px] font-semibold">
              {t("FlotationAndThickening.title")}
            </p>{" "}
            {/* Флотация и сгущение */}
            <p className="text-base font-medium">
              {t("FlotationAndThickening.description")}
            </p>{" "}
            {/* Флотационное оборудование предназначено для эффективного извлечения ценных минералов из руды и очистки различных материалов. */}
            <p className="text-base font-medium">
              {t("FlotationAndThickening.benefits")}
            </p>{" "}
            {/* Поставляемые нами флотационные установки значительно повышают коэффициент извлечения таких полезных ископаемых, как медь, золото, уголь и другие, обеспечивая высокую экономическую эффективность процесса. */}
            <p className="text-base font-medium">
              {t("FlotationAndThickening.advantages")}
            </p>{" "}
            {/* Это оборудование становится незаменимым инструментом для повышения производительности и снижения затрат в горной и металлургической отраслях, обеспечивая надежное и экономичное извлечение ресурсов. */}
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col md:flex-row ">
          <div className=" relative w-full flex ">
            <Image
              src="/technology/bur.png"
              objectFit="cover"
              width={669}
              height={438}
              alt="image"
              className="w-full hidden md:block flex-grow md:h-full  object-cover"
            />
            <Image
              src="/technology/burMini.png"
              objectFit="cover"
              width={669}
              height={438}
              alt="image"
              className="w-full md:hidden"
            />
          </div>
          <div className="md:w-full flex flex-col gap-5 bg-[#1151AB] text-white px-5 py-8 md:px-12 md:py-[104px]">
            <p className="text-[32px] font-semibold">
              {t("DrillingEquipment.title")}
            </p>{" "}
            {/* Буровые установки и инструмент */}
            <p className="text-base font-medium">
              {t("DrillingEquipment.description")}{" "}
              {t("DrillingEquipment.advantages")}
            </p>{" "}
            {/* Буровые станки кернового бурения играют ключевую роль в геологоразведке, обеспечивая качественные образцы для проведения научных исследований и принятия решений по разведке и разработке месторождений. */}
            <p className="text-base font-medium">
              {t("DrillingEquipment.types.Auxiliary")} <br />
              {t("DrillingEquipment.types.ReverseCirculation")} <br />
              {t("DrillingEquipment.types.Tools")}
            </p>{" "}
          </div>
        </div>
        {/*  */}
        {/* <div className="flex flex-col md:flex-row ">
          <div className=" relative w-full flex ">
            <Image
              src="/technology/burStunok.png"
              objectFit="cover"
              width={669}
              height={438}
              alt="image"
              className="w-full "
            />
          </div>
          <div className="md:w-full flex flex-col gap-5 bg-[#1151AB] text-white px-5 py-8 md:px-12 md:py-[104px]">
            <p className="text-[32px] font-semibold">
              {t("DrillingEquipment.types.CoreDrills")}
            </p>{" "}
            Буровые станки колонкового бурения
            <p className="text-base font-medium">
              {t("DrillingEquipment.types.Auxiliary")}
            </p>{" "}
            Вспомогательное буровое оборудование
            <p className="text-base font-medium">
              {t("DrillingEquipment.types.ReverseCirculation")}
            </p>{" "}
            Буровое оборудование с обратной циркуляцией
            <p className="text-base font-medium">
              {t("DrillingEquipment.types.Tools")}
            </p>{" "}
            Обсадные трубы, керноприемники, сверла и буры
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Materials;
