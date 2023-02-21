import Link from 'next/link';

export default function AddButton() {
    return (
        <Link href="/Product/Add">
            <button className="relative bg-[#6159FB] p-2 rounded-[5px] text-white w-[200px] h-[37px]">
                <div className="absolute text-[28px] left-2 bottom-0">&#43;</div>
                <div className="absolute text-[14px] left-12 bottom-2 font-normal">Adicionar um produto</div>
            </button>
        </Link>
    );
}