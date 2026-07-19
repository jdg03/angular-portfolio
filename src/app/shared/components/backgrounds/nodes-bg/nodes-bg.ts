import { Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild, inject, input, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

@Component({
  selector: 'app-nodes-bg',
  standalone: true,
  templateUrl: './nodes-bg.html',
  host: {
    '[style.background]': 'bgColor()'
  },
  styles: [`
    :host {
      display: block;
      position: fixed;
      inset: 0;
      width: 100vw;
      height: 100vh;
      z-index: -10;
      pointer-events: none;
      overflow: hidden;
      transition: background 0.5s ease;
    }
    canvas {
      display: block;
      width: 100%;
      height: 100%;
    }
  `]
})
export class NodesBackgroundComponent implements OnInit, OnDestroy {
  private readonly ngZone = inject(NgZone);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  // Input signal to dynamically control background color from switcher
  bgColor = input<string>('#0b1326');

  @ViewChild('nodesCanvas', { static: true }) 
  private canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationFrameId?: number;
  
  // Mouse coordinates and radius of interaction
  private mouseX = -1000;
  private mouseY = -1000;
  private readonly interactionRadius = 150;

  // Configuration
  private readonly particleCount = 65;
  private readonly connectionDistance = 110;

  private mouseMoveListener = (e: MouseEvent) => {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  };

  private mouseLeaveListener = () => {
    this.mouseX = -1000;
    this.mouseY = -1000;
  };

  private resizeListener = () => {
    this.resizeCanvas();
  };

  ngOnInit() {
    if (!this.isBrowser) {
      return;
    }
    this.initCanvas();
    this.initParticles();

    // Run listeners and animation outside Angular Zone for 60fps performance
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('resize', this.resizeListener);
      window.addEventListener('mousemove', this.mouseMoveListener);
      document.addEventListener('mouseleave', this.mouseLeaveListener);
      
      this.animate();
    });
  }

  ngOnDestroy() {
    if (!this.isBrowser) {
      return;
    }
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener('resize', this.resizeListener);
    window.removeEventListener('mousemove', this.mouseMoveListener);
    document.removeEventListener('mouseleave', this.mouseLeaveListener);
  }

  private initCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resizeCanvas();
  }

  private resizeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  private initParticles() {
    this.particles = [];
    const width = window.innerWidth;
    const height = window.innerHeight;

    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.85, // Slightly faster speed
        vy: (Math.random() - 0.5) * 0.85,
        radius: Math.random() * 1.8 + 0.8, // Varying star sizes (0.8px to 2.6px)
        baseAlpha: Math.random() * 0.6 + 0.3, // Varying base brightness (0.3 to 0.9)
        twinkleSpeed: Math.random() * 3 + 1.5, // Twinkling pulsation speed (Hz)
        twinklePhase: Math.random() * Math.PI * 2 // Random initial phase offsets
      });
    }
  }

  private animate() {
    this.ctx.clearRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);
    this.updateAndDrawParticles();
    this.drawConnections();

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  private updateAndDrawParticles() {
    const width = this.canvasRef.nativeElement.width;
    const height = this.canvasRef.nativeElement.height;
    const time = Date.now() * 0.001; // Current timestamp in seconds

    for (const p of this.particles) {
      // 1. Move particles
      p.x += p.vx;
      p.y += p.vy;

      // Bounce off walls
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      // 2. Cursor repulsion interaction
      if (this.mouseX > 0) {
        const dx = p.x - this.mouseX;
        const dy = p.y - this.mouseY;
        const dist = Math.hypot(dx, dy);
        
        if (dist < this.interactionRadius) {
          // Calculate force push
          const force = (this.interactionRadius - dist) / this.interactionRadius;
          const angle = Math.atan2(dy, dx);
          p.x += Math.cos(angle) * force * 1.2;
          p.y += Math.sin(angle) * force * 1.2;
        }
      }

      // 3. Draw particle with twinkling star alpha
      // Pulsate between 25% and 100% of the base alpha for realistic twinkling
      const twinkleAlpha = p.baseAlpha * (0.625 + 0.375 * Math.sin(time * p.twinkleSpeed + p.twinklePhase));

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(210, 187, 255, ${twinkleAlpha})`; // Soft violet-glow star color
      this.ctx.fill();
    }
  }

  private drawConnections() {
    const len = this.particles.length;

    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        const p1 = this.particles[i];
        const p2 = this.particles[j];
        
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.hypot(dx, dy);

        if (dist < this.connectionDistance) {
          // Alpha scales with distance (closer = more opaque)
          const alpha = (1 - dist / this.connectionDistance) * 0.15;
          this.ctx.beginPath();
          this.ctx.moveTo(p1.x, p1.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = `rgba(210, 187, 255, ${alpha})`;
          this.ctx.lineWidth = 0.75;
          this.ctx.stroke();
        }
      }
    }
  }
}
