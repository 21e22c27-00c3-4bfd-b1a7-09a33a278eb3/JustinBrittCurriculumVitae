export const certificatesData = [
    {
        title: "Certificates",
        items: [
            {
                certificate: "Introduction to Gender-based Analysis Plus",
                issuer: "Women and Gender Equality Canada",
                date: "September 29, 2022"
            },
            {
                certificate: "Tri-Council Policy Statement: Ethical Conduct for Research Involving Humans Course on Research Ethics (TCPS 2: CORE)",
                issuer: "Panel on Research Ethics",
                date: "February 29, 2016"
            },
            {
                certificate: "Protecting Human Research Participants",
                issuer: "National Institutes of Health (NIH) Office of Extramural Research",
                date: "February 28, 2016"
            },
        ],
    }
];

export type CertificatesContent = {
    title: string;
    items: {
        certificate: string;
        issuer: string;
        date: string;
    }[];
};

export type CertificatesContentData = CertificatesContent[];