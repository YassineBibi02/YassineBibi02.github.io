import React from 'react';

interface TimelineItem {
    title: string;
    subtitle?: string;
    description: string;
    date: string;
    icon: string;
    bgColor: string;
}

const timelineData: TimelineItem[] = [
   {
      title: "Placeholder",
      subtitle: "PlaceholderPlaceholderPlaceholderPlaceholder",
      description:
        "PlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholder",
      date: "Placeholder",
      icon: "/icons/gamepad.png",
      bgColor: "bg-red-600",
    },
    {
      title: "Placeholder",
      subtitle: "PlaceholderPlaceholderPlaceholderPlaceholder",
      description:
        "PlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholder",
      date: "Placeholder",
      icon: "/icons/gamepad.png",
      bgColor: " bg-amber-800",
    },
    {
      title: "Placeholder",
      subtitle: "PlaceholderPlaceholderPlaceholderPlaceholder",
      description:
        "PlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholder",
      date: "Placeholder",
      icon: "/icons/gamepad.png",
      bgColor: "bg-green-600",
    },
    {
        title: "Born",
        subtitle: "When i was born",
        description:
          "",
        date: "January 2002",
        icon: "/icons/birth",
        bgColor: "bg-pink-100",
      }
];

const Timeline = () => {
  return (
    <div className="relative max-w mx-auto bg-white p-10 shadow-lg h-auto pb-20">
      <h2 className="text-center text-3xl font-medium text-BlackCustom mt-10 mb-20">Timeline</h2>
    
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1"
             style={{ height: "calc(100% + 100px)", top: "-50px", background: "linear-gradient(to bottom, transparent, black 5%, black 95%, transparent 100%)" }}>
        </div>
      
      <div className="relative flex flex-col space-y-10">
        {timelineData.map((item, index) => (
          <div key={index} className={`relative flex items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
            

            {/* Icon on the Center Line */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full ${item.bgColor} shadow-md text-lg z-10`}>
              <img src={item.icon} alt={item.title} className="w-10 h-10" />
            </div>

            {/* Timeline Cards */}
            <div className={`w-4/12 p-4 bg-white border-2 border-[rgba(0,0,0,0.05)] shadow-sm shadow-BlackCustom  rounded-sm ${index % 2 === 0 ? ' mr-48' : 'ml-48'}`}>
              <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
              {item.subtitle && (
                <h4 className="text-md font-semibold text-gray-600">
                  {item.subtitle}
                </h4>
              )}
              <p className="text-gray-700 mt-2">{item.description}</p>
            </div>

            {/* Timeline Date on the Opposite Side */}
            <div className={`w-auto text-gray-500 text-sm font-semibold ${index % 2 === 0 ? 'text-right pr-36' : 'text-left pl-36'}`}>
              {item.date}
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Timeline;