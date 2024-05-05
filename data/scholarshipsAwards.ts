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
            {
                scholarshipAward: "Joeleene McBride Endowed Scholarship",
                date: "2013 - 2014"
            },
            {
                scholarshipAward: "Charles G. Tullis Endowed Scholarship",
                date: "2012 - 2013"
            },
            {
                scholarshipAward: "President's Honor List - Fall 2012, Winter 2013, Winter 2014, Spring 2014",
                date: "2012 - 2014"
            },
            {
                scholarshipAward: "Bulldog Out of State Scholarship",
                date: "2012 - 2014"
            },
            {
                scholarshipAward: "Dean's Honor List - All Eligible Quarters",
                date: "2011 - 2014"
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