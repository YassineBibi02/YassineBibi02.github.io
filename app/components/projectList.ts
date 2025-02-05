// projectList.ts

interface Project {
    title: string;
    description: string;
    link: string;
    icon: string;
    bgColor: string;
  }
  
  const projects: Project[] = [
    {
      title: "Battleships",
      description:
        "During my second semester I developed a battleship game using Java. It was a group project with three members. One handled the UI, one developed the game logic, and I was responsible for the networking side as the game had to be online. I also managed the integration between game logic and server logic.",
      link: "https://google.com",
      icon: "/battleships.png",
      bgColor: "bg-blue-600",
    },
    {
      title: "Anti-Phishing App",
      description:
        "This app was developed during the 'Software Projekt' module at university. It aims to help workers learn how to handle phishing emails by testing them with fake phishing emails and providing guidance on avoiding such emails in the long run. I was in charge of developing the backend and helped connect it to the frontend.",
      link: "",
      icon: "/fishing.png",
      bgColor: "bg-blue-800",
    },
  ];
  
  export default projects;
  