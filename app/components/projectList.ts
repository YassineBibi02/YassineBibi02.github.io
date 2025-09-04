// projectList.ts

interface Project {
  title: string;
  description: string;
  link: string;
  icon: string;
  bgColor: string;
  txtColor: string;
}

const projects: Project[] = [
  {
    title: "Battleships",
    description:
      "Developed an online Battleship game in Java as part of a group project during my second semester. While one team member handled the UI and another focused on game logic, I was responsible for the networking functionality, ensuring seamless online gameplay. Additionally, I managed the integration between the game logic and server-side operations.",
    link: "https://github.com/YassineBibi02/BattleshipsSS22",
    icon: "images/battleships.png",
    bgColor: "bg-blue-600",
    txtColor: "text-WhiteCustom",
  },
  {
    title: "Anti-Phishing App",
    description:
      "Built as part of the 'Software Projekt' module at university, this application helps employees recognize and handle phishing attempts. It simulates phishing attacks through test emails and provides educational feedback to improve security awareness. I was responsible for developing the backend and facilitating integration with the frontend.",
    link: "https://github.com/YassineBibi02/SoftwareProjekt",
    icon: "images/fishing.png",
    bgColor: "bg-blue-800",
    txtColor: "text-WhiteCustom",
  },
  {
    title: "Jira Alternative with PowerApps",
    description:
      "Designed and implemented a Microsoft PowerApps-based project management tool as a replacement for Jira during my tenure at Continental. The solution became an essential part of the management workflow by the time I left. My contributions earned me a nomination for the Continental Excellence Award, as I was solely responsible for its development.",
    link: "",
    icon: "images/PowerAppIcon.png",
    bgColor: "bg-fuchsia-300",
    txtColor: "text-BlackCustom",
  },
  {
    title: "Knime Report automation",
    description:
      "Developed an automated reporting system using SQL and Java as part of Continental’s Smart Factory initiative. The solution streamlined multiple reporting tasks, reducing manual Excel work by approximately 35 hours per week. I was responsible for the entire development process, from requirements gathering to implementation.",
    link: "",
    icon: "images/Knime.png",
    bgColor: "bg-amber-600",
    txtColor: "text-BlackCustom",
  },
  {
    title: "Golstic SEO Optimization & Development",
    description:
      "Solved various issues in the website Golistic.de that prevented it from being indexed by Google within 1 month. Previous attemps took 11 months without success. I identified and fixed problems related to site structure, redirects and faulty logic in the backend. This resulted in a significant increase in organic traffic and improved search engine rankings. I also contributed to the development of new features Such as Coupons integration.",
    link: "https://www.golistic.de/",
    icon: "images/golistic_favicon2025.png",
    bgColor: "bg-[#AFCA0B]",
    txtColor: "text-BlackCustom",
  },
  {
    title: "Go-Makkah Website Redesign",
    description:
      "Participated in Module-based developement of a website redesign for Go-Makkah, a travel agency specializing in Hajj and Umrah packages. The project involved creating a modern, user-friendly interface to enhance the customer experience. as well as updating a 17 year old backend technology stack to a more modern one. I contributed to both frontend and backend development, ensuring seamless integration and improved performance.",
    link: "https://go-makkah.com/",
    icon: "images/goMakkahlogo.png",
    bgColor: "bg-[#AB0F24]",
    txtColor: "text-white",
  },
  {
    title: "Restuarent Website - Module ",
    description:
      "I Created a modular website for online buisnesses. it started with a restaurant rework. and is now a configurable template for any buisness. It includes secure authentication, payment integration, and an admin dashboard for easy management. Plus all buisness logic per Customer needs. ",
    link: "",
    icon: "images/Restaurent.png",
    bgColor: "bg-[#FF8000]",
    txtColor: "text-white",
  },
  {
    title: "Typo3 Fullstack Development",
    description:
      "In my tenure as a fullstack developer at cse. I took charge over administrating all typo3 logic and development. I was responsible for maintaining and updating the website, implementing new features, and ensuring optimal performance. My role also involved collaborating with other developers and stakeholders to meet the company's digital needs.",
    link: "https://www.revidacon.de/",
    icon: "images/88698.png",
    bgColor: "bg-gray-100",
    txtColor: "text-BlackCustom",
  },
  
];

export default projects;
