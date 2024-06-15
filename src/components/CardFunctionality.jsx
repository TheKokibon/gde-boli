import React from 'react';

const CardFunctionality = ({ icon: Icon, title, description }) => {
  return (
    <div className='flex flex-col items-center justify-center p-2 m-4 h-64 w-64 border border-[#2563eb] shadow-lg rounded-xl text-center'>
      <Icon className="w-8 h-8 m-4 mb-2" />
      <h2 className='text-md lg:text-xl font-bold mb-1'>{title}</h2>
      <p className='text-sm p-2'>{description}</p>
    </div>
  );
}

export default CardFunctionality;
