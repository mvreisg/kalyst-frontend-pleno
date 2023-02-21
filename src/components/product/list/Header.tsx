import AddButton from "./AddButton";

export default function Header() {
    return (
        <div className="flex justify-between mb-4">
            <p className="text-[32px] font-bold">Produtos</p>
            <AddButton text="Adicionar produto" />
        </div>
    );
}