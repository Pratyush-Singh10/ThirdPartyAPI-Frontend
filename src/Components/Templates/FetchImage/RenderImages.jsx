import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import KeywordsFilter from '../KeywordsFilter/KeywordsFilter';

function RenderImages({imagesData=[], loaded}) {
  return (
    <div >
      {loaded ? (
        <div>
          <KeywordsFilter imagesData={imagesData}/>
          <div className='pt-[40px] pl-[20px] h-full grid grid-cols-3 gap-5 bg-black'>
            {imagesData.map((data, index) => (
              <div key={index} className="relative">
                <img
                  className='h-[200px] w-[400px] my-5 shadow-customShadow object-contain rounded-lg cursor-pointer z-0 transition-transform ease-in-out duaration-[5000] hover:scale-[1.2] hover:delay-800'
                  src={data.imageURL}
                  alt={data.title}
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-75 text-white text-sm font-bold py-1 px-2 transition-opacity duration-300 opacity-100">
                  {data.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className='pt-[100px] h-full pl-8 grid grid-cols-3 gap-5 bg-black'>
          {Array.from({length:10},(_, index) => (
              <SkeletonTheme key={index} baseColor='' highlightColor='#3f5869' style={{padding:'10px'}}>
                <Skeleton height={200} width={400} duration={6}/>
              </SkeletonTheme>
          ))}
        </div>
      )
      }
    </div>
  );
}

export default RenderImages;
