type ButtonPropsType = {
  label: string,
  color: string
  bgColor: string,
  onClick: () => void,
}

export function Button({ label, color, bgColor, onClick }: ButtonPropsType) {
  const buttonStyle = {
    padding: "10px",
    borderRadius: "10px",
    color: color,
    backgroundColor: bgColor,
  }

  return (
    <button style={buttonStyle} onClick={onClick}>{label}</button>
  );
}

export default Button;
