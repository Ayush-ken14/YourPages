import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";


//  https://yourpage.onrender.com
//  http://localhost:3001


const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
         Advertising
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://yourpage.onrender.com/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Adidas</Typography>
        <Typography color={medium}>www.adidas.co.in</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      For decades players have trusted in adidas football boots. Some of the 
      greatest and most important goals of all time have been scored by a pair 
      of adidas boots. 
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
