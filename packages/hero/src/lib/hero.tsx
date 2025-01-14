import { Header } from "@cavallanti-ui/header";

type HeroPropsType = {
  heroText: string,
  subtitleText: string,
}

export function Hero({ heroText, subtitleText }: HeroPropsType) {
  const heroStyle = {
    display: "flex",
    flexDirection: "column" as any,
    alignItems: "center",
    justifyContent: "center",
    padding: 200
  }

  const titleStyle = {
    display: "flex",
  }

  const subtitleStyle = {
    display: "flex",
  }

  return (
    <div style={heroStyle}>
      <div style={titleStyle}>
        <Header size="xl">{heroText}</Header>
      </div>
      <div style={subtitleStyle}>
        <span>{subtitleText}</span>
      </div>
    </div>
  );
}

export default Hero;
