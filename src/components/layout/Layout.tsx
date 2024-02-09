import { Header } from "./header/Header";
import { Main } from "./main/Main";
export const Layout = () => {
  return (
    <div className="wrapper">
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
    </div>
  );
};
