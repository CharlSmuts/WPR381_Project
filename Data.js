const teamMembers =
[
   {name: "Charl", role:"Team Lead"},
   {name: "Toufeeq", role:"Backend Developer"},
   { name: "Matt", role: "Frontend Developer" },
  {name: "Luqmaan", role: "Documentation Manager"} ,
   {name: "Toufeeq", role: "Documentation Manager" } 
];

let events =[
    { title: "Community Cleanup",
    date: "2025-06-01",
    location: "Main Park"
    },
    {
    title: "Coding Workshop",
    date: "2025-06-15",
    location: "Library Hall",
    image: "workshop.jpg"
    }
]

let contact =[
    {name:"John doe",
        email:"johndoe@email.com",
        message:"Website is great"
    }
];

let about = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu venenatis tellus, quis lacinia enim. Donec ullamcorper feugiat nulla, eu vulputate augue."]

module.exports.aboutarray = about;
module.exports.membersarray = teamMembers;

module.exports.eventsarray = events;