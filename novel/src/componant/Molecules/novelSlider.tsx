// src/components/Molecules/novelSlider.tsx

import React from 'react';
import Slider from 'react-slick';
import { BookType } from '@/interface/bookTypes';

interface NovelSliderProps {
  books: BookType[];
}

const NovelSlider: React.FC<NovelSliderProps> = ({ books }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {books.map((book) => (
          <div key={book.title}>
            {book.cover_i && (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
                style={{ width: '100%' }}
              />
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NovelSlider;
