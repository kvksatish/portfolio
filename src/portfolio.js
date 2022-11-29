/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "KVK Satish's Portfolio",
  description:
    "Software Engineer who loves to transform ideas into reality using code.Developing web applications using the latest front-end and UI/UX technologies and full-fledged APIs.MASAI School provided me with a comprehensive understanding of Web Development and MERN Stack in 30 weeks.I strive to contribute to our team's success through diligent work, attention to detail, and excellent organization skills.",
  og: {
    title: "KVK Satish Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "KVK Satish",
  logo_name: "KVK Satish",
  nickname: "Full Stack Developer",
  subTitle:
    "Software Developer who loves to transform ideas into reality using code.Developing web applications using the latest front-end and UI/UX technologies and full-fledged APIs.MASAI School provided me with a comprehensive understanding of Web Development and MERN Stack in 30 weeks.I strive to contribute to our team's success through diligent work, attention to detail, and excellent organization skills.",
  resumeLink:
    "https://drive.google.com/file/d/1xAJB3V8HY4AoSl58wM1GRPx-bucYcclr/view",
  portfolio_repository: "https://github.com/kvksatish",
  githubProfile: "https://github.com/kvksatish",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/kvksatish",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kvk-satish-9b51bb1b4/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:kvksatish98@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

  {
    name: "Outlook",
    link: "mailto:kvksatish105@outlook.com",
    fontAwesomeIcon: "fa-microsoft", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //   ],
    // },

    {
      title: "Front-End Skills",
      fileName: "DesignImg",
      skills: [
        "⚡ Developing highly attractive user interface for  web applications",
        "⚡ Building responsive websites",
        "⚡ Creating the flow of application functionalities to optimize user experience",
        "⚡ Customizing logo designs and building logos from scratch",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "simple-icons:css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#9400da",
          },
        },
        {
          skillName: "Material UI",
          fontAwesomeClassname: "simple-icons:materialui",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Adobe PS",
          fontAwesomeClassname: "simple-icons:adobe",
          style: {
            color: "#FF2BC2",
          },
        },
      ],
    },
    {
      title: "Back-End Skills",
      fileName: "FullStackImg",
      skills: [
        "⚡ Creating API's in backend using Node, Express & MongoDB",
        "⚡ Middlewares",
        "⚡ Developing web applications using the latest front-end and UI/UX technologies and full-fledged APIs",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },

        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#000",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#003b65",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#E34F26",
          },
        },
      ],
    },
    {
      title: "Soft Skills",
      fileName: "",
      skills: [
        "⚡ Communication Skills",
        "⚡ Team Coordination",
        "⚡ Leadership Skills",
        "⚡ Remote Collaboration",
      ],
      softwareSkills: [],
    },
  ],
};

// Education Page

// const competitiveSites = {
//   competitiveSites: [
//     {
//       siteName: "HackerRank",
//       iconifyClassname: "simple-icons:hackerrank",
//       style: {
//         color: "#2EC866",
//       },
//       profileLink: "https://www.hackerrank.com/layman_brother",
//     },
//     {
//       siteName: "Codechef",
//       iconifyClassname: "simple-icons:codechef",
//       style: {
//         color: "#5B4638",
//       },
//       profileLink: "https://www.codechef.com/users/ashutosh_1919",
//     },
//     {
//       siteName: "Codeforces",
//       iconifyClassname: "simple-icons:codeforces",
//       style: {
//         color: "#1F8ACB",
//       },
//       profileLink: "http://codeforces.com/profile/layman_brother",
//     },
//     {
//       siteName: "Hackerearth",
//       iconifyClassname: "simple-icons:hackerearth",
//       style: {
//         color: "#323754",
//       },
//       profileLink: "https://www.hackerearth.com/@ashutosh391",
//     },
//     {
//       siteName: "Kaggle",
//       iconifyClassname: "simple-icons:kaggle",
//       style: {
//         color: "#20BEFF",
//       },
//       profileLink: "https://www.kaggle.com/laymanbrother",
//     },
//   ],
// };

// const degrees = {
//   degrees: [
//     {
//       title: "Indian Institute of Information Technology Kurnool",
//       subtitle: "B.Tech. in Computer Engineering",
//       logo_path: "iiitk_logo.png",
//       alt_name: "IIITDM Kurnool",
//       duration: "2016 - Present",
//       descriptions: [
//         "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
//         "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
//         "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
//       ],
//       website_link: "http://iiitk.ac.in",
//     },
//   ],
// };

