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
            {
                citation: "Britt, J., Li, X., Azab, A., \& Baki, M. F. (2022). Stochastic goal programming and metaheuristics for the master surgical scheduling problem. International Journal of Operational Research, 43(1-2), 5-41.",
                type: "Journal Article",
                doi: "https://doi.org/10.1504/IJOR.2022.121492"
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