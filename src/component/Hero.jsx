
import background from '../../assets/bg-shadow.png'
export default function Hero({handleClick}) {
  return (
    <div className='w-[95%] mx-auto'>
      <div
        className=" bg-black w-full mx-auto rounded-3xl flex flex-col items-center"
        style={{
            backgroundImage: `url(${background})`,
            width: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',  
            backgroundPosition: 'center',  
          }}
      >
        
        <div className="hero-content text-neutral-content text-center py-12">
          <div className="items-center space-y-10">
            <h1 className="mb-5 text-5xl font-bold">
              {/* img link */}
                <img className="w-[40%] mx-auto mb-6" src="banner-main.png"/>
            </h1>
            <h1 className='text-4xl font-bold text-white text-center mb-4'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className="mb-8">
            Beyond Boundaries Beyond Limits
            </p>
            <button onClick={handleClick} className="btn bg-[#D2E727] text-lg font-bold">Get Claim Free Credit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
