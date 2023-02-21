import Header from "./Header";
import Tabs from "./Tabs";
import Nav from "./Nav";
import ProductsTable from "./ProductsTable";

export default function Panel(){    
    return (
        <div className="flex p-6 h-screen">
            <div className="w-1/4">
                <Nav/>            
            </div>
            <div className="w-3/4">
                <Header/>
                <Tabs/>      
                <ProductsTable/>          
            </div>            
        </div>        
    );
}