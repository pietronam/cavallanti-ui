type FooterPropsType = {
  socials: {
    name: string,
    link: string,
  }[]
}

export function Footer({socials}: FooterPropsType) {
  const footerStyle = {
    display: "flex",
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    padding: 50
  }
  
  const socialsStyle = {
    display: "flex",
    gap: 20
  }

  return (
    <div style={footerStyle}>
      <div style={socialsStyle}>
        {socials.map((item) => {
          return <a href={item.link} target="_blank">{item.name}</a>
        })}
      </div>
    </div>
  );
}

export default Footer;