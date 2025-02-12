import { DefaultLayout } from "~/layout/default-layout";

export function HomePage() {
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
      <div className="md:p-15 py-6 flex flex-col justify-center mx-auto w-fit h-fit">
        <h1 className="text-5xl font-medium leading-tight tracking-wide flex-1 text-center">
          Kompletní péče o Váš vůz
        </h1>
        <div className="container mx-auto flex flex-col md:flex-row gap-6 pt-10">

          <div className="w-10 h-10 bg-gray-800 text-white rounded-lg p-6">
            {/* Background image or color can go here */}
          </div>

          <div className="w-10 h-10 bg-blue-500 text-white rounded-lg p-6">
            {/* Background image or color can go here */}
          </div>

          <div className="w-10 h-10 bg-orange-500 text-white rounded-lg p-6">
            {/* Background image or color can go here */}
          </div>

        </div>
      </div>
    </DefaultLayout>
  );
}
