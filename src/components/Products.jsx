import React from 'react';
import HeadLine from './HeadLine';
import Card from './Card';

const Products = () => {
  return (
    <section id='products' className='max-w-[1640px] mx-auto p-4 py-12'>
      <HeadLine title='nossos produtos' />
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-20 py-12'>
        <Card image='/img1.jpg' title='Produto 01' />
        <Card image='/img2.jpg' title='Produto 02' />
        <Card image='/img3.jpg' title='Produto 03' />
        <Card image='/img1.jpg' title='Produto 04' />
        <Card image='/img2.jpg' title='Produto 05' />
        <Card image='/img3.jpg' title='Produto 06' />
      </div>
    </section>
  );
};

export default Products;
