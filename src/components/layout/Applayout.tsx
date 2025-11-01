import { Footer } from "../UI/Footer";
import Headers from "../UI/header";
import { Middle } from "./Middle";
export const AppLayout = () => {
  return (
    <main className="app-layout">
      <Headers />
      <Middle />
      <Footer />
    </main>
  );
};
