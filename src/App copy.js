import './App.css';
import React, {useRef, useEffect, useState} from 'react';

function App() {
    // useRef
    const canvasRef = useRef(null);
    // getCtx
    const [getCtx, setGetCtx] = useState(null);
    // painting state
    const [painting, setPainting] = useState(false);

    useEffect(() => {
        // canvas useRef
        const canvas = canvasRef.current;
        canvas.width = 650;
        canvas.height = 540;
        const ctx = canvas.getContext('2d');
        ctx.lineJoin = 'round';
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#000000';
        setGetCtx(ctx);
    }, []);

    const drawFn = e => {
        // mouse position
        const mouseX = e.nativeEvent.offsetX;
        const mouseY = e.nativeEvent.offsetY;
        // drawing
        if (!painting) {
            getCtx.beginPath();
            getCtx.moveTo(mouseX, mouseY);
        } else {
            getCtx.lineTo(mouseX, mouseY);
            getCtx.stroke();
        }
    };

    return (
        <div className="view">
            <div className="canvasWrap">
                <canvas
                    className="canvas"
                    ref={canvasRef}
                    onMouseDown={() => setPainting(true)}
                    onMouseUp={() => setPainting(false)}
                    onMouseMove={e => drawFn(e)}
                    onMouseLeave={() => setPainting(false)}
                ></canvas>
            </div>
        </div>
    );
}

export default App;
