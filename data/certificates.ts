export const certificatesData = [
    {
        title: "Certificates",
        items: [
            {
                certificate: "",
                issuer: "",
                date: ""
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
