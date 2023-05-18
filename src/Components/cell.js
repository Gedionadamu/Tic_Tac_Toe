const Cell = ({ id, cell, setCells, go, setGo, cells }) => {
    const handleClick = (e) => {
        const taken = e.target.firstChild.classList.contains("circle") ||
            e.target.firstChild.classList.contains("cross")

        if (!taken) {
            if (go === "circle") {
                e.target.firstChild.classList.add("circle")
                setGo("cross")
            }
            else if (go === "cross") {
                e.traget.firstChild.classList.add("cross")
                setGo("circle")
            }
        }
    }
    const handleCellChange =(className)=>{
        cells.map((cell, index)=>{
            if (index === id){
                return className
            } else{
                return cell
            }
        })
    }
    return (
        <div className="square" id={id} onClick={handleClick}>
            <div className={cell}></div>
        </div>
    )
}
export default Cell;