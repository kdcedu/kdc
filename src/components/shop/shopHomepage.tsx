import { Carousel, Image } from 'antd';

const images = [
  '/images/k8/banner_1.jpg',
  '/images/k8/banner_2.jpg',
  '/images/k8/banner_3.jpg',
  '/images/k8/banner_4.jpg',
  '/images/k8/banner_5.jpg',
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
