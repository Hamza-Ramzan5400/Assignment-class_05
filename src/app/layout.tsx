import Nav from "./header/page";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav/>
        {children}
      </body>
    </html>
  );
}
