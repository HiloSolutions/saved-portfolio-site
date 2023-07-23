

const data = {
  4: {
    title: 'Hilo Website',
    caption: 'My branded website for Hilo!',
    longDescription: "My WordPress site for Hilo serves as my primary touchpoint. I deliberately opted to develop it using WordPress due to its exceptional SEO optimization capabilities and the availability of additional plugins. By saving time through this choice, I am able to devote my energy to coding projects that truly ignite my passion. This website, intended for my business ideas, holds the potential for future expansion, such as the inclusion of a blog or online courses. The distinction between this site and my portfolio lies in its purpose: while my portfolio showcases my creative endeavors, this WordPress site is dedicated to establishing and promoting my brand and business.",
    leveragedSoftware: ['WordPress', 'Astra theme' ],
    cta: 'https://hilocoding.ca/',
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/italy.jpg",
    angle: '-4deg',
    x: '-20%',
    y: '5%',
    classNameHeader: 'website'
  },
  1: {
    title: 'NutritionShip',
    caption: 'Space themed nutrition tracker!',
    longDescription: "Are you tired of feeling guilty about your food choices? Are you struggling to stick to a nutrition plan that worked for you in the past? Well, guess what? There's a solution that will revolutionize the way you approach your health journey - Nutritionship! Say goodbye to unsustainable diets and hello to sustainable healthy habits with Nutritionship. It's the ultimate nutrition partner that empowers you to set your own goals, track your progress, and see real results on a personalized dashboard. With Nutritionship, you can finally say goodbye to the boring and tedious tracking methods and hello to a fun and exciting way of keeping yourself accountable. All you need to do is enter some basic information about yourself, set your preferences, and voila! You're all set to embark on a thrilling journey towards a healthier, happier you.",
    frontEnd: ['ReactJS', 'Tailwind CSS', 'Bootstrap', 'Axios'],
    backEnd: ['PostgreSQL', 'Node.js', 'Express'],
    leveragedSoftware: ['Material Ui', 'Chart JS', 'ApexCharts', ],
    github: 'https://github.com/HiloSolutions/food-tracking-app',
    image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/italy.jpg",
    angle: '-1deg',
    x: '-10%',
    y: '-20%',
    classNameHeader: 'nutritionship'
  },
  3: {
    title: 'YouTube',
    caption: 'Tutorials for new devs.',
    longDescription: "As a Web Developer with experience in startups, I've created tutorials to teach the basics of the latest libraries, frameworks, and software. These videos are designed to be accessible to everyone, regardless of their coding background. I offer two types of videos. The first type covers fundamental concepts of programming languages that I've learned throughout my career, aimed at helping new developers grasp concepts more easily. The second type focuses on software solutions that don't involve coding but are beneficial in the workplace. Occasionally, there may be some overlap in these videos. Implementing these no-code solutions effectively at an advanced level may require understanding the fundamentals of a specific language, like JavaScript with HubSpot.",
    leveragedSoftware: ['YouTube'],
    cta: 'https://www.youtube.com/@hilo-coding-tutorials',
    image:"/images/youtube.png",
    angle: '7deg',
    x: '10%',
    y: '-7%',
    classNameHeader: 'youtube',
  },
  2: {
    title: 'MealHub',
    caption: 'A food pickup website.',
    longDescription: 'This app provides service for two types of users: customer and restaurant owner. The customer page contains a menu and a cart to keep track of their order. They are able to see the status of their order real time due to polling. On the restaurant admin page, when they order from customers, they are able to see the order cards. They have to option to set the preparation time, edit the preparation time, cancel order, notify customer that order is ready, and complete the order once picked up. All of this is done notified to the customers in the status page and as SMS text to the phone number entered during checkout.',
    frontEnd: ['EJS', 'JQuery'],
    backEnd: ['PostgreSQL', 'Node.js', 'Express'],
    leveragedSoftware: ['SocketIo', 'Twilio'],
    github: 'https://github.com/HiloSolutions/food-pickup-midterm',
    image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/italy.jpg",
    angle: '-5deg',
    x: '5%',
    y: '15%',
    classNameHeader: 'mealhub'
  }
}

export default data;