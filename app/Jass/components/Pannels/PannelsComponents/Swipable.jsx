const Swipable = ({SwipableClicked, direction}) => {
    return (
        <div onClick={() => SwipableClicked(direction)} className={`Swipable -${direction}`}>
            <i className={`bi bi-chevron-${direction}`}></i>
        </div>
    );
};

export default Swipable;