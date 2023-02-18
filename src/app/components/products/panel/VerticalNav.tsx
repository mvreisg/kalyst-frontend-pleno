import Button from "../../Button";
import Label from "../../Label";

export default function VerticalNav(){
    return (
        <>
            <Label classes="font-bold mb-4 text-xl" content="Produtos"/>
            <div className="border-l-[1px] border-blue-100">
                <Button 
                    classes="block hover:text-blue-400 hover:my-2 hover:border-l-2 hover:border-blue-400 pl-2" 
                    content="Todos produtos" 
                    onClick={() => {}}
                />
                <Button 
                    classes="block hover:text-blue-400 hover:my-2 hover:border-l-2 hover:border-blue-400 pl-2" 
                    content="Cupons" 
                    onClick={() => {}}
                />
                <Button 
                    classes="block hover:text-blue-400 hover:my-2 hover:border-l-2 hover:border-blue-400 pl-2" 
                    content="Taxas" 
                    onClick={() => {}}
                />
            </div>
        </>        
    );
}