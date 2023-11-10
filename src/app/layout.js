import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import SideBar from "@/components/sidebar/SideBar";

export const metadata = {
    title: "eltabarak",
    description: "شراء وحدات تجاريه- بيع وحدات تجاريه - ايجار وحدات تجاريه - مول - شراء مول - ايجار مول - واحدات تجاريه في اكتوبر",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <SideBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
