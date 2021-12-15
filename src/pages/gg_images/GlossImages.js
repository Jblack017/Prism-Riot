import React from "react";

export default function GlossImages() {
  const renderImages = () => {
    const imageNumbers = [
      840, 841, 843, 845, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857,
      859, 860, 861,
    ];

    return imageNumbers.map(num => {
      return (
        <img
          className='h-1/2 w-1/2 snap-center'
          src={`https://haubby-production-v1.s3.amazonaws.com/portfolio_images/images/000/607/${num}/medium/data`}
          alt={`PrismRiot Customer ${num}`}
        />
      );
    });
  };

  return (
    <div className='flex flex-nowrap overflow-scroll space-x-1.5 snap-x w-screen'>
      {renderImages()}
    </div>
  );
}
