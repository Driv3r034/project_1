const defaultValue = 16;

export const rem = (px: number): string => {
    return `${px / defaultValue}rem`;
};
