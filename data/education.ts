export const educationData = [
    {
        title: "Education",
        items: [
            {
                title: "Doctor of Philosophy in Industrial and Manufacturing Systems Engineering",
                subTitle: "University of Windsor",
                location: "Windsor, Ontario, Canada",
                date: "October 2023",
                description: "",
            },
            {
                title: "Master of Applied Science in Industrial Engineering",
                subTitle: "University of Windsor",
                location: "Windsor, Ontario, Canada",
                date: "June 2016",
                description: "",
            },
            {
                title: "Bachelor of Science in Industrial Engineering",
                subTitle: "Louisiana Tech University",
                location: "Ruston, Louisiana, United States of America",
                date: "May 2014",
                description: "",
            },
            {
                title: "Bachelor of Science in Physics",
                subTitle: "The University of Winnipeg",
                location: "Winnipeg, Manitoba, Canada",
                date: "June 2010",
                description: "",
            },
        ],
    }
];

export type EducationContent = {
    title: string;
    items: {
        title: string;
        subTitle: string;
        location: string;
        date: string;
        description: string;
    }[];
};

export type EducationContentData = EducationContent[];
