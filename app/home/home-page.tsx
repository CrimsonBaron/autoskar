import { Scroll } from "lucide-react";
import { Card, Carousel } from "~/components/ui/carousel";
import { PricingCalculator } from "~/components/ui/pricing-calculator";
import { ScrollingImages } from "~/components/ui/scrolling-images";
import { DefaultLayout } from "~/layout/default-layout";

const data = [
  {
    description: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    description: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    description: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
 
  {
    description: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    description: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    description: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const images = [
  "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]


export function HomePage() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));



  return (
    <DefaultLayout>
      <div className="flex sm:flex-row flex-col md:p-15">
        <div className="flex-1">
        <h1 className="text-4xl font-bold leading-tight tracking-wide text-gray-800 md:text-5xl">
          Vaše auto, naše priorita, <br/>
          spolehlivost a péče na prvním místě.
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          jen u Autoskar
        </p>
        </div>
        <div className="flex-1">
          {/* add 3d car model some cartoonish stuff */}
        </div>
      </div>
      <div className="md:p-15 py-6 flex flex-col justify-center mx-auto h-[42rem]">
        <h1 className="text-5xl font-medium leading-tight tracking-wide flex-1 text-center">
          Kompletní péče o Váš vůz
        </h1>
        <div className="container mx-auto flex flex-col md:flex-row gap-6 pt-10 h-full">

          <div className="flex-1 h-full bg-gray-800 text-white rounded-3xl p-6">
            {/* Background image or color can go here */}
          </div>

          <div className="flex-1 h-full bg-blue-500 text-white rounded-3xl p-6">
            {/* Background image or color can go here */}
          </div>

          <div className="flex-1 h-full bg-orange-500 text-white rounded-3xl p-6">
            {/* Background image or color can go here */}
          </div>

        </div>
      </div>
      <div className="md:p-20 p-2 mx-auto flex flex-col justify-center items-center" aria-label="about-us">
        <div className="md:p-10 p-4 text-center md:w-xl  flex flex-col gap-2 text-black/60 border border-black/20 rounded-3xl">
          <h2 className="text-2xl ">O nás</h2>
          <p>Už od roku 2007 poskytuji komplexní služby v oblasti autoservisu a pneuservisu. Specializuji se na širokou škálu úkonů, od autodiagnostiky a odhalování závad pomocí moderních technologií, jako je osciloskop, až po čištění DPF a kontrolu stavu vozidel s DPF a SCR (Eolys, AdBlue).</p>
          <p>Jako zkušený automechanik a majitel servisu, se osobně starám o opravy alternátorů, startérů a provádím veškeré standardní automechanické (servisní prohlídky) a karosářské práce (včetně oprav po nehodách).</p>
          <p>Díky kompletně nově vybavené dílně a dlouholetým zkušenostem v oboru jsem zárukou kvalitních služeb a úspěšného vyřešení jakéhokoli problému s vaším vozidlem.</p>
        </div>
      </div>
      <div className="md:p-10 py-6">
        <h1 className="text-5xl font-medium leading-tight tracking-wide flex-1  text-center">
            A to není vše!
        </h1>
        <div className="md:p-5">
          <Carousel items={cards} />
        </div>
      </div>
      <div className="md:p-10 py-6">
        <h1 className="text-5xl font-medium leading-tight tracking-wide flex-1  text-center">
          Nahlédněte do naší dílny 
        </h1>
        <div className="md:p-20 mt-10 bg-white rounded-3xl overflow-hidden">
          <ScrollingImages images={images} />
        </div>
      </div>
      <div className="md:p-10 py-6">
        <h1 className="text-5xl font-medium leading-tight tracking-wide flex-1  text-center">
          Ceník
        </h1>
        <div className="mt-10 cursor-pointer">
          <div className="container mx-auto py-8 bg-gray-100 p-12 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 p-4 text-center rounded-3xl">
                <h3 className="text-lg font-bold">Diagnostika vozu základní proměření</h3>
                <p className="text-2xl font-semibold">500 Kč</p>
              </div>
              <div className="border border-gray-200 p-4 text-center rounded-3xl">
                <h3 className="text-lg font-bold">Vyleštění předních a zadních světel</h3>
                <p className="text-2xl font-semibold">500 Kč</p>
              </div>
              <div className="border border-gray-200 p-4 text-center rounded-3xl">
                <h3 className="text-lg font-bold">Kontrola klima a doplnění oleje do klima</h3>
                <p className="text-2xl font-semibold">500 Kč</p>
              </div>
              <div className="border border-gray-200 p-4 text-center rounded-3xl">
                <h3 className="text-lg font-bold">Kompletní přezutí pneu na stejný disk (1 kolo)</h3>
                <p className="text-2xl font-semibold">200 Kč</p>
              </div>
              <div className="border border-gray-200 p-4 text-center rounded-3xl">
                <h3 className="text-lg font-bold">Doplnění chladiva 134a (1 gram)</h3>
                <p className="text-2xl font-semibold">2 Kč</p>
              </div>
              <div className="border border-gray-200 p-4 text-center rounded-3xl">
                <h3 className="text-lg font-bold">Vyčištění vozu ozónovačem</h3>
                <p className="text-2xl font-semibold">500 Kč</p>
              </div>
              <div className="border border-gray-200 p-4 text-center rounded-3xl">
                <h3 className="text-lg font-bold">Měření osciloskopem</h3>
                <p className="text-2xl font-semibold">1500 Kč</p>
              </div>
              <div className="border border-gray-200 p-4 text-center rounded-3xl">
                <h3 className="text-lg font-bold">Montáž tažného zařízení</h3>
                <p className="text-2xl font-semibold">1500-2000 Kč</p>
              </div>
              <div className="border border-gray-200 p-4 text-center rounded-3xl">
                <h3 className="text-lg font-bold">Příprava a provedení STK a emisí</h3>
                <p className="text-2xl font-semibold">1500 Kč</p>
              </div>
              <div className="border border-gray-200 p-4 text-center rounded-3xl">
                <h3 className="text-lg font-bold">Hodina opravy vozu</h3>
                <p className="text-2xl font-semibold">500 Kč</p>
              </div>
            </div>
          </div>
          <div className="mt-6 px-10">
              <p className="text-gray-600">
                * Uvedené ceny jsou pouze orientační. Konečná cena se může lišit v závislosti na specifických
                potřebách Vašeho vozu. Pro přesnou cenovou nabídku nás neváhejte <span className="font-bold underline cursor-pointer">kontaktovat</span>.
              </p>
          </div>
        </div>
        <div className="md:p-10 py-6">
          <h1 className="text-5xl font-medium leading-tight tracking-wide flex-1  text-center">
            Kontakt
          </h1>
          <div className="flex flex-row gap-5 mt-10">
            <div className="rounded-3xl flex-1 bg-white">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d565.3092516649582!2d15.12666920807177!3d50.4394771039726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470ea95c74fb9165%3A0x8c291ac8c9cc7d7c!2sAutoservis%20Oskar%20Ki%C5%A1%C5%A1!5e0!3m2!1sen!2scz!4v1739808544255!5m2!1sen!2scz" width="600" height="450" className="w-full rounded-3xl" loading="eager" ></iframe>
            </div>
            <div className="rounded-3xl w-1/3 bg-black text-white p-10 flex flex-col items-center justify-center">
              <div className="p-5 border rounded-full w-2/5">
                avater
              </div>
              <h2>Oskar Kišš</h2>
              <button className="btn-outline text-white">
                Volejte hned
              </button>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
