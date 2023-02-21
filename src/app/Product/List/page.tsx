import './../../globals.css';
import Panel from "@/components/product/list/Panel";
import { AppWrapper } from '@/context/context';

export default function ProductList() {
    return (
        <AppWrapper>
            <Panel />
        </AppWrapper>
    );
}