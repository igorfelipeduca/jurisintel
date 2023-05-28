import Image from "next/image";
import robot from "./assets/robot.png";
import { Poppins, Inter } from "next/font/google";
import Link from "next/link";
import Header from "./components/header";
import LearnAbout from "./dashboard/components/learnAbout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main>
      <Header />

      <div className="flex justify-between px-32 py-16">
        <div className="flex flex-col">
          <h1 className={`mt-32 text-6xl font-bold ${inter.className}`}>
            Juris<span className="text-teal-600">Intel</span>
          </h1>

          <span className="text-2xl w-[35rem] mt-4">
            Desvendando a Linguagem da Lei: Seu Guia Jurídico Inteligente para
            Dominar os Termos Legais
          </span>

          <div className="mt-12">
            <Link
              href={"/register"}
              className="py-4 px-8 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg cursor-pointer w-[14rem] text-center"
            >
              Comece a usar
            </Link>
          </div>

          <div className="mt-48">
            <h4 className="text-xl">
              Aprenda como funcionamos{" "}
              <span className="text-3xl text-teal-600 font-bold">&darr;</span>
            </h4>
          </div>
        </div>

        <Image
          src={robot}
          alt="Um simpático e engraçado robô advogado com uma estética minimalista, usando uma paleta de cores verde, sobre um fundo branco. O robô deve ter um corpo metálico elegante com linhas e formas simples. Deve ter olhos expressivos com um toque de curiosidade, boca pequena e um par de antenas na cabeça. O advogado-robô deve estar vestido com traje profissional, usando terno verde, gravata e óculos. Sua linguagem corporal deve transmitir confiança e acessibilidade, com um braço ligeiramente estendido como se estivesse gesticulando para iniciar uma conversa. A ilustração deve capturar uma mistura harmoniosa de design minimalista e um toque caloroso e humano, simbolizando a interseção entre lei e inovação."
          className="z-10"
          height={600}
          width={600}
        />
      </div>

      <div>
        <LearnAbout />
      </div>
    </main>
  );
}
