import { extendTheme } from "@chakra-ui/react";

const colors = {
    watermillion: {
        100: "#f56991"
    },
    feeling_orange: {
        100: "#ff9f80" 
    },
    orange_sherbert: {
        100: "#ffc48c"
    },
    honey_do: {
        100: "#effab4"
    },
    lime: {
        100: "#d1f2a5"
    },
};

const customTheme = extendTheme({ colors });

export default customTheme;