// const certifications = {
//   certifications: [
//     {
//       title: "Machine Learning",
//       subtitle: "- Andrew Ng",
//       logo_path: "stanford_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
//       alt_name: "Stanford University",
//       color_code: "#8C151599",
//     },
//     {
//       title: "Deep Learning",
//       subtitle: "- Andrew Ng",
//       logo_path: "deeplearning_ai_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
//       alt_name: "deeplearning.ai",
//       color_code: "#00000099",
//     },
//     {
//       title: "ML on GCP",
//       subtitle: "- GCP Training",
//       logo_path: "google_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
//       alt_name: "Google",
//       color_code: "#0C9D5899",
//     },
//     {
//       title: "Data Science",
//       subtitle: "- Alex Aklson",
//       logo_path: "ibm_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
//       alt_name: "IBM",
//       color_code: "#1F70C199",
//     },
//     {
//       title: "Big Data",
//       subtitle: "- Kim Akers",
//       logo_path: "microsoft_logo.png",
//       certificate_link:
//         "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
//       alt_name: "Microsoft",
//       color_code: "#D83B0199",
//     },
//     {
//       title: "Advanced Data Science",
//       subtitle: "- Romeo Kienzler",
//       logo_path: "ibm_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
//       alt_name: "IBM",
//       color_code: "#1F70C199",
//     },
//     {
//       title: "Advanced ML on GCP",
//       subtitle: "- GCP Training",
//       logo_path: "google_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
//       alt_name: "Google",
//       color_code: "#0C9D5899",
//     },
//     {
//       title: "DL on Tensorflow",
//       subtitle: "- Laurence Moroney",
//       logo_path: "deeplearning_ai_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
//       alt_name: "deeplearning.ai",
//       color_code: "#00000099",
//     },
//     {
//       title: "Fullstack Development",
//       subtitle: "- Jogesh Muppala",
//       logo_path: "coursera_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
//       alt_name: "Coursera",
//       color_code: "#2A73CC",
//     },
//     {
//       title: "Kuberenetes on GCP",
//       subtitle: "- Qwiklabs",
//       logo_path: "gcp_logo.png",
//       certificate_link:
//         "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
//       alt_name: "GCP",
//       color_code: "#4285F499",
//     },
//     {
//       title: "Cryptography",
//       subtitle: "- Saurabh Mukhopadhyay",
//       logo_path: "nptel_logo.png",
//       certificate_link:
//         "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
//       alt_name: "NPTEL",
//       color_code: "#FFBB0099",
//     },
//     {
//       title: "Cloud Architecture",
//       subtitle: "- Qwiklabs",
//       logo_path: "gcp_logo.png",
//       certificate_link:
//         "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
//       alt_name: "GCP",
//       color_code: "#4285F499",
//     },
//   ],
// };

