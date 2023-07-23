import React, { useRef, useEffect, useState } from 'react';

function Header({ colors }) {
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

    const getColor = () => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      return "rgb(" + color.r + "," + color.g + "," + color.b + ")";
    };

    // Define Ball class
    class Ball {
      constructor(x, y, radius) {
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

    // Build Array of Circles using array literal notation
    const buildCirclesArray = Array.from({ length: 400 }, () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = 200;
      const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
      return new Ball(x, y, radius, color);
    });


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
  });


  return shouldRender ? (
    <canvas ref={canvasRef}
      style={{
        width: '100%',
        maxWidth: '100%',
        filter: 'blur(90px)',
      }} />
  ): <canvas ref={canvasRef}
  style={{
    width: '100%',
    maxWidth: '100%',
    filter: 'blur(90px)'
  }} />;
}

export default Header;