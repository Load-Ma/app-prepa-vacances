import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    theme_orange: {
        primary: "#FFB546", // Orange
        secondary: "#FFEDD2",   // light orange
        icons: "#fff",   // Black
        titleColor: "#000", // white
        fontColor: "#000" // white
    },
    theme_purple: {
        primary: "#A74FFF", // purple
        secondary: "#EEE2FB",   // light purple
        icons: "#fff",   // white
        titleColor: "#fff", // white
        fontColor: "#000" // Black
    },

    // colors
    black: "#1E1F20",
    white: "#FFFFFF",
    lightGray: "#eff2f5",
    gray: "#8b9097",
};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,

    // app dimensions
    width,
    height
};
export const FONTS = {

};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
