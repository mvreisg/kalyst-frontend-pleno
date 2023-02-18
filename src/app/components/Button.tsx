import plusIcon from './../../../public/plusIcon.png';

export default function Button(props: object){
    const classes: string = props.classes;
    const content: string = props.content;
    const action: any = props.action;
    const icon: string = props.icon;
    const iconClass: string = props.iconClass;

    return (
        <button className={classes} onClick={action}>
            <div className={iconClass}>{icon}</div>
            {content}
        </button>
    );
}