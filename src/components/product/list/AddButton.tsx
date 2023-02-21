import Link from 'next/link';

export default function AddButton({ text }) {
    return (
        <Link href="/Product/Add">
            <button className="relative bg-sky-500 p-2 rounded-lg text-white pl-8">
                <span className="absolute left-1 bottom-1 text-4xl">+</span>
                {text}
            </button>
        </Link>
    );
}