import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/joy/Button";
import PropTypes from "prop-types";

export const ButtonStyled = ({
  loading = false,
  type = "button",
  children,
  onClick,
  ...otherProps
}) => {
  const handleClick = (event) => {
    if (!loading && onClick) {
      onClick(event);
    }
  };

  return (
    <Button
      type={type}
      loading={loading}
      loadingPosition="end"
      endDecorator={loading ? <SendIcon /> : null}
      variant="solid"
      sx={{
        bgcolor: "#0d4579",
        color: "#ffd13b",

        width: "150px",
        fontSize: "15px",
        transition: "all 250ms linear",
        ":hover": {
          bgcolor: "#ffd13b",
          color: "#0d4579",
        },
      }}
      onClick={handleClick}
      {...otherProps}
    >
      {children}
    </Button>
  );
};

ButtonStyled.propTypes = {
  loading: PropTypes.bool,
  type: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};
