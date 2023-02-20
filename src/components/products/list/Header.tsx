import AddButton from "./AddButton";

export default function Header(){
    return (
        <div className="flex justify-between mb-4">
            <p className="text-2xl font-bold">Produtos</p>
            <AddButton info={{route: '/add/'}} text="Adicionar produto"/>               
        </div>        
    );
}