export default function Label(props: object){
    const classes: string = props.classes;
    const content: string = props.content;    
    
    return (
        <div className={classes}>{content}</div>
    );
}