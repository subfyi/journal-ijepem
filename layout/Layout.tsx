import Header from "./Header/Header";
import Footer from "@/layout/Footer/Footer";
import ReactAdminApp from "@/components/ReactAdmin";

export default function Layout({children,}: { children: React.ReactNode }) {
    return <ReactAdminApp>
        <Header/>
        {children}
        <Footer/>
    </ReactAdminApp>;
}
