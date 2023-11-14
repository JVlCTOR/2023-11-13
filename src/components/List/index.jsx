import ListItems from "./components/listItems";

export default function ListRender({ nome, items }) {
  return (
    <div>
      <h2>lista de {nome}:</h2>
      <ul>
        {items.map((value) => (<ListItems items={value}/>))}
      </ul>
    </div>
  );
}
