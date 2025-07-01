import { Carousel, Image } from 'antd';

const images = [
  '/images/k5_hds02/Post1.jpg',
  '/images/k5_hds02/Post2.jpg',
  '/images/k5_hds02/Post3.jpg',
  '/images/k5_hds02/Post4.jpg',
];

export default function ShopHomepage() {
  return (
    <div className="w-full relative">
  <Carousel autoplay effect="scrollx" autoplaySpeed={5000}>
    {images.map((src, idx) => (
      <div key={idx} className="w-full h-screen flex overflow-hidden">
        <Image
          src={src}
          alt={`Slide ${idx}`}
          width="100%"
          className='object-cover'
          preview={false}
        />
      </div>
    ))}
  </Carousel>
</div>
  );
}
