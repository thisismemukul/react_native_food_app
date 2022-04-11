export const COLORS = {
    primary: "#F54B72",
    secondary: "#F9E4E8",
    background: "#FCFCFC",
    white: "#FFFFFF",
    dark: "#172B4D",
    lightDark: "#9BA3B2",
    gray: "#74858C",
};

export const SIZES = {
    base: 8,
    small: 12,
    font: 14,
    medium: 16,
    large: 18,
    extraLarge: 24,
    extremeLarge: 32,
};
export const FONTS = {
    black: "Roboto_900Black",
    bold: "Roboto_700Bold",
    medium: "Roboto_500Medium",
    regular: "Roboto_400Regular",
    light: "Roboto_300Light",
};

export const SHADOWS = {
    light: {
        shadowColor: COLORS.gray,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    medium: {
        shadowColor: COLORS.gray,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    dark: {
        shadowColor: COLORS.gray,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },
};