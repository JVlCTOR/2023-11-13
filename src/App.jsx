import ListRender from "./components/List";

export default function App() {
  const convidados = ["joao", "victor", "resende"]
  return (
    <>
    <ListRender nome= "Convidados" items={convidados}/>
    </>
  );
}
