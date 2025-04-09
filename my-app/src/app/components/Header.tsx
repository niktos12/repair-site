import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <div className="flex justify-between items-center py-2.5 px-[50px]">
      <div className="flex items-end gap-3">
        <Image src="/Exclude.svg" alt="logo" width={58} height={47} />
        <p className="leading-none text-xl">
          Сочи <br /> Ремонт
        </p>
      </div>
      <div className="flex flex-row gap-[30px]">
        <Link
          className="text-lg text-white hover:text-blue-400 transition-colors duration-300"
          href="/catalog"
        >
          Каталог
        </Link>
        <Link
          className="text-lg text-white hover:text-blue-400 transition-colors duration-300"
          href="/portfolio"
        >
          Портфолио
        </Link>
        <Link
          className="text-lg text-white hover:text-blue-400 transition-colors duration-300"
          href="/promotions"
        >
          Акции
        </Link>
        <Link
          className="text-lg text-white hover:text-blue-400 transition-colors duration-300"
          href="/about"
        >
          О компании
        </Link>
        <Link
          className="text-lg text-white hover:text-blue-400 transition-colors duration-300"
          href="/contacts"
        >
          Контакты
        </Link>
      </div>
      <div className="flex flex-row gap-10">
        <a
          className="text-lg text-white hover:text-blue-400 transition-colors duration-300 underline"
          href="tel:+79317240942"
        >
          +7 (931) 724 09 42
        </a>
        <a
          className="text-lg text-white hover:text-blue-400 transition-colors duration-300 underline"
          href="/order"
        >
          Оформить заявку
        </a>
      </div>
    </div>
  );
}
