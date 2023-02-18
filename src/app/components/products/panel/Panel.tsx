import AddCard from "./AddCard";
import Header from "./Header";
import Tabs from "./Tabs";
import VerticalNav from "./VerticalNav";

export default function Panel(){
    return (
        <div className="flex p-6">
            <div className="w-1/4">
                <VerticalNav/>            
            </div>
            <div className="w-3/4">
                <Header/>
                <Tabs/>
                <div className="w-full h-full flex items-center justify-center">
                    <AddCard/>                
                </div>
            </div>            
        </div>        
    );
}