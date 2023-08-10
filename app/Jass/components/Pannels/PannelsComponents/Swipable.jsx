const Swipable = ({direction}) => {
    return (
        <div className={`Swipable ${direction}`}>
            <i className={`bi bi-chevron-${direction}`}></i>
        </div>
    );
};

export default Swipable;