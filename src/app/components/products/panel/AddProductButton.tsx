import Button from "../../Button";

export default function AddProductButton(props: object){
    const classes: string = `bg-sky-500 p-2 rounded-lg text-white relative flex justify-between pl-8 ${props.classes}`;
    return (
        <Button 
            classes={classes}
            icon="&#43;"
            iconClass="absolute left-1 bottom-1 text-4xl" 
            content={props.content} 
            onClick={() => {}}
        />
    );
}