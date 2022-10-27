import bg from "../../../assets/bg/homeBackground.jpg";

export const classes = {
  notLoggedRoot: {
    width: "100%",
    background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8) ), url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center bottom",
    height: "100vh",
    display: "flex",
    alignItems: "center",
  },
  headTitle: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "clamp(1rem, 10vw, 5rem)",
    fontWeight: 300,
    color: "#fff",
    letterSpacing: "2px",
    whiteSpace: "nowrap",
  },
  boldText: { color: "primary.main", fontWeight: 700 },
  button: {
    fontFamily: "'Open Sans', sans-serif",
    py: 1.5,
    px: 8,
    fontWeight: 700,
    borderRadius:"12px"
  },
};
