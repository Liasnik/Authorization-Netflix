import BgProvider from "./components/BgProvider";
// import { Input } from "./components/Input";
import Navbar from "./components/Navbar";
import ButtonMainScreen from "./components/ButtonMainScreen";
import InputMainScreen from "./components/InputFirstScreen";
import InputFirstScreen from "./components/InputFirstScreen";

export default function FirstPage() {
  return (
    <BgProvider removeBgOnMobile>
      <div className="flex flex-col items-center">
        <Navbar />
        <div className="max-w-[1200px]  flex flex-col justify-center items-center pt-80 pb-10 px-5 text-center gap-10">
          <h1 className="font-extrabold text-white text-5xl leading-tight">
            Фільми, серіали й інший контент без&nbsp;обмежень
          </h1>
          <h3 className="font-normal text-white text-3xl">
            Дивіться будь-де. Скасувати підписку можна будь-коли.
          </h3>
          <p className="font-normal text-white text-2xl">
            Готові до перегляду? Введіть адресу електронної пошти, щоб оформити
            або поновити підписку.
          </p>
        </div>

        <div className="flex flex-row gap-2">
          <InputFirstScreen />
          <ButtonMainScreen />
        </div>
      </div>
    </BgProvider>
  );
}
