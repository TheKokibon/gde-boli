import React from 'react'
import doctor from "../assets/doctor.png"
const Zasto = () => {
  return (
    <div id="zasto" className='flex flex-col justify-center text-center mt-10 p-4'>
        <h1 className='text-xl lg:text-2xl '>Zašto Mapiranje Bola?</h1>
        <hr className='w-1/2 lg:w-1/6 self-center border border-blue-700'/>
        <div className='flex flex-col-reverse lg:flex-row justify-between'>
        <img src={doctor} alt="doctor" className='w-96 lg:w-auto self-center'/>
            <p className='w-full lg:w-1/2 p-4 text-md lg:text-lg m-auto text-left'>
            Naša aplikacija omogućava pacijentima i roditeljima da jednostavno i precizno evidentiraju bolove. Bilo da ste pacijent koji želi da prati svoje simptome ili roditelj koji prati zdravlje svog deteta, naš alat vam nudi intuitivno i detaljno mapiranje bola. Doktori koriste standardizovane skale za procenu bola, a naša aplikacija omogućava da te podatke lako zabeležite i podelite sa svojim lekarom.
            </p>
            
        </div>


    </div>
  )
}

export default Zasto