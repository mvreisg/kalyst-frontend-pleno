import { Link } from 'react-router-dom';

export default function AddButton(props: { text: string }){
    const text: string = props.text; 
    return (        
        <Link to="/add">
            <button className="relative bg-sky-500 p-2 rounded-lg text-white pl-8">
                <span className="absolute left-1 bottom-1 text-4xl">+</span>
                {text}
            </button>
        </Link>        
    );
}