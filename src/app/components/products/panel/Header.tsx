import Label from "../../Label";
import AddProductButton from "./AddProductButton";

export default function Header(){
    return (
        <div className="flex justify-between mb-4">
            <Label 
                classes="text-2xl font-bold" 
                content="Produtos"
            />
            <AddProductButton classes="text-sm" content="Adicionar produto"/>      
        </div>        
    );
}