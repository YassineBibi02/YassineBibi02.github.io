// projectList.ts

interface Project {
    title: string;
    description: string;
    link: string;
    icon: string;
    bgColor: string;
    txtColor:string;
  }
  
  const projects: Project[] = [
    {
      title: "Battleships",
      description:
      "Developed an online Battleship game in Java as part of a group project during my second semester. While one team member handled the UI and another focused on game logic, I was responsible for the networking functionality, ensuring seamless online gameplay. Additionally, I managed the integration between the game logic and server-side operations.",
      link: "https://github.com/YassineBibi02/BattleshipsSS22",
      icon: "images/battleships.png",
      bgColor: "bg-blue-600",
      txtColor: "text-WhiteCustom"
    },
    {
      title: "Anti-Phishing App",
      description:
      "Built as part of the 'Software Projekt' module at university, this application helps employees recognize and handle phishing attempts. It simulates phishing attacks through test emails and provides educational feedback to improve security awareness. I was responsible for developing the backend and facilitating integration with the frontend.",
      link: "https://github.com/YassineBibi02/SoftwareProjekt",
      icon: "images/fishing.png",
      bgColor: "bg-blue-800",
      txtColor: "text-WhiteCustom"

    },
    {
        title: "Jira Alternative with Powerautomate",
        description:
        "Designed and implemented a Microsoft PowerApps-based project management tool as a replacement for Jira during my tenure at Continental. The solution became an essential part of the management workflow by the time I left. My contributions earned me a nomination for the Continental Excellence Award, as I was solely responsible for its development.",
        link: "",
        icon: "images/PowerAppIcon.png",
        bgColor: "bg-fuchsia-300",
        txtColor: "text-BlackCustom"

      },
    {
        title: "Knime Report automation",
        description:
        "Developed an automated reporting system using SQL and Java as part of Continental’s Smart Factory initiative. The solution streamlined multiple reporting tasks, reducing manual Excel work by approximately 35 hours per week. I was responsible for the entire development process, from requirements gathering to implementation.",
        link: "",
        icon: "images/Knime.png",
        bgColor: "bg-amber-600",
        txtColor: "text-BlackCustom"

    },  
    
  ];
  
  export default projects;
  