import { Header } from "@/components/Header";
import { SpinLoader } from "@/components/SpinLoader";

export default async function Home() {
  const SECRET_KEY = "secret";
  console.log("HOME");
  return (
    <>
      <Header />
      <SpinLoader />
    </>
  );
}
