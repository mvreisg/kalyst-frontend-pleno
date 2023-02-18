import Label from "../../Label";
import AddProductButton from "./AddProductButton";

export default function AddCard(){
    return (
        <div className="w-1/4 flex flex-col">
            <Label classes="font-bold my-2" content="Adicione seu primeiro produto"/>
            <Label classes="my-2 text-sm" content="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem "/>
            <AddProductButton classes="my-2 text-sm" content="Adicionar um produto"/>
        </div>
    );
}