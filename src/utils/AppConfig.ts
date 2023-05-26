// FIXME: Update this configuration file based on your project information

import { extendTheme } from "@chakra-ui/react";

export const AppConfig = {
  site_name: "elis-docs.com",
  title: "Elis Docs",
  description: "Elis Docs (Ellis & Associates, Incorporation)",
  locale: "en",
};

export const theme1 = extendTheme({
  colors: {
    whit: "#fff",
    blac: {
      100: "#1B2027",
    },
    orang: {
      100: "#df7f1b",
      200: "#DC963C",
      300: "#e2a85d",
    },
    myblue: "#1f3c71",
    blu: {
      100: "#1f3c71",
      200: "#2F559D",
      300: "rgba(38,81,137,0.42)", // for icons
      400: "#bee3f8", // for icons hover
      500: "#cfeafa", // to table row hover
    },
    danger: {
      100: "#FF4A23",
      200: "#ff8b71",
    },
    gree: {
      100: "#00bf23",
      200: "#84ff9b",
    },
    nav: {
      100: "rgba(190, 227, 248, .7)",
    },
    graye: {
      100: "#e9e9e9",
      200: "#d5d5d5",
      300: "#efefef",
      400: "#b8b8b8",
      500: "",
    },
  },
  fonts: {
    heading: `Raleway, sans-serif`,
    text: "Raleway, sans-serif",
    body: "Raleway, sans-serif",
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        color: "blac.100",
      },
      div: {
        color: "blac.100",
      },
      // styles for the `a`
      // a: {
      //   color: 'teal.500',
      //   _hover: {
      //     textDecoration: 'underline',
      //   },
      // },
    },
  },
});
// export const theme2 = extendTheme({
//   colors: {
//     whit: "#fff",
//     blac: {
//       100: "#1B2027",
//     },
//     orang: {
//       100: "#2080E4",
//       200: "#4980B9",
//       300: "#6AAAED",
//     },
//     myblue: "#704D76",
//     blu: {
//       100: "#9F88A3",
//       200: "#51444F",
//       300: "rgba(38,81,137,0.42)", // for icons
//       400: "#FBD362", // for icons hover
//       500: "#FCE196", // to table row hover
//     },
//     danger: {
//       100: "#FF4A23",
//       200: "#ff8b71",
//     },
//     gree: {
//       100: "#00bf23",
//       200: "#84ff9b",
//     },
//     nav: {
//       100: "rgba(190, 227, 248, .7)",
//     },
//     graye: {
//       100: "#e9e9e9",
//       200: "#d5d5d5",
//       300: "#efefef",
//       400: "#b8b8b8",
//       500: "",
//     },
//   },
//   fonts: {
//     heading: `Raleway, sans-serif`,
//     text: "Raleway, sans-serif",
//     body: "Raleway, sans-serif",
//   },
//   styles: {
//     global: {
//       // styles for the `body`
//       body: {
//         color: "blac.100",
//       },
//       div: {
//         color: "blac.100",
//       },
//       // styles for the `a`
//       // a: {
//       //   color: 'teal.500',
//       //   _hover: {
//       //     textDecoration: 'underline',
//       //   },
//       // },
//     },
//   },
// });
