export const workExperienceData = [
    {
        title: "Work Experience",
        items: [
            {
                title: "Sessional Instructor",
                employer: "Cape Breton University",
                location: "Sydney, Nova Scotia, Canada",
                date: "September 2023 - April 2024",
                description: "Taught post-baccalaureate level business statistics (MGSC-5108) and operations management (MGSC-5128) courses",
            },
            {
                title: "Research Assistant",
                employer: "Production & Operations Management Research Lab",
                location: "Windsor, Ontario, Canada",
                date: "May 2015 - August 2023",
                description: "Developed mathematical programming models, discrete event simulation models, solution methods (hyperheuristics and metaheuristics), and a decision support system for strategic and tactical operating room planning problems",
            },
            { 
                title: "Graduate Assistant",
                employer: "University of Windsor",
                location: "Windsor, Ontario, Canada",
                date: "September 2015 - May 2023",
                description: "Conducted weekly tutorial sessions, assisted with grading, held weekly office hours, and responded to students' questions",
            },
        ],
    }
];

export type WorkExperienceContent = {
    title: string;
    items: {
        title: string;
        employer: string;
        location: string;
        date: string;
        description: string;
    }[];
};

export type WorkExperienceContentData = WorkExperienceContent[];
