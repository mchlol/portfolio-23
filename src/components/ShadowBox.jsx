export default function ShadowBox(props) {

    return (
        <div className={`shadow-box ${props.classNames}`}>
            {props.children}
        </div>
    )
}