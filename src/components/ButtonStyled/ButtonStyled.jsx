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
        backgroundColor: "red",
        width: "100px",
        color: "#373737",
        transition: "background-color 250ms linear",
        ":hover": {
          bgcolor: "#7b2ec6",
          color: "#fff",
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
