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
