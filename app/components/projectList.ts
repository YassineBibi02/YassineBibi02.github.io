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
        "During my second semester I developed a battleship game using Java. It was a group project with three members. One handled the UI, one developed the game logic, and I was responsible for the networking side as the game had to be online. I also managed the integration between game logic and server logic.",
      link: "https://github.com/YassineBibi02/BattleshipsSS22",
      icon: "images//battleships.png",
      bgColor: "bg-blue-600",
      txtColor: "text-WhiteCustom"
    },
    {
      title: "Anti-Phishing App",
      description:
        "This app was developed during the 'Software Projekt' module at university. It aims to help workers learn how to handle phishing emails by testing them with fake phishing emails and providing guidance on avoiding such emails in the long run. I was in charge of developing the backend and helped connect it to the frontend.",
      link: "https://github.com/YassineBibi02/SoftwareProjekt",
      icon: "images//fishing.png",
      bgColor: "bg-blue-800",
      txtColor: "text-WhiteCustom"

    },
    {
        title: "Jira Alternative with Powerautomate",
        description:
         "The highlight of my time with continental was a Microsfot powerapps app that served to replace Jira. Where the entire managment relied on it by the time i left the company. I was nominated for Continental excellence award thanks to that project. I developped everything in it.",
        link: "",
        icon: "images//PowerAppIcon.png",
        bgColor: "bg-fuchsia-300",
        txtColor: "text-BlackCustom"

      },
    {
        title: "Knime Report automation",
        description:
        "Automation of Multiple reports with SQL and Java. This project comes under the smart factory intiative in Continental. At the end of my time , my reports saved around 35 hours weekly of manual excel work",
        link: "",
        icon: "images//Knime.svg",
        bgColor: "bg-amber-600",
        txtColor: "text-BlackCustom"

    },  
    
  ];
  
  export default projects;
  