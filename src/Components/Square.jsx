export default function Square({onClick, value }){
    return (
        <div className="square" onClick={onClick}>
            <h2>{value}</h2>
        </div>
    )
}