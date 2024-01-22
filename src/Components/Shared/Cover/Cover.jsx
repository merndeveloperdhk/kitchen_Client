import { Parallax } from 'react-parallax';

const Cover = ({image, coverTitle}) => {
    return (

        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={image}
        bgImageAlt="the dog"
        strength={-200}
    >
          <div className="hero h-[420px] md:h-[560px]  ">
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md border-2 rounded px-14 py-6 border-slate-200 bg-black bg-opacity-25">
      <h1 className="mb-5 text-5xl font-bold uppercase">{coverTitle}</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      
    </div>
  </div>
</div>
    </Parallax>
      
    );
};

export default Cover;