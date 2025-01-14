import { ReactNode } from "react";

type HeaderPropsType = {
  size: "sm" | "md" | "lg" | "xl",
  fontFamily?: string,
  children?: ReactNode
}

export function Header({size, fontFamily, children}: HeaderPropsType) {
  const headerStyle = {
    fontFamily: fontFamily || "inherit"
  }
  
  const getHeaderTag = () => {
    switch (size) {
      case "sm":
        return "h4";
      case "md":
        return "h3";
      case "lg":
        return "h2";
      case "xl":
        return "h1";
      default:
        return "h1";
    }
  };
  const HeaderTag = getHeaderTag();
  
  return (
    <HeaderTag style={headerStyle}>{children}</HeaderTag>
  )
}

export default Header;
