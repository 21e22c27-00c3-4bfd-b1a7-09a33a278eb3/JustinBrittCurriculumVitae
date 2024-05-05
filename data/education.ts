export const educationData = [
    {
        title: "Education",
        items: [
            {
                degree: "Doctor of Philosophy in Industrial and Manufacturing Systems Engineering",
                university: "University of Windsor",
                location: "Windsor, Ontario, Canada",
                date: "October 2023"
            },
            {
                degree: "Master of Applied Science in Industrial Engineering",
                university: "University of Windsor",
                location: "Windsor, Ontario, Canada",
                date: "June 2016"
            },
            {
                degree: "Bachelor of Science in Industrial Engineering",
                university: "Louisiana Tech University",
                location: "Ruston, Louisiana, United States of America",
                date: "May 2014"
            },
            {
                degree: "Bachelor of Science in Physics",
                university: "The University of Winnipeg",
                location: "Winnipeg, Manitoba, Canada",
                date: "June 2010"
            },
        ],
    }
];

export type EducationContent = {
    title: string;
    items: {
        degree: string;
        university: string;
        location: string;
        date: string;
    }[];
};

export type EducationContentData = EducationContent[];