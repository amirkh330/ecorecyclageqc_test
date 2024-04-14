import {SharedStateProvider,useSharedSimpleState} from "sharedsimplestate"
function App() {
  const [data, setData] = useSharedSimpleState(0);

  return (
    <SharedStateProvider>
      <div>{data}</div>
      <button onClick={(e) => setData(data + 1)}>increment</button>
    </SharedStateProvider>
  );
}

export default App;

س