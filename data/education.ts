export const educationData = [
    {
        title: "Education",
        items: [
            {
                title: "Doctor of Philosophy in Industrial and Manufacturing Systems Engineering",
                subTitle: "University of Windsor",
                date: "October 2023",
                description: "",
            },
            {
                title: "Master of Applied Science in Industrial Engineering",
                subTitle: "University of Windsor",
                date: "June 2016",
                description: "",
            },
            {
                title: "Bachelor of Science in Physics",
                subTitle: "The University of Winnipeg",
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
        date: string;
        description: string;
    }[];
};

export type EducationContentData = EducationContent[];
