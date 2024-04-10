export const workExperienceData = [
    {
        title: "Work Experience",
        items: [
            {
                title: "Sessional Instructor",
                subTitle: "Cape Breton University",
                date: "September 2023 - April 2024",
                description: "",
            },
        ],
    }
];

export type WorkExperienceContent = {
    title: string;
    items: {
        title: string;
        subTitle: string;
        date: string;
        description: string;
    }[];
};

export type WorkExperienceContentData = WorkExperienceContent[];
