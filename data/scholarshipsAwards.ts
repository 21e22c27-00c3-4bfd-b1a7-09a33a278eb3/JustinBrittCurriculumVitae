export const scholarshipsAwardsData = [
    {
        title: "Scholarships and Awards",
        items: [
            {
                scholarshipAward: "General Graduate Endowment Award",
                date: "2023"
            },
        ],
    }
];

export type ScholarshipsAwardsContent = {
    title: string;
    items: {
        scholarshipAward: string;
        date: string;
    }[];
};

export type ScholarshipsAwardsContentData = ScholarshipsAwardsContent[];