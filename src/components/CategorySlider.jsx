import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper';

import Slider1 from '../../public/slider1.jpg';
import Slider2 from '../../public/slider2.jpg';
import Slider3 from '../../public/slider3.jpg';

import 'swiper/css/navigation';
import 'swiper/css';
import Image from 'next/image';
import Button from './Button';

const categories = [
  {
    name: 'Slider1',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don',
    image: Slider1,
    btnText: 'Explore',
  },
  {
    name: 'Slider2',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don',
    image: Slider2,
    btnText: 'Explore',
  },
  {
    name: 'Slider3',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don',
    image: Slider3,
    btnText: 'Explore',
  },
];

const CategorySlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        700: {
          slidesPerView: 1,
        },
      }}
      className='categorie-slides min-h-[660px]'
    >
      {categories.map((category, idx) => (
        <SwiperSlide
          className='bg-slate-300 shadow-md min-h-[480px] rounded-md py-16 px-8 mt-10'
          key={idx}
        >
          <div className='flex flex-col gap-y-5 md:flex-row md:gap-x-16'>
            <Image src={category.image} width={500} height={400} />
            <div className='flex flex-col gap-y-5'>
              <div className='text-2xl font-medium gap-x-2 flex items-center'>
                {category.name}
              </div>
              <div className='h-[3px] w-[40px] bg-green-600 rounded' />
              <div className='text-[20px] text-gray-600'>
                {category.description}
              </div>
              <div>
                <Button link='#' text={category.btnText} />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CategorySlider;
