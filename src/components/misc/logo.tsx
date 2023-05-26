import type { HTMLChakraProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

// import { theme } from "@/utils/configurations";
import CompanyLogo from "../../assets/logo/logo-white.png";

type LogoProps = {
  pcolor?: string;
  scolor?: string;
};

export const Logo = ({
  // pcolor = theme.colors.orange,
  // scolor = theme.colors.white,
  width = "120px",
  height = "120px",
}: // ...props
HTMLChakraProps<"svg"> & LogoProps) => (
  <Box width={width} height={height}>
    {/* <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x={0}
        y={0}
        viewBox="0 0 90.8 92.9"
      >
        <image
          style={{
            overflow: "visible",
          }}
          width={557}
          height={148}
          xlinkHref="35F5E2B3.png"
          transform="translate(853.666 -334.23)"
        />
        <path
          className="st0"
          d="M513.5 27c-.1.5-.3 1-.5 1.5l-1.1 2.9h3.2l-1-2.7c-.3-.6-.5-1.2-.6-1.7zM549.8-10.4c-1.3-.5-3.3-.7-6.1-.7h-7.5v27.3h7.6c2.3 0 4.2-.2 5.5-.7 1.3-.4 2.4-1.1 3.2-1.8 1.1-1.1 2-2.6 2.6-4.5.6-1.9.9-4.2.9-6.9 0-3.7-.6-6.6-1.8-8.6-1.2-2.1-2.7-3.4-4.4-4.1zM545.3 27.1c-.5-.3-1.1-.5-1.8-.5-.9 0-1.8.3-2.4 1-.7.6-1 1.7-1 3.3 0 1.2.3 2.2 1 2.9.6.7 1.5 1 2.4 1 1 0 1.8-.4 2.5-1.1.6-.7 1-1.7 1-3 0-.8-.1-1.5-.4-2.2-.4-.6-.8-1.1-1.3-1.4zM568.3 27c-.1.5-.3 1-.5 1.5l-1.1 2.9h3.1l-1-2.7c-.1-.6-.3-1.2-.5-1.7zM576.4 17.3c2.2 0 4-.8 5.4-2.5 1.4-1.6 2.2-4.2 2.2-7.6 0-3.2-.7-5.6-2.2-7.3s-3.3-2.5-5.4-2.5c-2.2 0-4 .8-5.5 2.5-1.4 1.6-2.2 4.1-2.2 7.4s.7 5.8 2.2 7.4c1.5 1.8 3.4 2.6 5.5 2.6zM412-18.4c-13.4 0-24.3 10.9-24.3 24.3s10.9 24.3 24.3 24.3 24.3-10.9 24.3-24.3c-.1-13.5-10.9-24.3-24.3-24.3zm0 45.4c-11.7 0-21.2-9.5-21.2-21.2s9.5-21.2 21.2-21.2c.8 0 1.7 0 2.5.2-1.7 2.8-3 5.9-4 9.2-4.4.6-8.1 3.5-9.6 7.6h6.7V10h-6.7c1.5 4.1 5.2 7.2 9.7 7.8 1 3.2 2.3 6.3 4 9.2-1-.1-1.8 0-2.6 0zm12.4-4.1c.7-5.2.8-9.5.6-13h-8.4c.7 5.3 2.8 10.1 5.9 14.1v.1l-.6.3c-1.7.9-3.6 1.6-5.6 2.1-1.7-2.7-3-5.6-4-8.7-.1-.3-.2-.6-.3-1-.1-.3-.2-.7-.3-1-.8-3.2-1.3-6.5-1.3-10s.4-6.8 1.3-10c.1-.4.2-.7.3-1 .1-.3.2-.6.3-1 1-3.1 2.3-6 4-8.7 9.5 2.1 16.6 10.5 16.6 20.7.2 7-3.2 13.3-8.5 17.1z"
        />
        <path
          className="st0"
          d="M419-5.2h-.5c-.8 2.1-1.5 4.4-1.8 6.8h6.8c-.2-.6-.4-1.1-.6-1.6-1.8-4.2-3.9-5.2-3.9-5.2zM499.7 28.4l.5.6c.5-.3.8-.5.9-.8.1-.2.2-.5.2-.7 0-.3-.1-.6-.3-.8s-.4-.3-.7-.3c-.3 0-.6.1-.8.3-.2.2-.3.4-.3.7 0 .1 0 .3.1.4.1.3.3.5.4.6zM498.3 31.9c-.2.3-.3.7-.3 1 0 .4.2.8.5 1.2s.7.6 1.3.6c.4 0 .7-.1 1.1-.3.4-.2.7-.5.9-.8l-2.2-2.7c-.6.3-1 .7-1.3 1z"
        />
        <path
          className="st1"
          fill={`${pcolor}`}
          d="M410.3-31.3c.9.1 1.7-.5 1.8-1.4l2.5-20c.1-.9-.5-1.7-1.4-1.8s-1.7.5-1.8 1.4l-2.5 20c-.2.9.5 1.7 1.4 1.8zM401.3-30.7c.4.8 1.4 1.1 2.2.7.8-.4 1.1-1.4.7-2.2l-10.6-21c-.4-.8-1.4-1.1-2.2-.7-.8.4-1.1 1.4-.7 2.2l10.6 21zM398.6-25.2c.5-.8.2-1.8-.6-2.2l-17.5-10.1c-.8-.5-1.8-.2-2.2.6-.5.8-.2 1.8.6 2.2l17.5 10.1c.8.5 1.8.2 2.2-.6zM479.7 20.4v-4.3h-22V4h19.8V-.2h-19.8V-11.1l20.6-.1h.5v-4.2H453V20.4zM485.9-15.4H481.5v35.8h4.4zM490.7-15.4h-.1v35.8h4.4v-35.8zM504.2-5.5H499.8v25.9h4.4zM524.7 6.7c-1.2-.5-3.4-1.2-6.5-2-2.1-.6-3.4-1-3.9-1.1-.8-.3-1.3-.7-1.7-1.2-.4-.5-.5-1-.5-1.5 0-.9.4-1.7 1.3-2.3.9-.7 2.3-1 4.3-1 1.7 0 3 .4 4 1.1.9.7 1.5 1.8 1.7 3.1l4.1-.6h.1c-.3-1.7-.8-3-1.5-4s-1.9-1.8-3.4-2.4c-1.5-.6-3.3-.9-5.4-.9-1.3 0-2.6.2-3.8.5-1.2.3-2.1.8-2.8 1.3-.9.6-1.6 1.5-2.2 2.5-.5 1-.8 2.1-.8 3.2 0 1.3.3 2.4 1 3.5.6 1 1.6 1.9 2.8 2.5 1.2.6 3.5 1.3 6.7 2.1 2.4.6 3.9 1.1 4.5 1.5.9.6 1.3 1.3 1.3 2.3 0 1.1-.5 2.1-1.5 2.9-1 .8-2.5 1.2-4.5 1.2s-3.6-.5-4.7-1.4c-1.1-.9-1.8-2.3-2-4l-4.3.7h-.1c.5 2.7 1.6 4.8 3.4 6.2 1.8 1.4 4.3 2.1 7.7 2.1 2 0 3.9-.4 5.5-1.1 1.6-.7 2.8-1.7 3.7-3 .9-1.3 1.3-2.7 1.3-4.1 0-1.5-.4-2.8-1-3.8s-1.6-1.8-2.8-2.3z"
        />
        <path
          className="st2"
          fill={`${pcolor}`}
          d="M559.6-6.2c-.9-2.5-2.4-4.5-4.2-6.1-1.4-1.2-3.2-2.1-5.2-2.6-1.5-.3-3.6-.5-6.4-.5h-12.3v35.7h12.9c2.2 0 4.1-.2 5.7-.6 1.7-.4 3.1-1 4.3-1.8 1.2-.8 2.3-1.9 3.3-3.2 1-1.4 1.8-3.1 2.4-5.2.6-2.1 1-4.5 1-7.2-.1-3.2-.6-6-1.5-8.5zm-3.5 8.4c0 2.7-.3 5-.9 6.9-.6 1.9-1.5 3.4-2.6 4.5-.8.8-1.9 1.4-3.2 1.8-1.3.4-3.2.7-5.5.7h-7.6v-27.3h7.5c2.8 0 4.9.2 6.1.7 1.7.7 3.2 2 4.5 4 1.1 2.1 1.7 5 1.7 8.7zM576.4 21c2.2 0 4.4-.5 6.3-1.6 1.9-1.1 3.4-2.6 4.4-4.5 1-1.9 1.5-4.5 1.5-7.9 0-4.1-1.1-7.3-3.4-9.7-2.3-2.3-5.2-3.5-8.7-3.5-3.2 0-5.9 1-8.1 2.9-2.7 2.3-4 5.9-4 10.7 0 4.4 1.1 7.7 3.4 10 2.1 2.4 5 3.6 8.6 3.6zM571 0c1.4-1.6 3.3-2.5 5.5-2.5 2.1 0 4 .8 5.4 2.5s2.2 4.1 2.2 7.3c0 3.4-.7 5.9-2.2 7.6-1.4 1.6-3.3 2.5-5.4 2.5-2.2 0-4-.8-5.5-2.5-1.4-1.6-2.2-4.1-2.2-7.4s.7-5.9 2.2-7.5zM603.1 21c2.8 0 5.2-.8 7.2-2.5 1.9-1.6 3.1-3.9 3.6-6.7 0-.1 0-.2.1-.3l-4.3-.5c-.3 2.2-1 3.8-2.2 4.9-1.1 1-2.6 1.6-4.3 1.6-2.1 0-3.9-.8-5.2-2.4-1.3-1.6-2-4.1-2-7.6 0-3.4.7-5.9 2.1-7.5 1.4-1.6 3.2-2.4 5.4-2.4 1.5 0 2.7.4 3.7 1.3s1.8 2.2 2.2 3.9l4-.6h.3c-.5-2.6-1.7-4.6-3.4-6.1-1.8-1.4-4.1-2.1-6.9-2.1-2.2 0-4.3.5-6.2 1.6-1.9 1-3.3 2.6-4.2 4.7-.9 2.1-1.4 4.6-1.4 7.3 0 4.3 1.1 7.7 3.2 10 1.9 2.2 4.8 3.4 8.3 3.4zM636.4 12.8c0-1.5-.4-2.8-1-3.8-.7-1-1.7-1.8-2.9-2.3-1.2-.5-3.4-1.2-6.5-2-2.1-.6-3.4-1-3.9-1.1-.8-.3-1.3-.7-1.7-1.2-.4-.5-.5-1-.5-1.5 0-.9.4-1.7 1.3-2.3.9-.7 2.3-1 4.3-1 1.7 0 3 .4 4 1.1.9.7 1.5 1.8 1.7 3.1l4.1-.6h.1c-.3-1.7-.8-3-1.5-4s-1.9-1.8-3.4-2.4c-1.5-.6-3.3-.9-5.4-.9-1.3 0-2.6.2-3.8.5-1.2.3-2.1.8-2.8 1.3-.9.6-1.6 1.5-2.2 2.5-.5 1-.8 2.1-.8 3.2 0 1.3.3 2.4 1 3.5.6 1 1.6 1.9 2.8 2.5 1.2.6 3.5 1.3 6.7 2.1 2.4.6 3.9 1.1 4.5 1.5.9.6 1.3 1.3 1.3 2.3 0 1.1-.5 2.1-1.5 2.9-1 .8-2.5 1.2-4.5 1.2s-3.6-.5-4.7-1.4c-1.1-.9-1.8-2.3-2-4l-4.3.7h-.1c.5 2.7 1.6 4.8 3.4 6.2 1.8 1.4 4.3 2.1 7.7 2.1 2 0 3.9-.4 5.5-1.1 1.6-.7 2.8-1.7 3.7-3 1-1.3 1.4-2.7 1.4-4.1zM455 31.2h5.7v-1.5H455v-2.9h6.1v-1.5h-7.8v10.6h8v-1.4H455zM464.6 25.3h-1.7v10.6h6.8v-1.4h-5.1zM472.6 25.3H471v10.6h6.7v-1.4h-5.1zM479.4 25.3h1.6v10.6h-1.6zM489.4 30.2c-.4-.2-1.2-.4-2.3-.7-1.4-.3-1.8-.6-2-.7-.2-.2-.4-.5-.4-.8 0-.4.2-.7.5-1 .4-.3.9-.4 1.7-.4.8 0 1.3.2 1.7.5.4.3.6.8.7 1.4v.1l1.6-.1v-.1c0-.6-.2-1.2-.5-1.7s-.8-.9-1.4-1.1c-.6-.3-1.3-.4-2.1-.4-.7 0-1.4.1-2 .4-.6.2-1.1.6-1.4 1.1s-.5 1-.5 1.5.1 1 .4 1.4c.3.4.6.7 1.2 1 .4.2 1.1.4 2 .7.9.2 1.6.4 1.8.5.4.2.7.3.9.6.2.2.3.5.3.8 0 .3-.1.6-.3.8-.2.3-.5.5-.8.6-.4.1-.8.2-1.3.2-.6 0-1.1-.1-1.5-.3-.4-.2-.8-.5-1-.8-.2-.3-.3-.7-.4-1.2v-.1l-1.5.1v.1c0 .7.2 1.4.6 1.9.4.6.9 1 1.6 1.3.6.3 1.5.4 2.4.4.8 0 1.4-.1 2.1-.4.6-.3 1.1-.7 1.4-1.2.3-.5.5-1.1.5-1.6 0-.6-.2-1.1-.5-1.5-.4-.6-.9-1-1.5-1.3zM503.8 33.4c.4-.6.7-1.3.9-2.2v-.1l-1.6-.3v.1c-.1.5-.2.9-.4 1.2l-1.6-2.1c1.3-.7 1.9-1.6 1.9-2.6 0-.6-.2-1.2-.7-1.7-.5-.5-1.1-.7-1.8-.7-.8 0-1.4.2-1.9.7-.5.5-.8 1.1-.8 1.7 0 .3.1.7.2 1 .2.3.4.7.9 1.2-.8.4-1.3.8-1.8 1.3-.4.5-.6 1.1-.6 1.8s.3 1.4.8 2c.6.7 1.5 1.1 2.6 1.1.6 0 1.1-.1 1.7-.4.5-.2.9-.6 1.3-1 .5.6 1 1.1 1.5 1.4l.1.1 1-1.2-.1-.1c-.7-.1-1.2-.6-1.6-1.2zm-4.2-6.7c.2-.2.5-.3.8-.3.3 0 .5.1.7.3s.3.5.3.8c0 .3-.1.5-.2.7-.1.2-.5.5-.9.8l-.5-.6c-.2-.2-.3-.4-.4-.5-.1-.2-.1-.3-.1-.4 0-.3 0-.6.3-.8zm1.3 7.7c-.4.2-.8.3-1.1.3-.6 0-1-.2-1.3-.6s-.5-.8-.5-1.2c0-.3.1-.6.3-1 .2-.3.6-.7 1.3-1.1l2.2 2.7c-.2.4-.5.7-.9.9zM514.3 25.3h-1.6l-4.1 10.6h1.7l1.1-3.1h4.2l1.2 3.1h1.8l-4.3-10.6zm-2.3 6.1 1.1-2.9c.2-.5.3-1 .5-1.5.2.5.4 1.1.6 1.7l1 2.7H512zM525.7 30.2c-.4-.2-1.2-.4-2.3-.7-1.4-.3-1.8-.6-2-.7-.2-.2-.4-.5-.4-.8 0-.4.2-.7.5-1 .4-.3.9-.4 1.7-.4.8 0 1.3.2 1.7.5.4.3.6.8.7 1.4v.1l1.6-.1v-.1c0-.6-.2-1.2-.5-1.7s-.8-.9-1.4-1.1c-.6-.3-1.3-.4-2.1-.4-.7 0-1.4.1-2 .4-.6.2-1.1.6-1.4 1.1-.3.5-.5 1-.5 1.5s.1 1 .4 1.4c.3.4.6.7 1.2 1 .4.2 1.1.4 2 .7.9.2 1.6.4 1.8.5.4.2.7.3.9.6.2.2.3.5.3.8 0 .3-.1.6-.3.8-.2.3-.5.5-.8.6-.4.1-.8.2-1.3.2-.6 0-1.1-.1-1.5-.3-.4-.2-.8-.5-1-.8-.2-.3-.3-.7-.4-1.2v-.1l-1.5.1v.1c0 .7.2 1.4.6 1.9.4.6.9 1 1.6 1.3.6.3 1.5.4 2.4.4.8 0 1.4-.1 2.1-.4.6-.3 1.1-.7 1.4-1.2.3-.5.5-1.1.5-1.6 0-.6-.2-1.1-.5-1.5-.4-.6-.9-1-1.5-1.3zM535.4 30.2c-.4-.2-1.2-.4-2.3-.7-1.4-.3-1.8-.6-2-.7-.2-.2-.4-.5-.4-.8 0-.4.2-.7.5-1 .4-.3.9-.4 1.7-.4.8 0 1.3.2 1.7.5.4.3.6.8.7 1.4v.1l1.6-.1v-.1c0-.6-.2-1.2-.5-1.7s-.8-.9-1.4-1.1c-.6-.3-1.3-.4-2.1-.4-.7 0-1.4.1-2 .4-.6.2-1.1.6-1.4 1.1-.3.5-.5 1-.5 1.5s.1 1 .4 1.4c.3.4.6.7 1.2 1 .4.2 1.1.4 2 .7.9.2 1.6.4 1.8.5.4.2.7.3.9.6.2.2.3.5.3.8 0 .3-.1.6-.3.8-.2.3-.5.5-.8.6-.4.1-.8.2-1.3.2-.6 0-1.1-.1-1.5-.3-.4-.2-.8-.5-1-.8-.2-.3-.3-.7-.4-1.2v-.1l-1.5.1v.1c0 .7.2 1.4.6 1.9.4.6.9 1 1.6 1.3.6.3 1.5.4 2.4.4.8 0 1.4-.1 2.1-.4.6-.3 1.1-.7 1.4-1.2.3-.5.5-1.1.5-1.6 0-.6-.2-1.1-.5-1.5-.5-.6-.9-1-1.5-1.3zM546.2 25.8c-.8-.5-1.7-.7-2.7-.7-1.5 0-2.7.5-3.7 1.5-.9 1-1.4 2.4-1.4 4.1 0 .9.2 1.8.6 2.6.4.8 1 1.5 1.8 2s1.7.7 2.7.7c.9 0 1.8-.2 2.6-.6.8-.4 1.4-1.1 1.9-1.9.4-.8.7-1.8.7-2.9s-.2-2-.6-2.8c-.5-.8-1.1-1.5-1.9-2zm-.2 7.8c-.6.7-1.5 1.1-2.5 1.1s-1.8-.3-2.4-1c-.6-.7-1-1.7-1-2.9 0-1.5.3-2.6 1-3.3.7-.6 1.5-1 2.4-1 .7 0 1.3.2 1.8.5s.9.8 1.2 1.4c.3.6.4 1.3.4 2.2 0 1.3-.3 2.3-.9 3zM557.5 32.2c-.2.8-.5 1.5-1 1.9-.5.4-1.1.6-1.9.6-.6 0-1.2-.2-1.7-.5s-.9-.8-1.1-1.4c-.3-.6-.4-1.4-.4-2.3 0-.7.1-1.3.3-2 .2-.6.6-1.1 1.1-1.5.5-.4 1.2-.5 1.9-.5s1.2.2 1.7.5c.4.3.8.9 1 1.6v.1l1.6-.4v-.1c-.3-1-.8-1.8-1.5-2.3-.7-.5-1.6-.8-2.7-.8-.9 0-1.8.2-2.6.6-.8.4-1.4 1.1-1.8 1.9-.4.8-.6 1.8-.6 2.9 0 1 .2 2 .6 2.8.4.9.9 1.6 1.6 2 .7.5 1.7.7 2.8.7 1.1 0 2.1-.3 2.8-.9.8-.6 1.3-1.5 1.6-2.6v-.1l-1.6-.4-.1.2zM560.8 25.3h1.6v10.6h-1.6zM569.2 25.3h-1.6l-4.1 10.6h1.7l1.1-3.1h4.2l1.2 3.1h1.8l-4.3-10.6zm-2.4 6.1 1.1-2.9c.2-.5.3-1 .5-1.5.2.5.4 1.1.6 1.7l1 2.7h-3.2zM572.4 26.8h3.5v9.1h1.6v-9.1h3.4v-1.5h-8.5zM583.7 31.2h5.8v-1.5h-5.8v-2.9h6.2v-1.5h-7.8v10.6h8v-1.4h-6.4zM598 30.2c-.4-.2-1.2-.4-2.3-.7-1.4-.3-1.8-.6-2-.7-.2-.2-.4-.5-.4-.8 0-.4.2-.7.5-1 .4-.3.9-.4 1.7-.4.8 0 1.3.2 1.7.5.4.3.6.8.7 1.4v.1l1.6-.1v-.1c0-.6-.2-1.2-.5-1.7s-.8-.9-1.4-1.1c-.6-.3-1.3-.4-2.1-.4-.7 0-1.4.1-2 .4-.6.2-1 .6-1.4 1.1-.3.5-.5 1-.5 1.5s.1 1 .4 1.4c.3.4.6.7 1.2 1 .4.2 1.1.4 2 .7.9.2 1.6.4 1.8.5.4.2.7.3.9.6.2.2.3.5.3.8 0 .3-.1.6-.3.8-.2.3-.5.5-.8.6-.4.1-.8.2-1.3.2-.6 0-1.1-.1-1.5-.3-.4-.2-.8-.4-1-.8-.2-.3-.3-.7-.4-1.2v-.1l-1.5.1v.1c0 .7.2 1.4.6 1.9.4.6.9 1 1.6 1.3.6.3 1.5.4 2.4.4.8 0 1.4-.1 2.1-.4.6-.3 1.1-.7 1.4-1.2.3-.5.5-1.1.5-1.6 0-.6-.2-1.1-.5-1.5-.4-.6-.9-1-1.5-1.3zM601.6 35.9h.7c0 .3-.1.6-.2.8-.1.2-.3.4-.5.5l-.1.1.5.7h.1c.4-.2.8-.5 1-.8.2-.3.3-.8.3-1.4v-1.6h-1.7v1.7zM609.7 25.3h1.6v10.6h-1.6zM620.4 33.2l-5.2-7.8-.1-.1h-1.6v10.6h1.6v-7.8l5.3 7.8h1.6V25.3h-1.6zM631.4 32.2c-.2.8-.5 1.5-1 1.9-.5.4-1.1.6-1.9.6-.6 0-1.2-.2-1.7-.5s-.9-.8-1.1-1.4c-.3-.6-.4-1.4-.4-2.3 0-.7.1-1.3.3-2 .2-.6.6-1.1 1.1-1.5.5-.4 1.2-.5 1.9-.5s1.2.2 1.7.5c.4.3.8.9 1 1.6v.1l1.6-.4v-.1c-.3-1-.8-1.8-1.5-2.3-.7-.5-1.6-.8-2.7-.8-.9 0-1.8.2-2.6.6-.8.4-1.4 1.1-1.8 1.9-.4.8-.6 1.8-.6 2.9 0 1 .2 2 .6 2.8.4.9.9 1.6 1.6 2s1.7.7 2.8.7c1.1 0 2.1-.3 2.8-.9.8-.6 1.3-1.5 1.6-2.6v-.1l-1.6-.4-.1.2zM634.7 34.2h1.7v1.7h-1.7z"
        />
        <circle className="st1" fill={`${pcolor}`} cx={502} cy={-12.8} r={3.4} />
        <path
          className="st2"
          fill={`${pcolor}`}
          d="M400.7 9.9h6.7V1.5h-6.7c1.6-4 5.2-7 9.6-7.6 1-3.2 2.3-6.3 4-9.2-.8-.1-1.6-.2-2.5-.2-11.7 0-21.2 9.5-21.2 21.2S400.3 27 412 27c.8 0 1.7 0 2.5-.1-1.7-2.9-3-5.9-4-9.2-4.6-.6-8.3-3.7-9.8-7.8z"
        />
        <path
          className="st1"
          fill={`${pcolor}`}
          d="M416.5-14.9c-1.7 2.7-3 5.6-4 8.7-.1.3-.2.6-.3 1-.1.3-.2.7-.3 1-.8 3.2-1.3 6.5-1.3 10s.4 6.8 1.3 10c.1.3.2.7.3 1 .1.3.2.6.3 1 1 3.1 2.3 6 4 8.7 2-.4 3.8-1.1 5.6-2.1l.6-.3V24c-3.1-4-5.2-8.9-5.9-14.1h8.4c.2 3.5.1 7.8-.6 13 5.3-3.9 8.7-10.1 8.7-17.1-.2-10.1-7.3-18.6-16.8-20.7zm.2 16.5c.3-2.3.9-4.6 1.8-6.8h.5s2.2 1 3.9 5.2c.2.5.4 1 .6 1.6h-6.8z"
        />
        <path
          className="st2"
          fill={`${pcolor}`}
          d="m468.8-37.2-3.6-10.1c-.4-1.1-1.6-1.7-2.7-1.2l-61.2 24.9c-1 .3-1.9.7-2.9 1.2h-.1c-10.8 5-18.3 16-18.3 28.8 0 .9 0 1.8.1 2.7 1.3 15.5 14 28 29.5 29 18.6 1.3 34.1-13.4 34.1-31.8 0-1.1-.1-2.1-.2-3.2 0-.2 0-.4-.1-.6l-.8-6.9v-.1l-.2-1.5c-.3-2.4.6-4.8 2.3-6.5l6.7-6.4L468.3-35c.6-.5.8-1.4.5-2.2zM412 30.1c-13.4 0-24.3-10.9-24.3-24.3s10.9-24.3 24.3-24.3 24.3 10.9 24.3 24.3c-.1 13.4-10.9 24.3-24.3 24.3z"
        />
        <path
          className="st0"
          
          d="M33.9 36.1C20.5 36.1 9.6 47 9.6 60.4s10.9 24.3 24.3 24.3 24.3-10.9 24.3-24.3C58.1 47 47.3 36.1 33.9 36.1zm0 45.5c-11.7 0-21.2-9.5-21.2-21.2s9.5-21.2 21.2-21.2c.8 0 1.7 0 2.5.2-1.7 2.8-3 5.9-4 9.2-4.4.6-8.1 3.5-9.6 7.6h6.7v8.4h-6.7c1.5 4.1 5.2 7.2 9.7 7.8 1 3.2 2.3 6.3 4 9.2-1-.1-1.8 0-2.6 0zm12.4-4.1c.7-5.2.8-9.5.6-13h-8.4c.7 5.3 2.8 10.1 5.9 14.1v.1l-.4.3c-1.7.9-3.6 1.6-5.6 2.1-1.7-2.7-3-5.6-4-8.7-.1-.3-.2-.6-.3-1-.1-.3-.2-.7-.3-1-.8-3.2-1.3-6.5-1.3-10s.4-6.8 1.3-10c.1-.4.2-.7.3-1 .1-.3.2-.6.3-1 1-3.1 2.3-6 4-8.7C47.9 41.8 55 50.3 55 60.4c0 7-3.4 13.2-8.7 17.1z"
          style={{
            fill: "#fff",
          }}
      />
        <path
          className="st0"
          d="M40.9 49.4h-.5c-.8 2.1-1.5 4.4-1.8 6.8h6.8c-.2-.6-.4-1.1-.6-1.6-1.8-4.2-3.9-5.2-3.9-5.2z"
          style={{
            fill: "#fff",
          }}
       />
        <path
          className="st1"
          fill={`${pcolor}`}
          d="M32.2 23.3c.9.1 1.7-.5 1.8-1.4l2.5-20c.1-1-.5-1.8-1.4-1.9s-1.7.5-1.8 1.4l-2.5 20c-.2 1 .5 1.8 1.4 1.9zM23.2 23.9c.4.8 1.4 1.1 2.2.7.8-.4 1.1-1.4.7-2.2l-10.6-21C15.1.6 14.1.3 13.3.7c-.8.4-1.1 1.4-.7 2.2l10.6 21zM20.5 29.4c.5-.8.2-1.8-.6-2.2L2.5 17.1c-.8-.5-1.8-.2-2.2.6-.5.8-.2 1.8.6 2.2L18.3 30c.8.5 1.8.2 2.2-.6z"
        />
        <path
          fill={`${pcolor}`}
          d="M22.6 64.5h6.7v-8.4h-6.7c1.6-4 5.2-7 9.6-7.6 1-3.2 2.3-6.3 4-9.2-.8-.1-1.6-.2-2.5-.2-11.7 0-21.2 9.5-21.2 21.2S22 81.5 33.7 81.5c.8 0 1.7 0 2.5-.1-1.7-2.9-3-5.9-4-9.2-4.4-.5-8.1-3.6-9.6-7.7z"
          // style={{
          //   fill: "#fff",
          // }}
        />
        <path
          fill={`${pcolor}`}
          className="st1"
          d="M38.4 39.7c-1.7 2.7-3 5.6-4 8.7-.1.3-.2.6-.3 1-.1.3-.2.7-.3 1-.8 3.2-1.3 6.5-1.3 10s.4 6.8 1.3 10c.1.3.2.7.3 1 .1.3.2.6.3 1 1 3.1 2.3 6 4 8.7 2-.4 3.8-1.1 5.6-2.1l.6-.3v-.1c-3.1-4-5.2-8.9-5.9-14.1h8.4c.2 3.5.1 7.8-.6 13 5.3-3.9 8.7-10.1 8.7-17.1-.2-10.1-7.3-18.6-16.8-20.7zm.2 16.4c.3-2.3.9-4.6 1.8-6.8h.5s2.2 1 3.9 5.2c.2.5.4 1 .6 1.6h-6.8z"
        />
        <path
          fill={`${pcolor}`}
          className="st1"
          d="M90.7 17.4 87.1 7.3c-.4-1.1-1.6-1.7-2.7-1.2L23.2 30.9c-1 .3-1.9.7-2.9 1.2h-.1C9.4 37.2 1.9 48.2 1.9 61c0 .9 0 1.8.1 2.7 1.3 15.5 14 28 29.5 29C50.1 94.1 65.6 79.3 65.6 61c0-1.1-.1-2.1-.2-3.2 0-.2 0-.4-.1-.6l-.8-6.9v-.1l-.2-1.7c-.3-2.4.6-4.8 2.3-6.5l6.7-6.4 16.8-16.1c.7-.5.9-1.3.6-2.1zM33.9 84.6c-13.4 0-24.3-10.9-24.3-24.3S20.5 36 33.9 36s24.3 10.9 24.3 24.3c-.1 13.5-10.9 24.3-24.3 24.3z"
        />
        {/* <style>{`.st0{fill:none}.st1{fill:${color}}.st2{fill:${color}}`}</style> * /}

      </svg> */}
    {/* <img src={CompanyLogo.src} /> */}
    <Image src={CompanyLogo} alt="logo" />
  </Box>
);
