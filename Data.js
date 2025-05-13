const teamMembers =
[
   {name: "Charl", role:"Team Lead"},
   {name: "Toufeeq", role:"Backend Developer"},
   { name: "Matt", role: "Frontend Developer" },
  {name: "Luqmaan", role: "Documentation Manager"} ,
   {name: "Toufeeq", role: "Documentation Manager" } 
];

let events =[
    { 
    title: "Community Cleanup",
    date: "2025-06-01",
    location: "Main Park",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu venenatis tellus, quis lacinia enim. Donec ullamcorper feugiat nulla, eu vulputate augue.",
    startTime: "15:00",             
    endTime: "17:00",   
    image:"https://www.budgetdumpster.com/images/blog/litter-pickup-600x300.jpg"
    },
    {
    title: "Coding Workshop",
    date: "2025-06-15",
    location: "Library Hall",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu venenatis tellus, quis lacinia enim. Donec ullamcorper feugiat nulla, eu vulputate augue.",
    startTime: "14:00",
    endTime: "16:30",
    image: "https://www.uwindsor.ca/engineering/sites/uwindsor.ca.engineering/files/go-code-girl-web.jpg"
    },
    {
    title: "AI Workshop",
    date: "2025-07-15",
    location: "Library Hall",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu venenatis tellus, quis lacinia enim. Donec ullamcorper feugiat nulla, eu vulputate augue.",
    startTime: "12:00",
    endTime: "14:30",
    image: "https://www.networkworld.com/wp-content/uploads/2025/01/3609889-0-66260200-1738008392-AI-networking-2-1.jpg?quality=50&strip=all&w=1024"
    }
]

let contact =[
    {name:"John doe",
        email:"johndoe@email.com",
        message:"Website is great"
    }
];

let about = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu venenatis tellus, quis lacinia enim. Donec ullamcorper feugiat nulla, eu vulputate augue."]


let latestevents = [];
for (let index = events.length-1; index >= events.length-2; index--) {
    latestevents.push(events[index]);   
}
latestevents

module.exports.aboutarray = about;
module.exports.membersarray = teamMembers;
module.exports.contactarray = contact;
module.exports.eventsarray = events;
module.exports.latesteventsarray = latestevents;