// // Experience Page
// const experience = {
//   title: "Experience",
//   subtitle: "Work, Internship and Volunteership",
//   description:
//     "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
//   header_image_path: "experience.svg",
//   sections: [
//     {
//       title: "Work",
//       experiences: [
//         {
//           title: "Associate AI Engineer",
//           company: "Legato Health Technology",
//           company_url: "https://legatohealthtech.com/",
//           logo_path: "legato_logo.png",
//           duration: "June 2020 - PRESENT",
//           location: "Hyderabad, Telangana",
//           description:
//             "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
//           color: "#0879bf",
//         },
//         {
//           title: "Android and ML Developer",
//           company: "Muffito Incorporation",
//           company_url: "https://www.linkedin.com/company/muffito-inc/about/",
//           logo_path: "muffito_logo.png",
//           duration: "May 2018 - Oct 2018",
//           location: "Pune, Maharashtra",
//           description:
//             "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
//           color: "#9b1578",
//         },
//         {
//           title: "Android Developer",
//           company: "FreeCopy Pvt. Ltd.",
//           company_url: "https://www.linkedin.com/company/freecopy/about/",
//           logo_path: "freecopy_logo.png",
//           duration: "Nov 2017 - Dec 2017",
//           location: "Ahmedabad, Gujarat",
//           description:
//             "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
//           color: "#fc1f20",
//         },
//       ],
//     },
//     {
//       title: "Internships",
//       experiences: [
//         {
//           title: "Data Science Research Intern",
//           company: "Delhivery Pvt. Ltd.",
//           company_url: "https://www.delhivery.com/",
//           logo_path: "delhivery_logo.png",
//           duration: "May 2019 - Sept 2019",
//           location: "Gurgaon, Haryana",
//           description:
//             "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
//           color: "#ee3c26",
//         },
//         {
//           title: "Data Science Intern",
//           company: "Intel Indexer LLC",
//           company_url:
//             "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
//           logo_path: "intel_logo.jpg",
//           duration: "Nov 2018 - Dec 2018",
//           location: "Work From Home",
//           description:
//             "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
//           color: "#0071C5",
//         },
//       ],
//     },
//     {
//       title: "Volunteerships",
//       experiences: [
//         {
//           title: "Google Explore ML Facilitator",
//           company: "Google",
//           company_url: "https://about.google/",
//           logo_path: "google_logo.png",
//           duration: "June 2019 - April 2020",
//           location: "Hyderabad, Telangana",
//           description:
//             "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
//           color: "#4285F4",
//         },
//         {
//           title: "Microsoft Student Partner",
//           company: "Microsoft",
//           company_url: "https://www.microsoft.com/",
//           logo_path: "microsoft_logo.png",
//           duration: "Aug 2019 - May 2020",
//           location: "Hyderabad, Telangana",
//           description:
//             "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
//           color: "#D83B01",
//         },
//         {
//           title: "Mozilla Campus Captain",
//           company: "Mozilla",
//           company_url: "https://www.mozilla.org/",
//           logo_path: "mozilla_logo.png",
//           duration: "Oct 2019 - May 2020",
//           location: "Kurnool, Andhra Pradesh",
//           description:
//             "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
//           color: "#000000",
//         },
//         {
//           title: "Developer Students Club Member",
//           company: "DSC IIITDM Kurnool",
//           company_url:
//             "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
//           logo_path: "dsc_logo.png",
//           duration: "Jan 2018 - May 2020",
//           location: "Kurnool, Andhra Pradesh",
//           description:
//             "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
//           color: "#0C9D58",
//         },
//         {
//           title: "Developer Program Member",
//           company: "Github",
//           company_url: "https://github.com/",
//           logo_path: "github_logo.png",
//           duration: "July 2019 - PRESENT",
//           location: "Work From Home",
//           description:
//             "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
//           color: "#181717",
//         },
//       ],
//     },
//   ],
// };

// Projects Page

const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a variety of the latest technology tools. My best experience is creating Full Stack projects from scratch and deploying them .",
  avatar_image_path: "projects_image.svg",
};

