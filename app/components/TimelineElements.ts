// /data/timelineElements.ts
interface TimelineElement {
    key: number;
    icon: string;
    bgColor: string;
    title: string;
    subtitle?: string;
    description: string;
    date: string;
  }


  const timelineElements: TimelineElement[] = [
    {
      key: 1,
      icon: "/Continental.png",
      bgColor: "bg-amber-500",
      title: "Software Engineer",
      subtitle: "Tech Corp",
      description: "Developed scalable applications using modern tech stacks.",
      date: "Jan 2020 - Present",
    },
    {
      key: 2,
      icon: "/Leibniz.png",
      bgColor: "bg-white",
      title: "Bachelor of Science",
      subtitle: "University of Technology",
      description: "Graduated with honors in Computer Science.",
      date: "Sep 2015 - May 2019",
    },
  ];
  
  export default timelineElements;
  