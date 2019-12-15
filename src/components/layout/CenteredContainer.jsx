import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

function CenteredContainer(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography
          component="div"
          style={{ display: "flex", height: "100vh", alignItems: "center" }}
        >
          {props.children}
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default CenteredContainer;
