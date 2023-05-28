import Image from "next/image";
import CtaSection from "./components/ctaSection";

export default function Dasboard() {
  return (
    <main>
      <div className="flex space-x-4">
        <CtaSection />

        <div className="mt-32">
          <div className="flex flex-col space-y-16">
            <div>
              <h1 className="font-semibold">Disponibilidade de idiomas</h1>

              <ul className="space-y-4 mt-4">
                <li className="flex items-center font-light">
                  Português{" "}
                  <span className="ml-4">
                    <Image
                      alt="BR"
                      src={
                        "https://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg"
                      }
                      width={30}
                      height={30}
                    />
                  </span>
                </li>
                <li className="flex items-center font-light">
                  Inglẽs{" "}
                  <span className="ml-4">
                    <Image
                      alt="US"
                      src={
                        "https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
                      }
                      width={30}
                      height={30}
                    />
                  </span>
                </li>
                <li className="flex items-center font-light">
                  Espanhol{" "}
                  <span className="ml-4">
                    <Image
                      alt="ES"
                      src={
                        "https://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg"
                      }
                      width={30}
                      height={30}
                    />
                  </span>
                </li>
              </ul>
            </div>

            {/* <div>
              <h1 className="font-semibold">Mecanismo de pesquisa</h1>

              <ul className="space-y-4 mt-4">
                <li>Google Bard</li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>

      <div className="mt-16"></div>
    </main>
  );
}
