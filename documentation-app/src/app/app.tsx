// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from '@cavallanti-ui/button';
import { Grid } from '@cavallanti-ui/grid';


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
    </div>
  );
}

export default App;