// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from '@cavallanti-ui/button';
import { Grid } from '@cavallanti-ui/grid';
import { Header } from '@cavallanti-ui/header';
import { Navbar } from '@cavallanti-ui/navbar';
import "./app.css"
import { Hero } from '@cavallanti-ui/hero';

export function App() {
  const MockNavbarLinks = [
    {
      name: "hello",
      link: ""
    },
    {
      name: "hi",
      link: ""
    },
  ]

  return (
    <>
      <Navbar headerText='CAVALLANTI-UI' links={MockNavbarLinks}></Navbar>
      
      <Hero heroText={"HELP"} subtitleText='HELP ME'></Hero>

      <Button label='BOTTONE' color='white' bgColor='green' onClick={() => alert("HELP")} />
      
      <Grid columns={3} gap={10}>
        <span>hi</span>
        <span>hi</span>
        <span>hi</span>
        <span>hi</span>
        <span>hi</span>
      </Grid>

      <Header size="xl">very big header</Header>
      <Header size="lg">big header</Header>
      <Header size="md">very average header</Header>
      <Header size="sm">smol header</Header>
    </>
  );
}

export default App;