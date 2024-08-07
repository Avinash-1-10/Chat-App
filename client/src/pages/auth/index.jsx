import React from 'react';
import Victory from '../../assets/victory.svg';

const Auth = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className='h-[80vh] w-[80vw] bg-white border-2 text-opacity-90 shadow-2xl md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2'>
        <div className='flex flex-col gap-10 items-center justify-center'>
          <div className='flex justify-center items-center flex-col'>
            <div className='flex justify-center items-center'>
              <h1 className='text-5xl font-bold md:text-6xl'>Welcome</h1>
              <img src={Victory} alt='victory svg' className='h-[100px]' />
            </div>
            <p className='font-medium text-center'>
              Fill in the details to get started with the best chat app!
            </p>
          </div>
          <div className='flex justify-center items-center w-full'>
            h
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
