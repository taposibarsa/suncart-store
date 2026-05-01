import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { ProductProvider } from "@/context/ProductContext";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"]
});

export const montserrat = Montserrat({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata = {
  title: "SunCart",
  icons: {
    icon: "/favicon.png",
  },
  description: "Summer Essentials Store",

};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className={` ${poppins.className} min-h-full flex flex-col`}>
        <ProductProvider>
          {children}
        </ProductProvider>
      </body>
    </html>
  );
}
