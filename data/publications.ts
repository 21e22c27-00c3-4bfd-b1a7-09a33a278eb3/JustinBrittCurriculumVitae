export const publicationsData = [
    {
        title: "Publications",
        items: [
            {
                citation: "Britt, J., Azab, A., Baki, M. F., & Bin Hassan, R. (2023). Optimizing operating room planning and scheduling using robust optimization and fuzzy hyperheuristics: addressing the case mix problem. May 29-31, 2023, CORS Optimization Days at HEC Montreal, Montreal, Canada.",
                type: "Abstract",
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
