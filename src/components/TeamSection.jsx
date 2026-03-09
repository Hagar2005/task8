// import TeamCard from "./TeamCard";

// function TeamSection() {

// }


// const TeamCard = ({ image, name, role }) => {
//     return (
//         <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
//             <div className="mb-6 aspect-square overflow-hidden rounded-xl">
//                 <img
//                     src={image}
//                     alt={name}
//                     className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//             </div>
//             <div className="text-center">
//                 <h3 className="text-xl font-bold text-slate-800">{name}</h3>
//                 <p className="mt-1 text-sm font-medium text-slate-500 uppercase tracking-wider">{role}</p>

//                 <div className="mt-6 flex justify-center space-x-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//                     <button className="rounded-full bg-slate-100 p-2 text-slate-600 hover:bg-slate-800 hover:text-white transition-colors">
//                         <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
//                     </button>
//                     <button className="rounded-full bg-slate-100 p-2 text-slate-600 hover:bg-slate-800 hover:text-white transition-colors">
//                         <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TeamCard;






import TeamCard from "./TeamCard";
// import member1 from "./assets/member1.jpg";
// import member2 from "./assets/member2.avif";
// import member3 from "./assets/member3.jpg";
// import member4 from "./assets/member4.jpg";






import member1 from "../assets/member1.jpg";
import member2 from "../assets/member2.avif";
import member3 from "../assets/member3.jpg";
import member4 from "../assets/member4.jpg";



const teamMembers = [
    {
        image: member1,
        name: "Morad Brown",
        role: "Frontend Developer"
    },
    {
        image: member2,
        name: "Sara Molly",
        role: "Backend Developer"
    },
    {
        image: member3,
        name: "Lila Nahi",
        role: "UI Designer"
    },
    {
        image: member4,
        name: "Kareem Lee",
        role: "Project Manager"
    }
];


function TeamSection() {
    return (
        <section className="team-section">
            <h5>MEET OUR TEAM</h5>
            <h2>Our Creative Team</h2>
<p>There are many variations of passages of but the majority have suffered.</p>
            <div className="team-container">
                {teamMembers.map((member, index) => (
                    <TeamCard
                        key={index}
                        image={member.image}
                        name={member.name}
                        role={member.role}
                    />
                ))}

            </div>
        </section>
    );
}


export default TeamSection;