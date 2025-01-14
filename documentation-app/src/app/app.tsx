// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from '@cavallanti-ui/button';
import { Grid } from '@cavallanti-ui/grid';
import { Header } from '@cavallanti-ui/header';


export function App() {
  return (
    <div>
      <Button label='BOTTONE' color='white' bgColor='green' onClick={() => alert("HELP")}/>
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
    </div>
  );
}

export default App;