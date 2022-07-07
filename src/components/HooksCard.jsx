import React from "react";
import {
  Box,
  Card,
  CardActions,
  Button,
  CardContent,
  Typography,
  Stack,
  CardMedia,
  createTheme,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";

const HooksCard = ({ hook }) => {
  const muiBaseTheme = createTheme();

  return (
    <Box>
      <Card
        sx={{
          maxWidth: 300,
          height: 400,
          margin: "auto",
          transition: "0.3s",
          boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
          "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
          },
        }}
      >
        <CardMedia image={hook.image} component="img" />
        <CardContent
          sx={{ textAlign: "left", padding: muiBaseTheme.spacing.unit * 3 }}
        >
          <Typography gutterBottom variant="h6">
            {hook.name}
          </Typography>
          <Divider
            sx={{ margin: `${muiBaseTheme.spacing.unit * 3}px 0` }}
            light
          />
          <Typography variant="caption">{hook.description}</Typography>
        </CardContent>
        <CardActions>
          <Stack spacing={2} direction="row">
            <Button
              size="small"
              variant="contained"
              component={Link}
              to={"/detail/" + hook.id}
            >
              View More
            </Button>
            <Button
              size="small"
              variant="outlined"
              href={hook.link}
              target="_blank"
              rel="noreferrer"
            >
              When To Use
            </Button>
          </Stack>
        </CardActions>
      </Card>
    </Box>
  );
};

export default HooksCard;
