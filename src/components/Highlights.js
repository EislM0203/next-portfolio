"use client";
import { useState } from 'react';

export const Highlights = ({ highlights }) => {
  const [isExtended, setIsExtended] = useState(false);

  return (
    <>
      <button className="w-full flex justify-between items-center p-3 bg-gray-200 text-gray-700" onClick={() => setIsExtended(!isExtended)}>
        <span className="font-bold text-gray-600">Highlights</span>
        <svg className={`${isExtended ? 'transform rotate-180' : ''} h-4 w-4 text-gray-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isExtended && (
        <div className="p-3 bg-white grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(highlights).map(([category, skills]) => (
            <div key={category}>
              <h4 className="text-gray-600">{category}</h4>
              <ul className="list-disc text-gray-500">
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </>
  );
};