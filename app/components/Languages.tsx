import React from 'react';

const Languages = () => {
  // Example language skills
  const languageSkills = [
    { name: 'Arabic', level: 100 },
    { name: 'French', level: 80 },
    { name: 'English', level: 100 },
    { name: 'German', level: 75 }
    ,
    ,
  ];

  return (
    <div className="bg-white py-10">
      <div className="w-full max-w-4xl px-[clamp(8px,10%,24px)] mx-auto rounded-3xl p-6">
        <h2 className="text-3xl font-bold mb-6 text-center  text-BlackCustom">Language Skills</h2>

        {languageSkills.map((lang, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-lg font-medium  text-BlackCustom">{lang.name}</span>
              <span className="text-base text-BlackCustom">{lang.level}%</span>
            </div>
            <progress
              className="progress progress-accent w-full h-4"
              value={lang.level}
              max="100"
            ></progress>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
