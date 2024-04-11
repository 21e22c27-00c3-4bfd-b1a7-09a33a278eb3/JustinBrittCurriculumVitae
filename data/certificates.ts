export const certificatesData = [
    {
        title: "Certificates",
        items: [
            {
                certificate: "Introduction to Gender-based Analysis Plus",
                issuer: "Women and Gender Equality Canada",
                date: "September 29, 2022"
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
