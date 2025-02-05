'use client'

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import timelineElements from './TimelineElements';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
  return (
  <div className='backdrop-blur'>
    <div className="py-10 px-[clamp(8px,10%,24px)] max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-WhiteCustom text-center mb-10">Timeline</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              iconStyle={{ backgroundColor: element.bgColor, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              icon={
                
                  <img src={element.icon} className="w-15 h-15 rounded-full" />
                
              }
              contentStyle={{ background: "white", color: '#fff' }}
              contentArrowStyle={{ borderRight: `7px solid white` }}
            >
              <h3 className="text-xl text-BlackCustom font-semibold">{element.title}</h3>
              <h5 className="text-sm  text-BlackCustom font-medium mb-2">{element.subtitle}</h5>
              <p className="text-sm  text-BlackCustom">{element.description}</p>
              
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  </div>
  );
};

export default Timeline;