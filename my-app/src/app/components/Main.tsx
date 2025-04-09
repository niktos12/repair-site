import Header from "./Header";
import Image from "next/image";
export default function Main() {
  return (
    <div className="flex flex-col justify-between h-[1000px]">
      <Header />
      <div className="flex flex-col gap-[60px] mx-[50px]">
        <h1 className="text-9xl break-words font-medium">
          Ремонт и <br /> отделка в Сочи
        </h1>
      </div>
      <div className="w-full h-[1px] bg-[#FFFBFC]"></div>
      <div className="flex flex-row items-baseline gap-[18px] mx-[50px]">
        <Image src="/Romb.svg" alt="Romb" width={18} height={18} />
        <p className="text-lg">
          Отремонтируем ваш дом,
          <br /> квартиру или комнату
        </p>
      </div>
      <div className="flex flex-row justify-end items-center gap-14 mx-[50px]">
        <p className="text-3xl">
          Все виды услуг по ремонту,
          <br /> отделке и проектированию
        </p>
        <button className="bg-[#FFFBFC] text-black text-lg px-[141px] py-7 rounded-full">
          Заказать ремонт
        </button>
      </div>
    </div>
  );
}
