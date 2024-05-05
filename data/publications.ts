export const publicationsData = [
    {
        title: "Publications",
        items: [
            {
                citation: "Britt, J., Azab, A., Baki, M. F., & Bin Hassan, R. (2023). Optimizing operating room planning and scheduling using robust optimization and fuzzy hyperheuristics: addressing the case mix problem. May 29-31, 2023, CORS Optimization Days at HEC Montreal, Montreal, Canada.",
                type: "Abstract",
                doi: ""
            },
            {
                citation: "Britt, J. (2023). Mathematical programming and heuristic design for planning of operating rooms.",
                type: "Doctoral Dissertation",
                doi: ""
            },
        ],
    }
];

export type PublicationsContent = {
    title: string;
    items: {
        citation: string;
        type: string;
        doi: string;
    }[];
};

export type PublicationsContentData = PublicationsContent[];