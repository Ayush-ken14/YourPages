import { Box } from "@mui/material";


//  https://yourpage.onrender.com
//  http://localhost:3001

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`https://yourpage.onrender.com/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
