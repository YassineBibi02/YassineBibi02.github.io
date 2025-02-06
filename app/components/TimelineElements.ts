// /data/timelineElements.ts
interface TimelineElement {
    icon: string;
    bgColor: string;
    title: string;
    subtitle?: string;
    description: string;
    date: string;
  }


  const timelineElements: TimelineElement[] = [
    {
      icon: "images/Leibniz.png",
      bgColor: "blue",
      title: "Started Studying Computer Engineering",
      subtitle: "B.Sc Technische Informatik ",
      description: "Started Studying Computer Engineering at Leibniz Universität Hannover",
      date: "September 2021",
    },
    {
      icon: "images/ContinentalTrans.png",
      bgColor: "orange",
      title: "Working Student – Digitalization & Smart Factory",
      subtitle: "Continental AG",
      description: "At Continental, I was part of strategic projects focused on Smart Factory and Digitalization, working on automation and data-driven solutions for production environments.",
      date: "November 2022",
    },
    {
      icon: "images/wtslogored.jpeg",
      bgColor: "white",
      title: "Working Student - Power platforms",
      subtitle: "Wts digital GmbH",
      description: "At Wts. my main responsability is to help build power platform tools for clients and internal projects",
      date: "November 2024",
    },
    {
      icon: "images/TIB.png",
      bgColor: "white",
      title: "Completion of my Bachelor thesis",
      subtitle: "Question answering using chart figures in scientific articles (Note 2.0)",
      description: "Finished my bachelor degree with a note of 2.8 within the expected 6 semesters.",
      date: "Dezember 2024",
    },
    {
      icon: "images/Leibniz.png",
      bgColor: "white",
      title: "Finished my B.Sc Degree",
      subtitle: "B.Sc Technische Informatik (Note 2.8)",
      description: "Finished my bachelor degree with a note of 2.8 within the expected 6 semesters.",
      date: "January 2025",
    },
  ];
  
  export default timelineElements;
  