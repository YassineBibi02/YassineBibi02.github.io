import React from "react";

interface TimelineItem {
  icon: string;
  title: string;
  subtitle?: string;
  description: string;
  date: string;
  bgColor: string;
}

const timelineData: TimelineItem[] = [
  {
    icon: "/path/to/heart-icon.png",
    title: "Craftathon 2018",
    description: "During Christmas, I helped with Craftathon 2018! This time we were able to raise $1,144. Like in 2017, I mainly worked as a backend developer.",
    date: "December 2018",
    bgColor: "bg-red-500",
  },
  {
    icon: "/path/to/triathlon-icon.png",
    title: "Portugal Ultra Triathlon",
    subtitle: "Another volunteering work",
    description: "I designed a website for Portugal Ultra Triathlon, an Adventure for Charity and a triple ironman triathlon. Its mission is to challenge participants’ limits and their resilience, generate social value and support local communities. I was behind the entire internet presence of the event, from the website itself down to the donation system and sysadmin work (setting up emails, custom domains, etc).",
    date: "May & June 2018",
    bgColor: "bg-blue-500",
  },
  {
    icon: "/path/to/minecraft-icon.png",
    title: "JARCraftinator",
    subtitle: "A custom made Minecraft server software",
    description: "After Craftathon ended, I didn’t have anything to do, so I made myself a challenge: create a fully working Minecraft server software from scratch. The goal? Learn more about how socket connections work in Java. And after a week I got my first loaded chunk! The project is far from finished and it will probably stay that way, but it was fun to do nonetheless.",
    date: "August 2017",
    bgColor: "bg-teal-500",
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="relative mx-auto px-[clamp(8px,10%,24px)] max-w-7xl py-5 h-auto pb-20">
        <h2 className="text-center text-3xl font-medium text-black mt-10 mb-20">Timeline</h2>

        <div className="relative">
          {/* Vertical Line */}
          <div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-black"
            style={{ height: "100%" }}
          ></div>

          <div className="flex flex-col space-y-16">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center w-full ${
                  index % 2 === 0
                    ? "md:flex-row-reverse md:justify-start"
                    : "md:flex-row md:justify-end"
                } flex-row justify-start`}
              >
                {/* Icon */}
                <div
                  className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 items-center justify-center rounded-full ${item.bgColor} shadow-md z-10`}
                >
                  <img src={item.icon} alt={item.title} className="w-6 h-6" />
                </div>

                {/* Timeline Card */}
                <div
                  className={`w-full md:max-w-md p-6 bg-white border border-gray-200 shadow-md rounded-lg ${
                    index % 2 === 0 ? "md:mr-20" : "md:ml-20"
                  }`}
                >
                  <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                  {item.subtitle && (
                    <h4 className="text-md font-semibold text-gray-600">
                      {item.subtitle}
                    </h4>
                  )}
                  <p className="text-gray-700 mt-2">{item.description}</p>
                  <p className="text-gray-500 text-sm font-semibold mt-4">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
