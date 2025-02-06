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
    icon: "images/De.png",
    bgColor: "black",
    title: "Arrived in Germany",
    subtitle: "",
    description:
      "Relocated to Germany to pursue higher education and professional opportunities in the field of computer engineering.",
    date: "December 2020",
  },
  {
    icon: "images/Leibniz.png",
    bgColor: "blue",
    title: "Started Studying Computer Engineering",
    subtitle: "B.Sc Technische Informatik ",
    description:
      "Enrolled in the Bachelor of Science program in Computer Engineering at Leibniz Universität Hannover, focusing on software development, system architecture, and digital technologies.",
    date: "September 2021",
  },
  {
    icon: "images/ContinentalTrans.png",
    bgColor: "orange",
    title: "Working Student – Digitalization & Smart Factory",
    subtitle: "Continental AG",
    description:
      "Contributed to automation and digitalization initiatives at Continental AG, focusing on optimizing workflows and improving efficiency across global operations. Developed data-driven tools and automated processes to reduce manual effort and enhance productivity.",
    date: "March 2022",
  },
  {
    icon: "images/YBlogoBlackOnWhite.png",
    bgColor: "white",
    title: "Started Freelance Development",
    subtitle: "",
    description:
      "Providing custom web solutions and automation tools to international clients. Developing tailored websites, business automation scripts, and digital tools to streamline operations across various industries. Continuously expanding expertise to deliver efficient, client-focused solutions.",
    date: "November 2022",
  },
  {
    icon: "images/wtslogored.jpeg",
    bgColor: "white",
    title: "Working Student - Power platforms",
    subtitle: "Wts digital GmbH",
    description:
      "At WTS Digital GmbH, responsible for developing tailored digital solutions to meet specific client needs. Leveraged Microsoft's Power Platform and other technologies to create cost-effective automation tools, enhancing business processes and efficiency for various industries.",
    date: "November 2024",
  },
  {
    icon: "images/TIB.png",
    bgColor: "white",
    title: "Completion of my Bachelor thesis",
    subtitle:
      "'Question Answering Using Chart Figures in Scientific Articles' (Grade: 2.0)",
    description:
      "Completed a Bachelor thesis focused on developing methods for extracting and interpreting information from chart figures in scientific articles, achieving a grade of 2.0.",
    date: "Dezember 2024",
  },
  {
    icon: "images/Leibniz.png",
    bgColor: "white",
    title: "Finished my B.Sc Degree",
    subtitle: "B.Sc Technische Informatik (Grade 2.8)",
    description:
      "Graduated with a Bachelor of Science degree in Computer Engineering from Leibniz Universität Hannover, completing the program within the standard duration of six semesters with a final grade of 2.8.",
    date: "January 2025",
  },
];

export default timelineElements;
