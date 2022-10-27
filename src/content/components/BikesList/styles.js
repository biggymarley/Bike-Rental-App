
export const classes = {
    paper: {
      px: 2,
      py: 4,
      m:2,
      borderRadius: "12px",
      boxShadow:
        "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    },
    hover: {
      transition: "all .2s ease",
      cursor: "pointer",
      "&:hover": {
        transform: "scale(1.08)",
      },
    },
    modalName: {
      fontFamily: "'Ubuntu', sans-serif",
      fontSize: "1rem",
      fontWeight: 500,
    },
    chip: {
      fontFamily: "'Ubuntu', sans-serif",
      fontWeight: 600,
    },
    image: {
      width: "100%",
      height: "200px",
      objectFit: "contain",
    },
  };
  