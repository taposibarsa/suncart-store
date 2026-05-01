import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";


const MainLayout = ({children}) => {
    return (
        <>
          <NavBar></NavBar>  
          {children}
          <Footer></Footer>
        </>
    );
};

export default MainLayout;