const localURL = 'http://localhost:8000';
const herokuURL = 'https://avyupskill.herokuapp.com'
const baseURL = `${localURL}`;
export const loginURL = `${baseURL}/login/`;
export const signupURL = `${baseURL}/users/`;
export const profileURL = `${baseURL}/profile/`;
export const coursesURL = `${baseURL}/courses`;
export const parksURL = `${baseURL}/beacon_parks`;
export const areasURL = `${baseURL}/areas`;

export const authHeaders = { 
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${localStorage.token}`
}

export const coCities = [
  {name: "Denver", 
  coordinates:[-104.9903,39.7392]
  },
  {name: "Colorado Springs", 
  coordinates:[-104.8214,38.8339]
  },
  {name: "Boulder", 
  coordinates:[-105.2705,40.0150]
  },
  {name: "Durango", 
  coordinates:[-107.8801,37.2753]
  },
  {name: "Grand Junction", 
  coordinates:[-108.5506,39.0639]
  },
  {name: "Vail", 
  coordinates:[-106.3742,39.6403]
  },
  {name: "Estes Park", 
  coordinates:[-105.5217,40.3772]
  },
  {name: "Crested Butte", 
  coordinates:[-106.9878,38.8697]
  },
  {name: "Steamboat", 
  coordinates:[-106.8317,40.4850]
  },
]

const kbygPrinciples = [
  {
    number: 1,
    name: "GET THE GEAR",
    url: "https://backcountryaccess.com/",
    details: ["Always carry a transceiver, probe, and shovel in the backcountry to help you find a buried partner and be found", 
      "Always carry your gear on your body with your transceiver turned on",
      "Consider riding with an inflatable pack to increase your chances of staying on top of an avalanche", 
      "Practice with your gear regularly. Seconds count and your gear only works when you can use it confidently and efficiently in bad conditions", 
      "Carry the gear and supplies you need to survive an injury or a long evacuation in winter conditions","Be able to communicate with your partners and rescuersRemember that your gear helps you have a safer and more fun day - it does not guarantee your safety"
    ] 
  },
  {
    number: 2,
    name: "GET THE TRAINING",
    url: "http://localhost:3000/courses",
    details: ["Take an avalanche class and learn the basics of:",
      "Different kinds of avalanches and how they occur",
      "How terrain choices and changing weather impact your safety",
      "How to travel in avalanche terrain to minimize your risk",
      "How to make smart decisions as a group",
      "How to rescue one or more buried people",
      "How your actions can impact the safety of other groups",
      "Learn how to provide first aid to an injured member of your party",
      "Keep your skills current by reading, studying accident reports, and refresher classes"
    ]
  },
  {
    number: 3,
    name: "GET THE FORECAST",
    url: "https://www.avalanche.state.co.us/",
    details: ["Go to www.avalanche.state.co.us/ to find your local avalanche center and get the forecast before you go out",
      "Note the avalanche problems you expect to find and understand how different problems require different tactics",
      "Be aware of any mitigation work planned for where you intend to ride",
      "Conditions can change quickly and some riding areas are not covered by up-to-date forecasts - be prepared to assess conditions yourself",
      "Do the research - be prepared with maps, understanding of the terrain, and reports from others",
      "Create a riding plan before you head out",
      "Set objectives and restrictions based on forecast conditions and group desires and capability",
      "Make sure everyone understands the plan and agrees with it",
      "Let someone know where you plan to go and when you plan to return"
    ]
  },
  {
    number: 4,
    name: "GET THE PICTURE",
    url: "",
    details: ["Be aware of hazardous or changing conditions",
      "Recent avalanche activity?",
      "Changing wind, snowfall, and temperature?",
      "Cracking or collapsing snow?",
      "Recent wind deposited snow?",
      "forecasts are not guarantees - re-assess as you go",
      "Use test slopes that are representative aspect and elevation",
      "Be aware of groups above you, below you",
      "Never intentionally trigger an avalanche unless you are sure the area below is clear",
      "Check in on group dynamics - Is anyone outside their comfort zone?",
      "Identify safer and more hazardous terrain and minimize your exposure"
    ]
  },
  {
    number: 5,
    name: "GET OUT OF HARMS WAY",
    url: "",
    details: ["Only one person on a suspect slope at a time",
      "Don't help a buddy find a lost ski or get unstuck in hazardous terrain",
      "Cross or ride suspect slopes one at a time",
      "Don't stop in an area exposed to avalanche hazard",
      "Watch each other, eat lunch, and regroup out of the way of a potential avalanche",
      "Stay in voice and visual contact with one another",
      "Don't enter a closed area or any place undergoing mitigation work",
      "Know what terrain traps are present and avoid them"
    ]
  },
]