import Input from "@mui/joy/Input";

export default function FocusedRingInput() {
  return (
    <Input
      placeholder="Bootstrap"
      sx={{
        "--Input-focusedInset": "var(--any, )",
        "--Input-focusedThickness": "0.1rem",
        "--Input-focusedHighlight": "rgba(13,110,253,.25)",
        "&::before": {
          transition: "box-shadow .15s ease-in-out",
        },
        "&:focus-within": {
          borderColor: "#86b7fe",
        },
        height: "10px",
      }}
    />
  );
}