const ProjectsData = {
  Data: [
    {
      // Add image in './styles/images.css' in #project3
      id: "project5",
      name: "Nike Website Clone",

      img: "/pr007.png",
      url: "https://github.com/kvksatish/CloneOfNikeWebsite",
      deploy: "https://kvksatishnikeclone.vercel.app/",

      ts: [
        "Reactjs | MongoDB | Nodejs | Expressjs | auth0 | HTML5 | CSS3 | JavaScript | chakraUI",
      ],
      description:
        "Clockify is a free time tracker for teams it is used by millions it lets you track work hours across projects.",
      fet: [
        "pixel perfect UI clone",
        "•login/signup/google auth",
        "cart",
        "Wishlist",
        "•can see products without login",
        "•payments page",
      ],
    },
    {
      // Add image in './styles/images.css' in #project3
      id: "project4",
      name: "Clockify",

      img: "/p55.jpg",
      url: "https://github.com/ManishSingh64/robust-pen-8778",
      deploy: "https://clockify-clone-mern.netlify.app/",

      ts: ["HTML | CSS | JavaScript | Chakra UI | React"],
      description:
        "Clockify is a free time tracker for teams it is used by millions it lets you track work hours across projects.",
      fet: [
        "teams work tracking",
        "time traking",
        "hours of work mapping ",
        " time sheets",
        "SignUp ",
        "Login",
        "Payment Page",
        "Interactive UI",
      ],
      ars: ["teams work tracking Page", "Ui Enhancement "],
    },
    {
      // Add image in './styles/images.css' in #project1
      id: "project1",
      img: "/pr1.jpg",
      name: "DNA News Website Clone",
      url: "https://github.com/kvksatish/-intelligent-tomatoes-1390",
      deploy: "https://lively-crostata-7379af.netlify.app",
      description:
        "News website that shows real-time news updates. \n This project was an individual project that I developed entirely on my own within a week.",
      fet: [
        "Scrolling Headlines",
        "Top News Display",
        " Real-Time News using API ",
        "News Search ",
        "Interactive UI ",
        " Responsive ",
        "Different pages for different Types of News",
      ],
      ts: [
        "Reac | HTML | CSS | JavaScript | Bootstrap | Material UI | ChakraUI",
      ],
    },
    {
      // Add image in './styles/images.css' in #project2
      id: "project2",
      name: "AJIO Website Clone",
      img: "/pr2.jpg",

      url: "https://github.com/theBillionaireApostle/AJIOclone",
      deploy: "https://jolly-pixie-2d9833.netlify.app",
      ts: ["HTML | CSS | JavaScript | Bootstrap | Chakra UI | React"],
      description:
        "AJIO is an e- commerce website that specializes in fashion and lifestyle products.This project was developed collaboratively by a team of three and was completed in five days",
      fet: [
        "Sorting of Products based on price",
        " Filtering Products based on price",
        " Scrolling / Slide Show of Products ",
        "Navbar with different pages for different categories",
        " Interactive UI",
      ],
      ars: [
        "Built Sorting functionality",
        " Built Filtering functionality",
        " Developed all Category Pages ",
        "Collaborated in UI Enhancement",
        "GitHub commits and pushing",
      ],
    },
    {
      // Add image in './styles/images.css' in #project3
      id: "project3",
      name: "Rodan+Fields",

      img: "/pr3.jpg",
      url: "https://github.com/Mallikarjuna-dev/serene-scarecrow-3205",
      deploy: "https://rodanandfields-clone-orcin.vercel.app/",

      ts: ["HTML | CSS | JavaScript | Chakra UI | React"],
      description:
        "R+F, is an American multi-level marketing company specializing in skincare products",
      fet: [
        "Products Pages",
        "Carousel ",
        " Login",
        "SignUp ",
        "Cart",
        "Payment Page",
        "Interactive UI",
      ],
      ars: ["Payments Page", "Login", "SignUp", "Ui Enhancement "],
    },
  ],
};

const publicationsHeader = {
  //   title: "Publications",
  //   description:
  //     "I have worked on and published a few research papers and publications of my own.",
  //   avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    //     {
    //       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    //       name: "Artificial Intelligence Paper",
    //       createdAt: "2020-03-06T16:26:54Z",
    //       description: "Paper Written on Artificial Intelligence published in xyz ",
    //       url:
    //         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    //     },
    //     {
    //       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //       name: "Artificial Intelligence Paper",
    //       createdAt: "2020-03-06T16:26:54Z",
    //       description: "Paper Written on Artificial Intelligence published in xyz ",
    //       url:
    //         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    //     },
    //     {
    //       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //       name: "Artificial Intelligence Paper",
    //       createdAt: "2020-03-06T16:26:54Z",
    //       description: "Paper Written on Artificial Intelligence published in xyz ",
    //       url:
    //         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    //     },
    //     {
    //       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //       name: "Artificial Intelligence Paper",
    //       createdAt: "2020-03-06T16:26:54Z",
    //       description: "Paper Written on Artificial Intelligence published in xyz ",
    //       url:
    //         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    //     },
    //     {
    //       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //       name: "Artificial Intelligence Paper",
    //       createdAt: "2020-03-06T16:26:54Z",
    //       description: "Paper Written on Artificial Intelligence published in xyz ",
    //       url:
    //         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    //     },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "newphoto1.png",
    description:
      "I am available on almost every social media. Feel free to message me, and I'll get back to you within 24 hours. ",
  },
  blogSection: {
    // title: "Blogs",
    // subtitle:
    //   "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    // link: "https://ashutoshhathidara.wordpress.com",
    // avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    // title: "Address",
    // subtitle:
    //   "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    // avatar_image_path: "address_image.svg",
    // location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 6302982475",
  },
};

export {
  settings,
  seo,
  ProjectsData,
  greeting,
  socialMediaLinks,
  skills,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
