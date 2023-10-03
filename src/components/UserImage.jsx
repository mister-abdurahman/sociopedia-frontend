import { Box } from "@mui/material";
import alert from "../images/alert.svg";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        loading="lazy"
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        // src={`http://localhost:3001/assets/${image}`}
        // src={`/assets/${image}`}
        src={
          image
            ? `https://social-app-server.onrender.com/assets/${image}`
            : `${alert}`
        }
      />
      )
    </Box>
  );
};

export default UserImage;
