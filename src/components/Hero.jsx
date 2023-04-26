import Button from '@/components/Button';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className='bg-[url("/sala.jpg")] h-screen bg-cover bg-no-repeat bg-center bg-fixed flex items-center relative'>
      <div className='absolute inset-0 bg-black/50' />
      <div className='container mx-auto px-4 z-10'>
        <div className='text-center text-white flex flex-col gap-[40px]'>
          <div>
            <h1 className='text-3xl md:text-3xl lg:text-5xl font-semibold tracking-wider'>
              Design Your Dream
            </h1>
          </div>
          <div>
            <h2 className='text-3xl md:text-3xl lg:text-5xl font-semibold'>
              <span className='text-green-600'>Home</span> Very Easity
            </h2>
          </div>
          <div className='bg-green-600 h-[2px] w-[125px] mx-auto' />
          <div>
            <p className='text-sm md:text-xl text-gray-300 tracking-widest'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
          <div>
            <Button link='#' text='Explore Products' />
          </div>
        </div>
      </div>
      <div className='hidden absolute left-20 top-32 z-10 md:flex flex-col gap-5 items-center'>
        <div className='bg-green-600 w-[1.5px] h-[250px]' />
        <Link href='#'>
          <FaFacebook
            size={25}
            className='text-green-600 hover:-translate-x-1.5 duration-300'
          />
        </Link>
        <Link href='#'>
          <FaTwitter
            size={25}
            className='text-green-600 hover:-translate-x-1.5 duration-300'
          />
        </Link>
        <Link href='#'>
          <FaInstagram
            size={25}
            className='text-green-600 hover:-translate-x-1.5 duration-300'
          />
        </Link>
        <Link href='#'>
          <FaYoutube
            size={25}
            className='text-green-600 hover:-translate-x-1.5 duration-300'
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
