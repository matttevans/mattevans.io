// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import codeIcon from "./images/code.svg"
import databaseIcon from "./images/database.svg"
import laravelIcon from "./images/laravel.svg"
import uiuxIcon from "./images/uiux.svg"
import awsIcon from "./images/aws.svg"
import camping from "./images/camping.svg"
import weightlifting from "./images/weightlifting.svg"
import golf from "./images/golf.svg"
import videogames from "./images/videogames.svg"
import headstrong from "./images/headstrong.png"
import athleteacademy from "./images/athleteacademy.png"
import seabreeze from "./images/seabreeze.png"
import matt from "./images/matt.png"

// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

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

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Section --------------
  aboutParaOne:
      "Hi my name is Matt Evans! I'm a freelance, full-stack web developer with experience in many areas and can offer you beautiful, scalable, and highly reliable websites.",
  aboutParaTwo:
      "I have extensive experience in developing Windows desktop software using Java and C#. I also have extensive experience in developing web apps using Laravel, React, Shopify, DropFunnels, and WordPress.",
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

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "HTML 5",
    },
    {
      img: cssIcon,
      para:
        "CSS",
    },
    {
      img: jsIcon,
      para:
        "Javascript",
    },
    {
      img: reactIcon,
      para:
        "ReactJS",
    },
    {
      img: laravelIcon,
      para:
          "Laravel",
    },
    {
      img: awsIcon,
      para:
          "AWS",
    },
    {
      img: uiuxIcon,
      para:
        "UI/UX",
    },
    {
      img: codeIcon,
      para:
        "Backend",
    },
    {
      img: databaseIcon,
      para:
          "Databases",
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

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
