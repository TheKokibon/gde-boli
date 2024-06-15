import React from "react";
import CardFunctionality from "./CardFunctionality";
import { Target, ListTodo, LineChart, WifiOff,ContactRound, BrainCog  } from "lucide-react";

const Functionality = () => {
  return (
    <div id="funct" className="flex flex-col justify-center items-center p-4 m-4 mt-10 ">
      <h1 className='text-xl lg:text-2xl '>Funkcionalnosti</h1>
      <hr className="w-1/2 mb-6 lg:w-64 self-center border border-blue-700" />
      <div className="flex flex-row flex-wrap justify-center text-center">
        <CardFunctionality
          icon={Target}
          title={"Precizna lokalizacija bola"}
          description={
            "Selektujte tačne delove tela gde osećate bol - šaka, lakat, podlaktica i više. Naša mapa tela omogućava precizno označavanje."
          }
        />
        <CardFunctionality
          icon={ListTodo}
          title={"Vrsta i intenzitet bola"}
          description={
            "Evidentirajte vrstu bola (oštar, tup, stalni, trenutni) i ocenite njegov intenzitet na skali od 1 do 10."
          }
        />
        <CardFunctionality
          icon={BrainCog }
          title={"Lako i intuitivno"}
          description={
            "Korišćenje aplikacije je brzo i jednostavno koristeći intuitivnu interakciju na ekranu."
          }
        />

        <CardFunctionality
          icon={WifiOff }
          title={"Offline funkcionalnost"}
          description={
            "Aplikacija radi i bez internet konekcije. Podaci se čuvaju lokalno i sinhronizuju kada se ponovo povežete na mrežu."
          }
        />

        <CardFunctionality
          icon={ContactRound }
          title={"Više korisničkih profila"}
          description={
            "Jednostavno prebacivanje između profila omogućava korisnicima da evidentiraju bol za sebe i svoju decu."
          }
        />

        <CardFunctionality
          icon={LineChart}
          title={"Praćenje i analitika"}
          description={
            "Pratite svoje simptome kroz vreme uz pomoć grafikona. Pogledajte koje vas oblasti najčešće bole i analizirajte svoje zdravstvene trendove."
          }
        />
      </div>
    </div>
  );
};

export default Functionality;
