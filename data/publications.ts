export const publicationsData = [
    {
        title: "Publications",
        items: [
            {
                citation: "",
            },
        ],
    }
];

export type PublicationsContent = {
    title: string;
    items: {
        citation: string;
    }[];
};

export type PublicationsContentData = PublicationsContent[];
