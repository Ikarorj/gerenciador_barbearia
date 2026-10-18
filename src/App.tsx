function MyButton() {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
      Eu sou um botão
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Bem-vindo ao meu aplicativo</h1>
      <MyButton />
    </div>
  );
}