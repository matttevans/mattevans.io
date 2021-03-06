// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import codeIcon from "./images/code.svg"
import databaseIcon from "./images/database.svg"
import laravelIcon from "./images/laravel.svg"
import atlassianIcon from "./images/atlassian.png"
import shopifyIcon from "./images/shopify.png"
import wordpressIcon from "./images/wordpress.svg"
import uiuxIcon from "./images/uiux.svg"
import awsIcon from "./images/aws.svg"
import csharpIcon from "./images/c-sharp.svg"
import placeholderIcon from "./images/placeholder.svg"

// Hobbies icons
import camping from "./images/camping.svg"
import weightlifting from "./images/weightlifting.svg"
import golf from "./images/golf.svg"
import videogames from "./images/videogames.svg"

// Misc screenshots

// Work icons
import headstrong from "./images/headstrong-screenshot.png"
import athleteacademy from "./images/athleteacademy-screenshot.png"
import lngworldfleet from "./images/lngworldfleet-screenshot.png"
import ionshare from "./images/ionshare-screenshot.png"
import seabreeze from "./images/seabreeze.png"
import gsap from "./images/gsap.png"
import csharp from "./images/csharp-code.png"

// Me
import matt from "./images/matt.png"

// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"

export default {

  //   Header Details ---------------------
  name: "Matt Evans",
  headerTagline: [
    //Line 1 For Header
    "Building beautiful",
    //Line 3 For Header
    "websites",
  ],
  //   Header Paragraph
  headerParagraph:
    "",

  //Contact Email
  contactEmail: "info@mattevans.io",

  // End Header Details -----------------------

  // Work Section ------------------------
  headstrongImage: headstrong,
  athleteacademyImage: athleteacademy,
  lngworldfleetImage: lngworldfleet,
  ionshareImage: ionshare,
  gsapImage: gsap,
  csharpImage: csharp,

  projects: [
    {
      title: "Headstrong Fit", //Project Title - Add Your Project Title Here
      para:
        "The best gym. Period. Built with Laravel 8 PHP Framework and Bootstrap 4.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: headstrong,
      //Project URL - Add Your Project Url Here
      url: "https://headstrongfit.com/",
    },
    {
      title: "SeaBreeze Cupcakes", //Project Title - Add Your Project Title Here
      para:
        "Beautiful cakes and cupcakes. Beautiful website built on Shopify.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: seabreeze,
      //Project URL - Add Your Project Url Here
      url: "https://seabreezecupcakes.com/",
    },
    {
      title: "Athlete Academy", //Project Title - Add Your Project Title Here
      para:
        "Sports performance. Get fast. Website built faster. Built on DropFunnels.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: athleteacademy,
      //Project URL - Add Your Project Url Here
      url: "httpa://athleteacademy.us/",
    },
  ],

  // End Work Section -----------------------
  // Animation section -------------
  animationParaOne:
  "Creating elegant, smooth \"scrollytelling\" using GSAP ScrollTrigger and React Reveal.",
  // End animation section
  // About Section --------------
  aboutParaOne:
      "Hi my name is Matt Evans! I'm a freelance, full-stack web developer with experience in many areas and can offer you beautiful, scalable, and highly reliable websites.",
  aboutParaTwo:
      "I have extensive experience in developing Windows desktop software using Java and C#. I also have experience in developing web apps using Laravel, React, Shopify, DropFunnels, and WordPress.",
  aboutParaThree:
      "I am deeply familiar with SEO, Jira, Confluence, CI/CD, Git, MySQL, Cloudflare, and Windows and Unix-based operating systems.",
  aboutParaFour:
      "I specialize in the fitness industry and am an expert at automation using Python and Zapier with deep knowledge of the Exercise.com platform.",
  aboutImage: matt,

  hobbies: [
    // Add Or Remove The Link Accordingly
    {
      img: golf,
    },
    {
      img: weightlifting,
    },
    {
      img: camping,
    },
    {
      img: videogames,
    },
  ],
  //   End About Section ---------------------

  // Skills Section ---------------

  skills: [
    {
      img: htmlIcon,
      para:
        "HTML, CSS, JS. Custom designed websites to fit your every need.",
    },
    {
      img: wordpressIcon,
      para:
        "I can build you custom solutions or improve existing solutions on WordPress.",
    },
    {
      img: shopifyIcon,
      para:
        "Lets bring your next brick and mortar or online store to life on Shopify.",
    },
    {
      img: atlassianIcon,
      para:
        "Proficient with Jira and Confluence. I can improve your business structure, increase productivity, documentation, project management, issue tracking, and more.",
    },
    {
      img: laravelIcon,
      para:
          "Proficient with Laravel PHP framework.",
    },
    {
      img: awsIcon,
      para:
          "Deploy and manage your apps & data on various AWS services such as EC2, Lightsail, Amplify, and S3.",
    },
    {
      img: uiuxIcon,
      para:
        "Create beautiful, user-friendly interfaces.",
    },
    {
      img: codeIcon,
      para:
        "Create powerful, feature-rich backends and functionality.",
    },
    {
      img: databaseIcon,
      para:
          "Deploy and manage your databases on various services such as AWS RDS and Microsoft SQL Server. Skilled with MySQL and Laravel Eloquent.",
    },
    {
      img: placeholderIcon,
      para:
          "",
    },
    {
      img: csharpIcon,
      para:
          "Strong OOP fundamentals. Experience creating Windows desktop apps using C# WPF & MVVM Framework.",
    },
    {
      img: placeholderIcon,
      para:
          "",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    {
      img: githubIcon,
      url: "https://github.com/matttevans"
    },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/matt-t-evans/",
    },
  ],

  // End Contact Section ---------------
}