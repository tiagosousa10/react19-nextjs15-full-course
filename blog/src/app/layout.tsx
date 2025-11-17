import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The blog - Next.js",
  description: "Descrição da pagina",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className="">
        <div className="">{children}</div>
      </body>
    </html>
  );
}
