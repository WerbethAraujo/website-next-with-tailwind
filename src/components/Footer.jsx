import React from 'react';
import Link from 'next/link';
import {
  FaHome,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-green-600 min-h-[450px] md:h-[250px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row md:justify-between items-center gap-y-5 md:py-16'>
          <div className='flex gap-1 items-center text-xl md:text-2xl font-bold mt-20'>
            <span className='italic text-white'>Art</span>
            <FaHome />
            <span className='italic text-white'>Design</span>
          </div>
          <div>
            <ul className='flex flex-col md:flex-row md:pt-16 text-center gap-8 tracking-wider text-gray-800 font-bold'>
              <li className='hover:text-white'>
                <Link href='/'>Home</Link>
              </li>
              <li className='hover:text-white'>
                <Link href='#products'>Products</Link>
              </li>
              <li className='hover:text-white'>
                <Link href='#categories'>Categories</Link>
              </li>
              <li className='hover:text-white'>
                <Link href='/'>Services</Link>
              </li>
            </ul>
          </div>

          <div className='flex gap-5 items-center md:pt-20'>
            <Link href='#'>
              <FaFacebook
                size={25}
                className='text-gray-700 hover:text-white hover:-translate-y-1.5 duration-300'
              />
            </Link>
            <Link href='#'>
              <FaTwitter
                size={25}
                className='text-gray-700 hover:text-white hover:-translate-y-1.5 duration-300'
              />
            </Link>
            <Link href='#'>
              <FaInstagram
                size={25}
                className='text-gray-700 hover:text-white hover:-translate-y-1.5 duration-300'
              />
            </Link>
            <Link href='#'>
              <FaYoutube
                size={25}
                className='text-gray-700 hover:text-white hover:-translate-y-1.5 duration-300'
              />
            </Link>
          </div>
        </div>
        <p className='text-center text-white'>Designed by Tori&copy;educ</p>
      </div>
    </footer>
  );
};

export default Footer;
