export default function Tabs(){
    return (
        <div className="flex space-x-8 border-b-[1px] border-blue-200">
            <button className="pb-1 hover:border-b-2 hover:pb-1 hover:border-blue-800 hover:text-blue-800 hover:font-bold">
                Todos   
            </button>      
            <button className="pb-1 hover:border-b-2 hover:pb-1 hover:border-blue-800 hover:text-blue-800 hover:font-bold">
                Disponível
            </button>                                     
        </div>     
    );
}