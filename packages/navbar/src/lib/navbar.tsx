import { Header } from "@cavallanti-ui/header";
import { linkSync } from "fs";
import { ReactNode } from "react";

type NavbarPropsType = {
  headerText: string,
  links: 
    {
      name: string,
      link: string,
    }[],

}

export function Navbar({ headerText, links }: NavbarPropsType) {
  const navbarStyle = {
    display: "flex",
    //width: "100vw",
    padding: 20
  }

  const headerStyle = {
    display: "flex"
  }

  const linkStyle = {
    display: "flex",
    gap: 20,
    flexGrow: 1,
    justifyContent: "end",
    alignItems: "center",
  }

  return (
    <div style={navbarStyle}>
      <div style={headerStyle}>
        <Header size="xl">{headerText}</Header>
      </div>
      <div style={linkStyle}>
        {links.map((item) => {
          return (<a href={item.link}>{item.name}</a>)
        })}
      </div>
    </div>
  );
}

export default Navbar;
