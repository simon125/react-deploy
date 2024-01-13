import { Recipes } from "./components/Recipes";

function App() {
  /**
   * 1) stan dla przepisów
   * 2) pobranie przepisów z następującego endpointu: https://dummyjson.com/recipes
   * 3) wykonsolownie rezultatu
   */

  return (
    <main className="container">
      <article>
        <h1>Welcome to the world of Recipes</h1>
      </article>
      <Recipes />
    </main>
  );
}

export default App;
