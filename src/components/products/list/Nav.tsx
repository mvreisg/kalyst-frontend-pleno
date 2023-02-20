export default function Nav(){
    return (
        <div>
            <p className="font-bold mb-4 text-xl">Produtos</p>            
            <div className="border-l-[1px] border-blue-100">
                <button className="block hover:text-blue-400 hover:my-2 hover:border-l-2 hover:border-blue-400 pl-2">
                    Todos produtos
                </button>
                <button className="block hover:text-blue-400 hover:my-2 hover:border-l-2 hover:border-blue-400 pl-2">
                    Cupons
                </button>
                <button className="block hover:text-blue-400 hover:my-2 hover:border-l-2 hover:border-blue-400 pl-2">
                    Taxas
                </button>                
            </div>
        </div>        
    );
}