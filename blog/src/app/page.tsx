import { Header } from "@/components/Header";

export default async function Home() {
  const SECRET_KEY = "secret";
  console.log("HOME");
  return (
    <>
      <Header />
    </>
  );
}
