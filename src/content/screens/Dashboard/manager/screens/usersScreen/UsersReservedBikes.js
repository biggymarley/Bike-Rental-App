import { Modal, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserReservedBikes } from "../../../../../firebase/firebase";
import BikesList from "../../../../../components/BikesList/BikesList";
import noBikes from "../../../../../../assets/no-bikes.png";
import { StatusContext } from "../../../../../utils/contexts";
export default function UsersReservedBikes() {
  const [userBikes, setuserBikes] = useState([]);
  let { userid } = useParams();
  const { dispatch } = useContext(StatusContext);
  const navigate = useNavigate();
  const fetchUserReservedBikes = useCallback(async () => {
    dispatch({ type: "showLoading", payload: true });
    const bikes = await getUserReservedBikes(userid);
    dispatch({ type: "showLoading", payload: false });
    if (bikes) setuserBikes([...bikes]);
  }, [userid, dispatch]);

  useEffect(() => {
    if (userid && userid !== "") fetchUserReservedBikes();
  }, [userid, fetchUserReservedBikes]);

  const ReadBike = (id) => {
    navigate(`/dashboard/bikes/${id}`);
  };

  return (
    <Modal open={true} onClose={() => navigate("/dashboard/users")}>
      <Box sx={classes.root}>
        <Stack
          direction="column"
          spacing={3}
          height={"100%"}
          width="100%"
          p={4}
        >
          <Typography sx={classes.headTitle}>Bikes</Typography>
          {userBikes.length <= 0 ? (
            <EmptyData />
          ) : (
            <BikesList
              bikes={userBikes}
              withTime={true}
              editBike={ReadBike}
              gridSizing={{ xs: 12, md: 6, sm: 12, lg: 4 }}
            />
          )}
        </Stack>
      </Box>
    </Modal>
  );
}

const EmptyData = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Typography sx={classes.headTitle}>User has no reserved Bikes</Typography>
      <img src={noBikes} style={{ objectFit: "contain" }} alt="img" />
    </Box>
  );
};

const classes = {
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80vw",
    height: "80vh",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "12px",
    overflow: "auto",
    display: "flex",
  },
  headTitle: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 700,
    color: "secondary.main",
  },
  nobikesText: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 700,
    color: "secondary.main",
    alignSelf: "center",
    justifySelf: "center",
    flexGrow: 1,
  },
};
