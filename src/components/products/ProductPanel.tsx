import Header from "./list/Header";
import Tabs from "./list/Tabs";
import Nav from "./list/Nav";
import ProductsTable from "./list/ProductsTable";

export default function ProductPanel(){    
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