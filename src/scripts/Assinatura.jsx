import React, { useRef, useEffect } from 'react';

const Assinatura = ({ defaultValue }) => {
  const canvasRef = useRef(null);
  const desenhandoRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = 150;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // O canva entende que é uma imagem
    if (defaultValue) {
      const img = new Image();
      img.onload = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
      img.src = defaultValue;
    }

    const startDrawing = (e) => {
      desenhandoRef.current = true;
      context.beginPath();
      context.moveTo(e.offsetX, e.offsetY);
    };

    const draw = (e) => {
      if (desenhandoRef.current) {
        context.lineTo(e.offsetX, e.offsetY);
        context.stroke();
      }
    };

    const stopDrawing = () => {
      desenhandoRef.current = false;
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseleave', stopDrawing);

    const getTouchPos = (canvas, e) => {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      return {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
      };
    };

    const startTouch = (e) => {
      e.preventDefault();
      desenhandoRef.current = true;
      const pos = getTouchPos(canvas, e);
      context.beginPath();
      context.moveTo(pos.x, pos.y);
    };

    const moveTouch = (e) => {
      if (desenhandoRef.current) {
        const pos = getTouchPos(canvas, e);
        context.lineTo(pos.x, pos.y);
        context.stroke();
      }
    };

    const endTouch = () => {
      desenhandoRef.current = false;
    };

    canvas.addEventListener('touchstart', startTouch);
    canvas.addEventListener('touchmove', moveTouch);
    canvas.addEventListener('touchend', endTouch);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseleave', stopDrawing);
      canvas.removeEventListener('touchstart', startTouch);
      canvas.removeEventListener('touchmove', moveTouch);
      canvas.removeEventListener('touchend', endTouch);
    };
  }, [defaultValue]); // Precisa escutar alterações de defaultValue que está no meu id da Assinatura

  const limparCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div>
      <div id="conteudo-pdf">
        <canvas
          ref={canvasRef}
          id="Assinatura"
          style={{ border: '1px solid black', width: '100%' }}
        ></canvas>
      </div>
      <button type="button" onClick={limparCanvas} id="Limpar">Limpar</button>
    </div>
  );
};

export default Assinatura;
