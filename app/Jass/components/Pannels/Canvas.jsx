import { useRef, useEffect } from "react";

const Canvas = ({score}) => {
    const canvasRef = useRef(null);
    console.log(score);
    useEffect(() => {
        const hundreds = Math.floor(score / 100);
        const fifties  = Math.floor((score % 100) / 50);
        const twenties = Math.floor((score % 100) % 50 / 20);
        const rest     = score % 100 % 50 % 20;
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        context.beginPath();
        context.clearRect(0, 0, 400, 700)
        
        //draw z
        context.strokeStyle = "white";
        context.moveTo(0, 50);
        context.lineTo(300, 50);
        context.lineTo(0, 350);
        context.lineTo(300, 350);
        context.stroke();

        let baseX = 100;
        //Draw hundreds
        for (let i = 1; i <= hundreds; i++) {
            if (i % 5 === 0) {
                context.moveTo(baseX - 50, 75);
                context.lineTo(baseX, 25);
            } else {
                context.moveTo(baseX, 25);
                context.lineTo(baseX, 75);
            }
            context.stroke();
            baseX += 10;
        }
        baseX = 175;
        let baseY = 175;
        if (fifties > 0) {
            context.moveTo(baseX - 50, baseY);
            context.lineTo(baseX, baseY + 50);
            context.stroke();
        }
        baseY = 350;
        baseX = 140;
        for (let i = 1; i <= twenties; i++) {
            context.moveTo(baseX, baseY - 25);
            context.lineTo(baseX, baseY + 25);
            context.stroke();
            baseX += 10;
        }
        if (rest > 0) {
            context.font = "30px Arial";
            context.strokeText(rest.toString(), 300, 100)
            context.stroke();
        }
    }, [score]);

    return (
        <canvas ref={canvasRef} width="400" height="700"/>
    );
};

export default Canvas;
