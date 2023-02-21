import AddButton from "./AddButton";

export default function AddCard(){
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="w-1/3 flex flex-col space-y-4">
                <p className="flex-initial font-bold">Adicione seu primeiro produto</p>
                <p className="flex-initial text-sm">Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                <div className="flex-initial">
                    <AddButton text="Adicionar um produto"/>
                </div>                
            </div>
        </div>
    );
}