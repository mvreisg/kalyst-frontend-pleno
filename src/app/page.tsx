import './globals.css';
import Link from 'next/link';
import { AppWrapper } from '@/context/context';

export default function Index(){                
    return (
        <AppWrapper>
            <Link href="/Product/List">List</Link>
        </AppWrapper>
    );
}