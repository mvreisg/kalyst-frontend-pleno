import AddButton from "./AddButton";

export default function AddCard() {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="w-3/5 flex flex-col space-y-4">
                <p className="flex-initial font-bold text-[16px]">Adicione seu primeiro produto</p>
                <p className="flex-initial font-normal text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="flex-initial">
                    <AddButton />
                </div>
            </div>
        </div>
    );
}