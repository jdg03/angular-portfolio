import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { TranslationService } from './core/services/translation.service';

describe('Portfolio shell', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();
    TestBed.inject(TranslationService).setLanguage('es');
  });
  afterEach(() => localStorage.removeItem('portfolio-lang'));

  it('provides a skip link and seven section destinations', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.skip-link')?.getAttribute('href')).toBe('#contenido');
    expect(root.querySelectorAll('#profile-navigation a').length).toBe(7);
    expect(root.querySelector('main')?.id).toBe('contenido');
  });

  it('exposes mobile menu state and closes with Escape', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const root: HTMLElement = fixture.nativeElement;
    const button = root.querySelector<HTMLButtonElement>('.mobile-bar button')!;
    button.click();
    await fixture.whenStable();
    expect(button.getAttribute('aria-expanded')).toBe('true');
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    await fixture.whenStable();
    expect(button.getAttribute('aria-expanded')).toBe('false');
  });

  it('changes language, updates document language and persists the selection', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const root: HTMLElement = fixture.nativeElement;
    root.querySelector<HTMLButtonElement>('.language-button')!.click();
    await fixture.whenStable();
    expect(root.querySelector('#profile-navigation a')?.textContent).toContain('Home');
    expect(document.documentElement.lang).toBe('en');
    expect(localStorage.getItem('portfolio-lang')).toBe('en');
  });
});
