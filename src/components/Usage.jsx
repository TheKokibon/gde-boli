import React from "react";

import "react-vertical-timeline-component/style.min.css";

const Usage = () => {
  return (
    <div id= "usage" className="flex flex-col justify-center text-center items-center">
      <h1 className="text-xl lg:text-2xl ">Upotreba</h1>
      <hr className="w-1/2 mb-6 lg:w-64 self-center border border-blue-700" />

      <div class="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
        <div class="col-span-4 w-full h-full ">
          <div class="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
            <h2 class="text-white text-xl font-medium py-2">
              Preuzmite Aplikaciju
            </h2>
            <p class="text-gray-100 sm:text-sm text-xs">
              Dostupna na Google Play Store-u, ili preko sajta
            </p>
          </div>
        </div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
          <div class="h-full w-1 bg-indigo-300"></div>
          <div class="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">
            1
          </div>
        </div>
        <div class="col-span-4 w-full h-full"></div>

        <div class="col-span-4 w-full h-full"></div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
          <div class="h-full w-1 bg-indigo-300"></div>
          <div class="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">
            2
          </div>
        </div>
        <div class="col-span-4 w-full h-full ">
          <div class="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
            <h2 class="text-white text-xl font-medium py-2">
              Kreirajte Profil
            </h2>
            <p class="text-gray-100 sm:text-sm text-xs">
              Unesite osnovne podatke o sebi ili članovima porodice i kreirajte
              nalog
            </p>
          </div>
        </div>

        <div class="col-span-4 w-full h-full ">
          <div class="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
            <h2 class="text-white text-xl font-medium py-2">Mapirajte Bol</h2>
            <p class="text-gray-100 sm:text-sm text-xs">
              zaberite tačne delove tela, vrstu bola i njegov intenzitet.
            </p>
          </div>
        </div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
          <div class="h-full w-1 bg-indigo-300"></div>
          <div class="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">
            3
          </div>
        </div>
        <div class="col-span-4 w-full h-full"></div>
        <div class="col-span-4 w-full h-full"></div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
          <div class="h-full w-1 bg-indigo-300"></div>
          <div class="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">
            4
          </div>
        </div>
        <div class="col-span-4 w-full h-full ">
          <div class="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
            <h2 class="text-white text-xl font-medium py-2">
              Pratite Svoje Zdravlje
            </h2>
            <p class="text-gray-100 sm:text-sm text-xs">
              Koristite analitiku da pratite svoje simptome kroz vreme.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usage;
