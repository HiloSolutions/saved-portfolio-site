import React, { useRef, useEffect, useState } from 'react';

function Header() {
  const [shouldRender, setShouldRender] = useState(false);
  const canvasRef = useRef(null);


  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 800px)');
    setShouldRender(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setShouldRender(e.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);



  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let animationFrameId;

    //****** Color Circle */
    const colors = [
      { r: 128, g: 255, b: 219 }, //Sea green
      { r: 40, g: 191, b: 201 }, //light blue
      { r: 68, g: 184, b: 184 }, //darker blue
      { r: 255, g: 213, b: 0 }, //light purple
      { r: 29, g: 222, b: 206 } //purple
    ];

    const getColor = () => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      return "rgb(" + color.r + "," + color.g + "," + color.b + ")";
    };


    // Define Ball class
    class Ball {
      constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = getColor();
        //this.direction = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.1 + 0.3;
        this.dx = 2;
        this.dy = -2;
      }

      updatePosition(width, height) {
        this.x += this.dx;
        this.y += this.dy;

        // Bounce off walls
        if (this.x + this.radius > width || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }
        if (this.y + this.radius > height || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }
      }
    }

    // Build Array of Circles
    const buildCirclesArray = new Array();
    for (let i = 0; i < 200; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = 100;
      const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
      buildCirclesArray.push(new Ball(x, y, radius, color));
    }

    // Blur effect in circles
    const createGradient = (ball) => {
      const gradient = context.createRadialGradient(
        ball.x,
        ball.y,
        ball.radius * 0.01,
        ball.x,
        ball.y,
        ball.radius
      );
      gradient.addColorStop(0, ball.color.replace('rgb', 'rgba').replace(')', ', 0.5)'));

      gradient.addColorStop(1, ball.color.replace('rgb', 'rgba').replace(')', ', 1)'));
      return gradient;
    };

    // Move Circles infinitely
    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < buildCirclesArray.length; i++) {
        let ball = buildCirclesArray[i];

        context.beginPath();
        context.fillStyle = createGradient(ball);
        context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        context.fill();

        ball.updatePosition(canvas.width, canvas.height);
      }

      // Request next animation frame
      animationFrameId = requestAnimationFrame(animate);
    };

    // Set canvas width and height to fill the parent div
    const resizeCanvas = () => {
      canvas.width = canvas.parentNode.clientWidth;
      canvas.height = canvas.parentNode.clientHeight;
    };

    // Call resizeCanvas on mount and on window resize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Start the animation loop
    animate();

    // Clean up the animation loop and event listener on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return shouldRender ? (
    <canvas ref={canvasRef}
      style={{
        width: '100vw',
        filter: 'blur(90px)',
      }} />
  ): <canvas ref={canvasRef}
  style={{
    width: '100vw',
    maxWidth: '100vw',
    filter: 'blur(90px)',
  }} />;
}

export default Header;