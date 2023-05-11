import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
//import { tokens } from "../../theme";


const Team = () => {
    const theme = useTheme();
    //const colors = tokens(theme.palette.mode);
    return (
    <Box sx={{ m: "20px" }}>
      <Header title="Our Team" subtitle="Contact information" />
      <Box sx={{ display: "flex", gap: "40px" }}>
        {/* First team member */}
        <Box sx={{ maxWidth: "400px" }}>
          <Typography variant="h2" mb="10px">
            Marino Kuljanac
          </Typography>
          <Typography variant="body1" mb="10px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
            tristique orci, vitae bibendum erat volutpat eget.
          </Typography>
          <Typography variant="subtitle2" mb="5px">
            Contact:
          </Typography>
          <Typography variant="body2" mb="5px">
            Email: john.doe@example.com
          </Typography>
          <Typography variant="body2">Phone: 555-555-5555</Typography>
        </Box>
        {/* Second team member */}
        <Box sx={{ maxWidth: "400px" }}>
          <Typography variant="h2" mb="10px">
            Krunoslav Matić
          </Typography>
          <Typography variant="body1" mb="10px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
            tristique orci, vitae bibendum erat volutpat eget.
          </Typography>
          <Typography variant="subtitle2" mb="5px">
            Contact:
          </Typography>
          <Typography variant="body2" mb="5px">
            Email: jane.smith@example.com
          </Typography>
          <Typography variant="body2">Phone: 555-555-5555</Typography>
        </Box>
        {/* Third team member */}
        <Box sx={{ maxWidth: "400px" }}>
          <Typography variant="h2" mb="10px">
            Mislav Penić
          </Typography>
          <Typography variant="body1" mb="10px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
            tristique orci, vitae bibendum erat volutpat eget.
          </Typography>
          <Typography variant="subtitle2" mb="5px">
            Contact:
          </Typography>
          <Typography variant="body2" mb="5px">
            Email: bob.johnson@example.com
          </Typography>
          <Typography variant="body2">Phone: 555-555-5555</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Team;
