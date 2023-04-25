import Link from 'next/link';
import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [toggleIconMenu, setToggleIconMenu] = useState(false);

  return (
    <section className='fixed bg-white top-0 w-[100%] z-20'>
      <nav className='container mx-auto flex justify-between items-center p-4'>
        <div className='flex gap-1 items-center text-xl md:text-2xl font-bold'>
          <span className='italic'>Art</span>
          <FaHome />
          <span className='italic text-green-700'>Design</span>
        </div>
        <ul className='hidden md:flex gap-10 tracking-wider text-gray-600 font-bold'>
          <li className='hover:text-green-700'>
            <Link href='/'>Home</Link>
          </li>
          <li className='hover:text-green-700'>
            <Link href='/'>Products</Link>
          </li>
          <li className='hover:text-green-700'>
            <Link href='/'>Categories</Link>
          </li>
          <li className='hover:text-green-700'>
            <Link href='/'>Services</Link>
          </li>
        </ul>
        <div>
          <button className='hidden md:block border border-green-700 px-4 py-1 text-green-700 rounded-md font-bold hover:bg-green-700 hover:text-white'>
            Contact
          </button>
        </div>
        {toggleIconMenu ? (
          <AiOutlineClose
            onClick={() => setToggleIconMenu(!toggleIconMenu)}
            size={30}
            className='md:hidden block cursor-pointer'
          />
        ) : (
          <FiMenu
            onClick={() => setToggleIconMenu(!toggleIconMenu)}
            size={30}
            className='md:hidden block cursor-pointer'
          />
        )}
      </nav>
      <nav>
        {/* {responsive navbar} */}
        <ul
          className={`md:hidden flex flex-col w-[70%] h-screen fixed bg-black/70 text-white top-[60px] right-0 ${
            toggleIconMenu ? 'right-[0]' : 'right-[-100%]'
          } duration-300`}
        >
          <li className='hover:text-green-700 p-5'>
            <Link href='/'>Home</Link>
          </li>
          <li className='hover:text-green-700 p-5'>
            <Link href='/'>Products</Link>
          </li>
          <li className='hover:text-green-700 p-5'>
            <Link href='/'>Categories</Link>
          </li>
          <li className='hover:text-green-700 p-5'>
            <Link href='/'>Services</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
