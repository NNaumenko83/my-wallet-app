import Input from "@mui/joy/Input";

export default function FocusOutlineInput({
  onChange,
  placeholder,
  name,
  value,
}) {
  return (
    <Input
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
      size="sm"
      sx={{
        width: "100%",
        "&::before": {
          border: "1.5px solid var(--Input-focusedHighlight)",
          transform: "scaleX(0)",
          left: "2.5px",
          right: "2.5px",
          bottom: 0,
          top: "unset",
          transition: "transform .15s cubic-bezier(0.1,0.9,0.2,1)",
          borderRadius: 0,
          borderBottomLeftRadius: "64px 20px",
          borderBottomRightRadius: "64px 20px",
        },
        "&:focus-within::before": {
          transform: "scaleX(1)",
        },
      }}
    />
  );
}
