/**
 * GlassFlow UI - Web Components
 * Custom Elements wrapping the liquid glass design system
 *
 * @version 1.0.0
 * @license MIT
 */

;(function () {
  'use strict'

  // ---------------------------------------------------------------------------
  // Shared Styles & Helpers
  // ---------------------------------------------------------------------------

  /** Base glass mixin styles used across all components */
  const GLASS_BASE = `
    :host {
      --gf-blur: 20px;
      --gf-frost: 0.6;
      --gf-saturation: 1.8;
      --gf-brightness: 1.1;
      --gf-radius: 24px;
      --gf-accent: #007aff;
      --gf-accent-rgb: 0, 122, 255;
      --gf-text: #1d1d1f;
      --gf-text-secondary: #86868b;
      --gf-bg: rgba(255, 255, 255, 0.55);
      --gf-border: rgba(255, 255, 255, 0.7);
      --gf-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
      --gf-shadow-hover: 0 12px 48px rgba(0, 0, 0, 0.12);
      --gf-surface: #ffffff;
      --gf-overlay: rgba(0, 0, 0, 0.3);
      --gf-ripple: rgba(0, 0, 0, 0.08);
      --gf-mouse-light: rgba(255, 255, 255, 0.5);
      --gf-refraction: 0.8;
      --gf-caustics: rgba(255, 255, 255, 0.15);
      display: block;
      box-sizing: border-box;
    }
    :host([hidden]) { display: none; }
    *, *::before, *::after { box-sizing: border-box; }
  `

  /** Generate backdrop-filter CSS */
  function backdropFilterCSS(blur, saturation, brightness) {
    return `
      -webkit-backdrop-filter: blur(${blur}) saturate(${saturation}) brightness(${brightness});
      backdrop-filter: blur(${blur}) saturate(${saturation}) brightness(${brightness});
    `
  }

  /** Create a template element from HTML string */
  function createTemplate(html) {
    const tpl = document.createElement('template')
    tpl.innerHTML = html
    return tpl
  }

  /** Parse a numeric attribute, falling back to default */
  function numAttr(el, name, fallback) {
    const v = el.getAttribute(name)
    return v !== null ? parseFloat(v) : fallback
  }

  /** Parse a string attribute, falling back to default */
  function strAttr(el, name, fallback) {
    return el.getAttribute(name) || fallback
  }

  // ---------------------------------------------------------------------------
  // <glass-card>
  // ---------------------------------------------------------------------------

  class GlassCard extends HTMLElement {
    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
    }

    static get observedAttributes() {
      return ['theme', 'blur', 'frost', 'radius', 'color', 'padding', 'hoverable', 'border']
    }

    connectedCallback() {
      this.render()
    }

    attributeChangedCallback() {
      if (this.shadowRoot) this.render()
    }

    render() {
      const blur = numAttr(this, 'blur', 20)
      const frost = numAttr(this, 'frost', 0.6)
      const radius = numAttr(this, 'radius', 24)
      const padding = strAttr(this, 'padding', '24px')
      const hoverable = this.hasAttribute('hoverable')
      const borderColor = strAttr(this, 'border', 'var(--gf-border)')
      const color = strAttr(this, 'color', '')

      // Apply theme if specified
      const themeVars = this._getThemeVars()

      const shadow = this.shadowRoot
      shadow.innerHTML = `
        <style>
          ${GLASS_BASE}
          .card {
            background: ${color || 'var(--gf-bg)'};
            border: 1px solid ${borderColor};
            border-radius: ${radius}px;
            padding: ${padding};
            ${backdropFilterCSS(blur, 1.8, 1.1)}
            box-shadow: var(--gf-shadow);
            transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
                        box-shadow 0.4s ease;
            position: relative;
            overflow: hidden;
            color: var(--gf-text);
            ${themeVars}
          }
          .card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            pointer-events: none;
          }
          ${hoverable ? `
          .card:hover {
            transform: translateY(-4px) scale(1.01);
            box-shadow: var(--gf-shadow-hover);
          }
          ` : ''}
          .card ::slotted(*) { position: relative; z-index: 2; }
          .card ::slotted(h1), .card ::slotted(h2), .card ::slotted(h3) {
            margin: 0 0 12px; color: var(--gf-text);
          }
          .card ::slotted(p) { margin: 0; color: var(--gf-text-secondary); }
        </style>
        <div class="card" part="card">
          <slot></slot>
        </div>
      `
    }

    _getThemeVars() {
      const theme = strAttr(this, 'theme', '')
      if (!theme) return ''
      const themes = {
        dark: `
          --gf-bg: rgba(30,30,30,0.65); --gf-border: rgba(255,255,255,0.12);
          --gf-text: #f5f5f7; --gf-text-secondary: #98989d;
          --gf-shadow: 0 8px 32px rgba(0,0,0,0.3);
          --gf-shadow-hover: 0 12px 48px rgba(0,0,0,0.4);
          --gf-ripple: rgba(255,255,255,0.1);
          --gf-mouse-light: rgba(255,255,255,0.15);
        `,
        aurora: `
          --gf-bg: rgba(20,20,40,0.6); --gf-border: rgba(120,80,255,0.25);
          --gf-text: #e8e0ff; --gf-text-secondary: #a89cc8;
          --gf-shadow: 0 8px 32px rgba(80,40,200,0.2);
          --gf-shadow-hover: 0 12px 48px rgba(80,40,200,0.35);
          --gf-ripple: rgba(168,85,247,0.15);
          --gf-mouse-light: rgba(168,85,247,0.2);
        `,
        ocean: `
          --gf-bg: rgba(10,40,60,0.6); --gf-border: rgba(0,180,216,0.25);
          --gf-text: #d0f0ff; --gf-text-secondary: #7ab8d0;
          --gf-shadow: 0 8px 32px rgba(0,100,150,0.2);
          --gf-shadow-hover: 0 12px 48px rgba(0,100,150,0.35);
          --gf-ripple: rgba(0,180,216,0.15);
          --gf-mouse-light: rgba(0,180,216,0.2);
        `,
        rose: `
          --gf-bg: rgba(60,20,40,0.6); --gf-border: rgba(255,80,120,0.25);
          --gf-text: #ffe0ea; --gf-text-secondary: #d08aa0;
          --gf-shadow: 0 8px 32px rgba(200,40,80,0.2);
          --gf-shadow-hover: 0 12px 48px rgba(200,40,80,0.35);
          --gf-ripple: rgba(255,80,120,0.15);
          --gf-mouse-light: rgba(255,80,120,0.2);
        `,
        emerald: `
          --gf-bg: rgba(15,50,35,0.6); --gf-border: rgba(16,185,129,0.25);
          --gf-text: #d0ffe8; --gf-text-secondary: #7ac0a0;
          --gf-shadow: 0 8px 32px rgba(0,120,80,0.2);
          --gf-shadow-hover: 0 12px 48px rgba(0,120,80,0.35);
          --gf-ripple: rgba(16,185,129,0.15);
          --gf-mouse-light: rgba(16,185,129,0.2);
        `,
      }
      return themes[theme] || ''
    }
  }

  // ---------------------------------------------------------------------------
  // <glass-button>
  // ---------------------------------------------------------------------------

  class GlassButton extends HTMLElement {
    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
    }

    static get observedAttributes() {
      return ['theme', 'blur', 'radius', 'color', 'size', 'variant', 'disabled', 'full']
    }

    connectedCallback() {
      this.render()
      this._setupRipple()
    }

    attributeChangedCallback() {
      if (this.shadowRoot) this.render()
    }

    render() {
      const blur = numAttr(this, 'blur', 16)
      const radius = numAttr(this, 'radius', 14)
      const size = strAttr(this, 'size', 'medium') // small | medium | large
      const variant = strAttr(this, 'variant', 'default') // default | filled | outline | ghost
      const disabled = this.hasAttribute('disabled')
      const full = this.hasAttribute('full')
      const color = strAttr(this, 'color', '')
      const themeVars = this._getThemeVars()

      const sizeMap = {
        small:   { padding: '8px 16px', font: '13px', height: '32px' },
        medium:  { padding: '10px 24px', font: '15px', height: '40px' },
        large:   { padding: '14px 32px', font: '17px', height: '48px' },
      }
      const s = sizeMap[size] || sizeMap.medium

      const variantStyles = {
        default: `
          background: ${color || 'var(--gf-bg)'};
          border: 1px solid var(--gf-border);
          color: var(--gf-text);
        `,
        filled: `
          background: var(--gf-accent);
          border: 1px solid transparent;
          color: #ffffff;
        `,
        outline: `
          background: transparent;
          border: 1.5px solid var(--gf-accent);
          color: var(--gf-accent);
        `,
        ghost: `
          background: transparent;
          border: 1px solid transparent;
          color: var(--gf-accent);
        `,
      }

      const shadow = this.shadowRoot
      shadow.innerHTML = `
        <style>
          ${GLASS_BASE}
          button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: ${s.padding};
            height: ${s.height};
            font-size: ${s.font};
            font-weight: 600;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif;
            border-radius: ${radius}px;
            cursor: ${disabled ? 'not-allowed' : 'pointer'};
            transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            position: relative;
            overflow: hidden;
            white-space: nowrap;
            user-select: none;
            ${width: full ? '100%' : 'auto'};
            ${backdropFilterCSS(blur, 1.8, 1.1)}
            ${variantStyles[variant] || variantStyles.default}
            ${themeVars}
            ${disabled ? 'opacity: 0.5; pointer-events: none;' : ''}
          }
          button:hover:not(:disabled) {
            transform: translateY(-2px) scale(1.02);
            box-shadow: var(--gf-shadow-hover);
          }
          button:active:not(:disabled) {
            transform: translateY(0) scale(0.98);
          }
          button::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            pointer-events: none;
          }
          .ripple-container {
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            pointer-events: none;
            overflow: hidden;
            border-radius: inherit;
          }
        </style>
        <button part="button" ${disabled ? 'disabled' : ''}>
          <span class="ripple-container"></span>
          <slot></slot>
        </button>
      `
    }

    _setupRipple() {
      const btn = this.shadowRoot.querySelector('button')
      btn.addEventListener('click', (e) => {
        const rect = btn.getBoundingClientRect()
        const size = Math.max(rect.width, rect.height) * 2
        const x = e.clientX - rect.left - size / 2
        const y = e.clientY - rect.top - size / 2

        const ripple = document.createElement('span')
        ripple.style.cssText = `
          position:absolute; border-radius:50%; pointer-events:none;
          width:${size}px; height:${size}px; left:${x}px; top:${y}px;
          background:var(--gf-ripple, rgba(0,0,0,0.08));
          transform:scale(0); opacity:1;
          animation:gf-btn-ripple 600ms ease-out forwards;
        `
        btn.querySelector('.ripple-container').appendChild(ripple)
        ripple.addEventListener('animationend', () => ripple.remove())
      })
    }

    _getThemeVars() {
      const theme = strAttr(this, 'theme', '')
      if (!theme) return ''
      const themes = {
        dark: `--gf-bg:rgba(30,30,30,0.65);--gf-border:rgba(255,255,255,0.12);--gf-text:#f5f5f7;--gf-accent:#0a84ff;--gf-ripple:rgba(255,255,255,0.1);`,
        aurora: `--gf-bg:rgba(20,20,40,0.6);--gf-border:rgba(120,80,255,0.25);--gf-text:#e8e0ff;--gf-accent:#a855f7;--gf-ripple:rgba(168,85,247,0.15);`,
        ocean: `--gf-bg:rgba(10,40,60,0.6);--gf-border:rgba(0,180,216,0.25);--gf-text:#d0f0ff;--gf-accent:#00b4d8;--gf-ripple:rgba(0,180,216,0.15);`,
        rose: `--gf-bg:rgba(60,20,40,0.6);--gf-border:rgba(255,80,120,0.25);--gf-text:#ffe0ea;--gf-accent:#ff5078;--gf-ripple:rgba(255,80,120,0.15);`,
        emerald: `--gf-bg:rgba(15,50,35,0.6);--gf-border:rgba(16,185,129,0.25);--gf-text:#d0ffe8;--gf-accent:#10b981;--gf-ripple:rgba(16,185,129,0.15);`,
      }
      return themes[theme] || ''
    }
  }

  // ---------------------------------------------------------------------------
  // <glass-input>
  // ---------------------------------------------------------------------------

  class GlassInput extends HTMLElement {
    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      this._value = ''
    }

    static get observedAttributes() {
      return ['theme', 'blur', 'radius', 'placeholder', 'label', 'type', 'disabled', 'value']
    }

    connectedCallback() {
      this.render()
      this._bindEvents()
    }

    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'value' && this.shadowRoot) {
        const input = this.shadowRoot.querySelector('input')
        if (input) input.value = newVal || ''
      }
      if (this.shadowRoot && name !== 'value') this.render()
    }

    get value() {
      const input = this.shadowRoot?.querySelector('input')
      return input ? input.value : this._value
    }

    set value(v) {
      this._value = v
      this.setAttribute('value', v)
    }

    render() {
      const blur = numAttr(this, 'blur', 16)
      const radius = numAttr(this, 'radius', 14)
      const placeholder = strAttr(this, 'placeholder', 'Type here...')
      const label = strAttr(this, 'label', '')
      const type = strAttr(this, 'type', 'text')
      const disabled = this.hasAttribute('disabled')
      const value = strAttr(this, 'value', '')
      const themeVars = this._getThemeVars()

      const shadow = this.shadowRoot
      shadow.innerHTML = `
        <style>
          ${GLASS_BASE}
          .wrapper {
            display: flex;
            flex-direction: column;
            gap: 6px;
            width: 100%;
          }
          .label {
            font-size: 13px;
            font-weight: 600;
            color: var(--gf-text-secondary);
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif;
            padding-left: 4px;
          }
          .input-container {
            position: relative;
            border-radius: ${radius}px;
            overflow: hidden;
          }
          input {
            width: 100%;
            padding: 12px 16px;
            font-size: 15px;
            font-family: inherit;
            color: var(--gf-text);
            background: var(--gf-bg);
            border: 1px solid var(--gf-border);
            border-radius: ${radius}px;
            outline: none;
            transition: all 0.3s ease;
            ${backdropFilterCSS(blur, 1.8, 1.1)}
            box-shadow: var(--gf-shadow);
            ${disabled ? 'opacity: 0.5; cursor: not-allowed;' : ''}
            ${themeVars}
          }
          input::placeholder {
            color: var(--gf-text-secondary);
            opacity: 0.6;
          }
          input:focus {
            border-color: var(--gf-accent);
            box-shadow: var(--gf-shadow), 0 0 0 3px rgba(var(--gf-accent-rgb), 0.15);
          }
          input::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            pointer-events: none;
          }
        </style>
        <div class="wrapper" part="wrapper">
          ${label ? `<label class="label" part="label">${label}</label>` : ''}
          <div class="input-container">
            <input
              type="${type}"
              placeholder="${placeholder}"
              value="${value}"
              ${disabled ? 'disabled' : ''}
              part="input"
            />
          </div>
        </div>
      `
    }

    _bindEvents() {
      const input = this.shadowRoot.querySelector('input')
      input.addEventListener('input', () => {
        this._value = input.value
        this.dispatchEvent(new CustomEvent('gf:input', { detail: { value: input.value }, bubbles: true }))
      })
      input.addEventListener('change', () => {
        this.dispatchEvent(new CustomEvent('gf:change', { detail: { value: input.value }, bubbles: true }))
      })
      input.addEventListener('focus', () => {
        this.dispatchEvent(new CustomEvent('gf:focus', { bubbles: true }))
      })
      input.addEventListener('blur', () => {
        this.dispatchEvent(new CustomEvent('gf:blur', { bubbles: true }))
      })
    }

    _getThemeVars() {
      const theme = strAttr(this, 'theme', '')
      if (!theme) return ''
      const themes = {
        dark: `--gf-bg:rgba(30,30,30,0.65);--gf-border:rgba(255,255,255,0.12);--gf-text:#f5f5f7;--gf-text-secondary:#98989d;--gf-accent:#0a84ff;--gf-accent-rgb:10,132,255;--gf-shadow:0 8px 32px rgba(0,0,0,0.3);`,
        aurora: `--gf-bg:rgba(20,20,40,0.6);--gf-border:rgba(120,80,255,0.25);--gf-text:#e8e0ff;--gf-text-secondary:#a89cc8;--gf-accent:#a855f7;--gf-accent-rgb:168,85,247;--gf-shadow:0 8px 32px rgba(80,40,200,0.2);`,
        ocean: `--gf-bg:rgba(10,40,60,0.6);--gf-border:rgba(0,180,216,0.25);--gf-text:#d0f0ff;--gf-text-secondary:#7ab8d0;--gf-accent:#00b4d8;--gf-accent-rgb:0,180,216;--gf-shadow:0 8px 32px rgba(0,100,150,0.2);`,
        rose: `--gf-bg:rgba(60,20,40,0.6);--gf-border:rgba(255,80,120,0.25);--gf-text:#ffe0ea;--gf-text-secondary:#d08aa0;--gf-accent:#ff5078;--gf-accent-rgb:255,80,120;--gf-shadow:0 8px 32px rgba(200,40,80,0.2);`,
        emerald: `--gf-bg:rgba(15,50,35,0.6);--gf-border:rgba(16,185,129,0.25);--gf-text:#d0ffe8;--gf-text-secondary:#7ac0a0;--gf-accent:#10b981;--gf-accent-rgb:16,185,129;--gf-shadow:0 8px 32px rgba(0,120,80,0.2);`,
      }
      return themes[theme] || ''
    }
  }

  // ---------------------------------------------------------------------------
  // <glass-modal>
  // ---------------------------------------------------------------------------

  class GlassModal extends HTMLElement {
    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      this._open = false
    }

    static get observedAttributes() {
      return ['theme', 'blur', 'radius', 'open', 'closable', 'width']
    }

    connectedCallback() {
      this.render()
      this._bindEvents()
    }

    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'open') {
        this._open = newVal !== null
        this._toggleVisibility()
      }
      if (this.shadowRoot && name !== 'open') this.render()
    }

    /** Open the modal */
    open() {
      this.setAttribute('open', '')
      this._open = true
      this._toggleVisibility()
    }

    /** Close the modal */
    close() {
      this.removeAttribute('open')
      this._open = false
      this._toggleVisibility()
      this.dispatchEvent(new CustomEvent('gf:close', { bubbles: true }))
    }

    render() {
      const blur = numAttr(this, 'blur', 24)
      const radius = numAttr(this, 'radius', 20)
      const closable = this.hasAttribute('closable')
      const width = strAttr(this, 'width', '480px')
      const isOpen = this.hasAttribute('open')
      const themeVars = this._getThemeVars()

      const shadow = this.shadowRoot
      shadow.innerHTML = `
        <style>
          ${GLASS_BASE}
          .overlay {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: var(--gf-overlay);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            opacity: ${isOpen ? '1' : '0'};
            visibility: ${isOpen ? 'visible' : 'hidden'};
            transition: opacity 0.3s ease, visibility 0.3s ease;
            ${themeVars}
          }
          .modal {
            background: var(--gf-bg);
            border: 1px solid var(--gf-border);
            border-radius: ${radius}px;
            width: ${width};
            max-width: 90vw;
            max-height: 85vh;
            overflow: auto;
            padding: 0;
            ${backdropFilterCSS(blur, 1.8, 1.1)}
            box-shadow: 0 24px 80px rgba(0, 0, 0, 0.25);
            transform: ${isOpen ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(20px)'};
            transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            position: relative;
          }
          .modal::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            pointer-events: none;
            z-index: 1;
          }
          .close-btn {
            position: absolute;
            top: 16px; right: 16px;
            width: 28px; height: 28px;
            border-radius: 50%;
            border: none;
            background: rgba(128,128,128,0.2);
            color: var(--gf-text-secondary);
            font-size: 16px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s ease;
            z-index: 2;
          }
          .close-btn:hover {
            background: rgba(128,128,128,0.35);
            transform: scale(1.1);
          }
          .content {
            padding: 28px;
          }
          .content ::slotted(*) { position: relative; z-index: 2; }
        </style>
        <div class="overlay" part="overlay">
          <div class="modal" part="modal">
            ${closable ? `<button class="close-btn" part="close-btn">&times;</button>` : ''}
            <div class="content">
              <slot></slot>
            </div>
          </div>
        </div>
      `
    }

    _bindEvents() {
      const overlay = this.shadowRoot.querySelector('.overlay')
      overlay.addEventListener('click', (e) => {
        // Close when clicking the overlay background
        if (e.target === overlay) this.close()
      })

      const closeBtn = this.shadowRoot.querySelector('.close-btn')
      if (closeBtn) {
        closeBtn.addEventListener('click', () => this.close())
      }

      // Close on Escape key
      this._keyHandler = (e) => {
        if (e.key === 'Escape' && this._open) this.close()
      }
      document.addEventListener('keydown', this._keyHandler)
    }

    _toggleVisibility() {
      const overlay = this.shadowRoot?.querySelector('.overlay')
      const modal = this.shadowRoot?.querySelector('.modal')
      if (!overlay || !modal) return

      if (this._open) {
        overlay.style.opacity = '1'
        overlay.style.visibility = 'visible'
        modal.style.transform = 'scale(1) translateY(0)'
      } else {
        overlay.style.opacity = '0'
        overlay.style.visibility = 'hidden'
        modal.style.transform = 'scale(0.9) translateY(20px)'
      }
    }

    disconnectedCallback() {
      if (this._keyHandler) {
        document.removeEventListener('keydown', this._keyHandler)
      }
    }

    _getThemeVars() {
      const theme = strAttr(this, 'theme', '')
      if (!theme) return ''
      const themes = {
        dark: `--gf-bg:rgba(30,30,30,0.65);--gf-border:rgba(255,255,255,0.12);--gf-text:#f5f5f7;--gf-text-secondary:#98989d;--gf-overlay:rgba(0,0,0,0.6);`,
        aurora: `--gf-bg:rgba(20,20,40,0.6);--gf-border:rgba(120,80,255,0.25);--gf-text:#e8e0ff;--gf-text-secondary:#a89cc8;--gf-overlay:rgba(10,10,30,0.7);`,
        ocean: `--gf-bg:rgba(10,40,60,0.6);--gf-border:rgba(0,180,216,0.25);--gf-text:#d0f0ff;--gf-text-secondary:#7ab8d0;--gf-overlay:rgba(5,20,35,0.7);`,
        rose: `--gf-bg:rgba(60,20,40,0.6);--gf-border:rgba(255,80,120,0.25);--gf-text:#ffe0ea;--gf-text-secondary:#d08aa0;--gf-overlay:rgba(30,10,20,0.7);`,
        emerald: `--gf-bg:rgba(15,50,35,0.6);--gf-border:rgba(16,185,129,0.25);--gf-text:#d0ffe8;--gf-text-secondary:#7ac0a0;--gf-overlay:rgba(8,25,18,0.7);`,
      }
      return themes[theme] || ''
    }
  }

  // ---------------------------------------------------------------------------
  // <glass-badge>
  // ---------------------------------------------------------------------------

  class GlassBadge extends HTMLElement {
    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
    }

    static get observedAttributes() {
      return ['theme', 'blur', 'radius', 'color', 'variant', 'size']
    }

    connectedCallback() {
      this.render()
    }

    attributeChangedCallback() {
      if (this.shadowRoot) this.render()
    }

    render() {
      const blur = numAttr(this, 'blur', 12)
      const radius = numAttr(this, 'radius', 100)
      const color = strAttr(this, 'color', '')
      const variant = strAttr(this, 'variant', 'default') // default | filled | dot
      const size = strAttr(this, 'size', 'medium') // small | medium | large
      const themeVars = this._getThemeVars()

      const sizeMap = {
        small:  { padding: '2px 8px',  font: '11px' },
        medium: { padding: '4px 12px', font: '12px' },
        large:  { padding: '6px 16px', font: '14px' },
      }
      const s = sizeMap[size] || sizeMap.medium

      const variantStyles = {
        default: `
          background: ${color || 'var(--gf-bg)'};
          border: 1px solid var(--gf-border);
          color: var(--gf-text);
        `,
        filled: `
          background: var(--gf-accent);
          border: 1px solid transparent;
          color: #ffffff;
        `,
        dot: `
          background: var(--gf-accent);
          border: none;
          color: transparent;
          width: 8px; height: 8px;
          padding: 0;
          min-width: 8px;
        `,
      }

      const shadow = this.shadowRoot
      shadow.innerHTML = `
        <style>
          ${GLASS_BASE}
          .badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: ${s.padding};
            font-size: ${s.font};
            font-weight: 600;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif;
            border-radius: ${radius}px;
            line-height: 1;
            white-space: nowrap;
            ${backdropFilterCSS(blur, 1.8, 1.1)}
            ${variantStyles[variant] || variantStyles.default}
            ${themeVars}
          }
        </style>
        <span class="badge" part="badge">
          <slot></slot>
        </span>
      `
    }

    _getThemeVars() {
      const theme = strAttr(this, 'theme', '')
      if (!theme) return ''
      const themes = {
        dark: `--gf-bg:rgba(30,30,30,0.65);--gf-border:rgba(255,255,255,0.12);--gf-text:#f5f5f7;--gf-accent:#0a84ff;`,
        aurora: `--gf-bg:rgba(20,20,40,0.6);--gf-border:rgba(120,80,255,0.25);--gf-text:#e8e0ff;--gf-accent:#a855f7;`,
        ocean: `--gf-bg:rgba(10,40,60,0.6);--gf-border:rgba(0,180,216,0.25);--gf-text:#d0f0ff;--gf-accent:#00b4d8;`,
        rose: `--gf-bg:rgba(60,20,40,0.6);--gf-border:rgba(255,80,120,0.25);--gf-text:#ffe0ea;--gf-accent:#ff5078;`,
        emerald: `--gf-bg:rgba(15,50,35,0.6);--gf-border:rgba(16,185,129,0.25);--gf-text:#d0ffe8;--gf-accent:#10b981;`,
      }
      return themes[theme] || ''
    }
  }

  // ---------------------------------------------------------------------------
  // <glass-tooltip>
  // ---------------------------------------------------------------------------

  class GlassTooltip extends HTMLElement {
    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
    }

    static get observedAttributes() {
      return ['theme', 'blur', 'content', 'position', 'delay']
    }

    connectedCallback() {
      this.render()
      this._bindEvents()
    }

    attributeChangedCallback() {
      if (this.shadowRoot) this.render()
    }

    render() {
      const blur = numAttr(this, 'blur', 16)
      const content = strAttr(this, 'content', '')
      const position = strAttr(this, 'position', 'top') // top | bottom | left | right
      const themeVars = this._getThemeVars()

      const posStyles = {
        top:    'bottom: calc(100% + 8px); left: 50%; transform: translateX(-50%) translateY(4px);',
        bottom: 'top: calc(100% + 8px); left: 50%; transform: translateX(-50%) translateY(-4px);',
        left:   'right: calc(100% + 8px); top: 50%; transform: translateY(-50%) translateX(4px);',
        right:  'left: calc(100% + 8px); top: 50%; transform: translateY(-50%) translateX(-4px);',
      }

      const visiblePosStyles = {
        top:    'transform: translateX(-50%) translateY(0);',
        bottom: 'transform: translateX(-50%) translateY(0);',
        left:   'transform: translateY(-50%) translateX(0);',
        right:  'transform: translateY(-50%) translateX(0);',
      }

      const shadow = this.shadowRoot
      shadow.innerHTML = `
        <style>
          ${GLASS_BASE}
          .wrapper {
            position: relative;
            display: inline-block;
          }
          .tip {
            position: absolute;
            ${posStyles[position] || posStyles.top}
            padding: 8px 14px;
            font-size: 13px;
            font-weight: 500;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif;
            color: var(--gf-text);
            background: var(--gf-bg);
            border: 1px solid var(--gf-border);
            border-radius: 10px;
            white-space: nowrap;
            pointer-events: none;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.2s ease, visibility 0.2s ease, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
            z-index: 10000;
            ${backdropFilterCSS(blur, 1.8, 1.1)}
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
            ${themeVars}
          }
          .tip::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            pointer-events: none;
          }
          .wrapper:hover .tip,
          .tip.visible {
            opacity: 1;
            visibility: visible;
            ${visiblePosStyles[position] || visiblePosStyles.top}
          }
          .slot-content {
            display: inline-block;
          }
        </style>
        <div class="wrapper" part="wrapper">
          <span class="slot-content"><slot></slot></span>
          <div class="tip" part="tooltip">${content}</div>
        </div>
      `
    }

    _bindEvents() {
      // Tooltip visibility is handled by CSS :hover on the wrapper
      // Additional programmatic show/hide can be added here
    }

    /** Programmatically show the tooltip */
    show() {
      const tip = this.shadowRoot?.querySelector('.tip')
      if (tip) tip.classList.add('visible')
    }

    /** Programmatically hide the tooltip */
    hide() {
      const tip = this.shadowRoot?.querySelector('.tip')
      if (tip) tip.classList.remove('visible')
    }

    _getThemeVars() {
      const theme = strAttr(this, 'theme', '')
      if (!theme) return ''
      const themes = {
        dark: `--gf-bg:rgba(30,30,30,0.65);--gf-border:rgba(255,255,255,0.12);--gf-text:#f5f5f7;`,
        aurora: `--gf-bg:rgba(20,20,40,0.6);--gf-border:rgba(120,80,255,0.25);--gf-text:#e8e0ff;`,
        ocean: `--gf-bg:rgba(10,40,60,0.6);--gf-border:rgba(0,180,216,0.25);--gf-text:#d0f0ff;`,
        rose: `--gf-bg:rgba(60,20,40,0.6);--gf-border:rgba(255,80,120,0.25);--gf-text:#ffe0ea;`,
        emerald: `--gf-bg:rgba(15,50,35,0.6);--gf-border:rgba(16,185,129,0.25);--gf-text:#d0ffe8;`,
      }
      return themes[theme] || ''
    }
  }

  // ---------------------------------------------------------------------------
  // Register All Custom Elements
  // ---------------------------------------------------------------------------

  function registerAll() {
    if (!customElements.get('glass-card')) {
      customElements.define('glass-card', GlassCard)
    }
    if (!customElements.get('glass-button')) {
      customElements.define('glass-button', GlassButton)
    }
    if (!customElements.get('glass-input')) {
      customElements.define('glass-input', GlassInput)
    }
    if (!customElements.get('glass-modal')) {
      customElements.define('glass-modal', GlassModal)
    }
    if (!customElements.get('glass-badge')) {
      customElements.define('glass-badge', GlassBadge)
    }
    if (!customElements.get('glass-tooltip')) {
      customElements.define('glass-tooltip', GlassTooltip)
    }
  }

  // Auto-register when the script is loaded
  if (typeof customElements !== 'undefined') {
    registerAll()
  }

  // Expose for module usage
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GlassCard, GlassButton, GlassInput, GlassModal, GlassBadge, GlassTooltip, registerAll }
  }
})()
