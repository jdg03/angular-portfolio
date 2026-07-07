import { Component, OnInit, signal } from '@angular/core';
import { NodesBackgroundComponent } from '../nodes-bg/nodes-bg';

export interface BgColorOption {
  id: string;
  name: string;
  value: string;
  indicatorClass: string;
}

@Component({
  selector: 'app-background-switcher',
  standalone: true,
  imports: [NodesBackgroundComponent],
  templateUrl: './background-switcher.html',
  styles: [`
    button {
      outline: none;
    }
  `]
})
export class BackgroundSwitcherComponent implements OnInit {
  protected readonly isCollapsed = signal<boolean>(true);

  // Premium color options that blend beautifully with the glassmorphism elements
  protected readonly colorOptions: BgColorOption[] = [
    { id: 'black', name: 'Negro Puro', value: '#000000', indicatorClass: 'bg-black border-white/20' },
    { id: 'navy', name: 'Azul Profundo', value: '#050c1e', indicatorClass: 'bg-[#050c1e] border-blue-400/30' },
    { id: 'burgundy', name: 'Borgoña Oscuro', value: '#120509', indicatorClass: 'bg-[#120509] border-rose-400/30' }
  ];

  // Active color defaults to Negro Puro
  protected readonly activeColor = signal<BgColorOption>(this.colorOptions[0]);

  protected readonly activeBtnClass = 'px-3 py-2 rounded-lg bg-primary text-background text-[10px] font-bold shadow-[0_0_10px_#d2bbff30] text-left w-full transition-all cursor-pointer flex items-center gap-2.5';
  protected readonly inactiveBtnClass = 'px-3 py-2 rounded-lg bg-surface-container-high/40 backdrop-blur-md border border-white/5 text-on-surface-variant text-[10px] text-left w-full hover:text-white hover:border-primary/20 transition-all cursor-pointer flex items-center gap-2.5';

  ngOnInit() {
    const savedColorId = localStorage.getItem('portfolio-bg-color');
    if (savedColorId) {
      const match = this.colorOptions.find(opt => opt.id === savedColorId);
      if (match) {
        this.activeColor.set(match);
      }
    }
  }

  selectColor(option: BgColorOption) {
    this.activeColor.set(option);
    localStorage.setItem('portfolio-bg-color', option.id);
  }

  toggleCollapse() {
    this.isCollapsed.update(prev => !prev);
  }
}
