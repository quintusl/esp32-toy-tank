export const cls = (input: string) =>
    input
        .replace(/\s+/gm, " ")
        .split(" ")
        .filter((cond: any) => typeof cond === "string")
        .join(" ")
        .trim();