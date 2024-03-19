import React from 'react';

const KeywordsFilter = ({ imagesData }) => {
    const allKeywords = Array.from(new Set(imagesData.flatMap((data) => data.keywords)));

    return (
        <div className='flex pt-[80px] whitespace-nowrap overflow-auto bg-gray-700'>
            {allKeywords.map((keyword, index)=>(
                <span
                    key={index}
                    className={`cursor-pointer p-[14px] underline text-sm font-bold text-white hover:text-blue-500`}
                >
                    {keyword}
                </span>
            ))}
        </div>
    );
};

export default KeywordsFilter;
