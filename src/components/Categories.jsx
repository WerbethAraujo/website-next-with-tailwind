import React from 'react';
import HeadLine from './HeadLine';
import CategorySlider from './CategorySlider';

const Categories = () => {
  return (
    <section id='categories' className='bg-slate-200 min-h-[600px] py-16'>
      <div className='container mx-auto h-[680px]'>
        <HeadLine title='Categorias' />
        <CategorySlider />
      </div>
    </section>
  );
};

export default Categories;
