export const publicationsData = [
    {
        title: "Publications",
        items: [
            {
                citation: "",
                type: "",
            },
        ],
    }
];

export type PublicationsContent = {
    title: string;
    items: {
        citation: string;
        type: string;
    }[];
};

export type PublicationsContentData = PublicationsContent[];
