import Button from "../../Button";

export default function Tabs(){
    return (
        <div className="flex space-x-8 border-b-[1px] border-blue-200">            
            <Button 
                classes="pb-1 hover:border-b-2 hover:pb-1 hover:border-blue-800 hover:text-blue-800 hover:font-bold" 
                content="Todos" 
                onClick={() => {}}
            />
            <Button 
                classes="pb-1 hover:border-b-2 hover:pb-1 hover:border-blue-800 hover:text-blue-800 hover:font-bold" 
                content="Disponível" 
                onClick={() => {}}
            />                                  
        </div>        
    );
}