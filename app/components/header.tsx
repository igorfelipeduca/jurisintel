import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Header() {
  return (
    <header className="py-10 px-32">
      <div className="flex justify-between">
        <h1 className={`font-medium text-xl`}>
          <span className="font-bold text-teal-600">Juris</span>Intel
        </h1>

        <div className="flex items-center space-x-4">
          <Link href={"/login"} className="font-medium hover:text-teal-700">
            Login
          </Link>

          <Link
            href={"/register"}
            className="py-2 px-4 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg cursor-pointer"
          >
            Criar conta
          </Link>
        </div>
      </div>
    </header>
  );
}
