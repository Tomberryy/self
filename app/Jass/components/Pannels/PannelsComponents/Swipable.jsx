const Swipable = (direction) => {
    return (
        <div className="Swipable">
            <i className={`bi bi-chevron-${direction}`}></i>
        </div>
    )
}