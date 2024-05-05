export const scholarshipsAwardsData = [
    {
        title: "Scholarships and Awards",
        items: [
            {
                scholarshipAward: "General Graduate Endowment Award",
                date: "2023"
            },
            {
                scholarshipAward: "Dr. Ross H. Paul Scholarship in Graduate Studies",
                date: "2021"
            },
            {
                scholarshipAward: "A.R and E.G. Ferris Award",
                date: "2016, 2022"
            },
            {
                scholarshipAward: "University of Windsor Doctoral Entrance Scholarship (Canadian)",
                date: "2016 - 2019"
            },
            {
                scholarshipAward: "University of Windsor Graduate Student Bursary",
                date: "2015, 2021"
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