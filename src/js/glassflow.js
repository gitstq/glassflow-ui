/**
 * GlassFlow UI - Core Library
 * A framework-agnostic Apple Liquid Glass UI component library
 * 
 * @version 1.0.0
 * @license MIT
 */

;(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory)
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory()
  } else {
    root.GlassFlow = factory()
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict'

  // ---------------------------------------------------------------------------
  // Constants & Configuration
  // ---------------------------------------------------------------------------

  /** Default configuration */
  const DEFAULTS = {
    theme: 'auto',           // 'light' | 'dark' | 'auto'
    blur: 20,                // backdrop-filter blur in px
    frost: 0.6,              // frost intensity 0-1
    saturation: 1.8,         // backdrop saturation
    brightness: 1.1,        // backdrop brightness
    borderRadius: 24,        // default border radius in px
    animationDuration: 600,  // animation duration in ms
    animationEasing: 'cubic-bezier(0.34, 1.56, 0.64, 1)', // spring easing
    rippleDuration: 800,    // ripple effect duration in ms
    scrollThreshold: 0.15,  // intersection observer threshold
    mouseLightEnabled: true, // enable mouse-tracking highlight
    mouseLightRadius: 300,   // mouse light effect radius in px
    mouseLightOpacity: 0.12,// mouse light max opacity
  }

  /** Built-in theme definitions */
  const THEMES = {
    light: {
      '--gf-bg': 'rgba(255, 255, 255, 0.55)',
      '--gf-bg-solid': '#f2f2f7',
      '--gf-border': 'rgba(255, 255, 255, 0.7)',
      '--gf-text': '#1d1d1f',
      '--gf-text-secondary': '#86868b',
      '--gf-shadow': '0 8px 32px rgba(0, 0, 0, 0.08)',
      '--gf-shadow-hover': '0 12px 48px rgba(0, 0, 0, 0.12)',
      '--gf-accent': '#007aff',
      '--gf-accent-rgb': '0, 122, 255',
      '--gf-surface': '#ffffff',
      '--gf-overlay': 'rgba(0, 0, 0, 0.3)',
      '--gf-ripple': 'rgba(0, 0, 0, 0.08)',
      '--gf-mouse-light': 'rgba(255, 255, 255, 0.5)',
      '--gf-refraction': '0.8',
      '--gf-caustics': 'rgba(255, 255, 255, 0.15)',
      '--gf-nav-bg': 'rgba(255, 255, 255, 0.72)',
    },
    dark: {
      '--gf-bg': 'rgba(30, 30, 30, 0.65)',
      '--gf-bg-solid': '#1c1c1e',
      '--gf-border': 'rgba(255, 255, 255, 0.12)',
      '--gf-text': '#f5f5f7',
      '--gf-text-secondary': '#98989d',
      '--gf-shadow': '0 8px 32px rgba(0, 0, 0, 0.3)',
      '--gf-shadow-hover': '0 12px 48px rgba(0, 0, 0, 0.4)',
      '--gf-accent': '#0a84ff',
      '--gf-accent-rgb': '10, 132, 255',
      '--gf-surface': '#2c2c2e',
      '--gf-overlay': 'rgba(0, 0, 0, 0.6)',
      '--gf-ripple': 'rgba(255, 255, 255, 0.1)',
      '--gf-mouse-light': 'rgba(255, 255, 255, 0.15)',
      '--gf-refraction': '0.6',
      '--gf-caustics': 'rgba(255, 255, 255, 0.05)',
      '--gf-nav-bg': 'rgba(28, 28, 30, 0.72)',
    },
    aurora: {
      '--gf-bg': 'rgba(20, 20, 40, 0.6)',
      '--gf-bg-solid': '#14142a',
      '--gf-border': 'rgba(120, 80, 255, 0.25)',
      '--gf-text': '#e8e0ff',
      '--gf-text-secondary': '#a89cc8',
      '--gf-shadow': '0 8px 32px rgba(80, 40, 200, 0.2)',
      '--gf-shadow-hover': '0 12px 48px rgba(80, 40, 200, 0.35)',
      '--gf-accent': '#a855f7',
      '--gf-accent-rgb': '168, 85, 247',
      '--gf-surface': '#1e1e3a',
      '--gf-overlay': 'rgba(10, 10, 30, 0.7)',
      '--gf-ripple': 'rgba(168, 85, 247, 0.15)',
      '--gf-mouse-light': 'rgba(168, 85, 247, 0.2)',
      '--gf-refraction': '0.7',
      '--gf-caustics': 'rgba(168, 85, 247, 0.08)',
      '--gf-nav-bg': 'rgba(20, 20, 40, 0.75)',
    },
    ocean: {
      '--gf-bg': 'rgba(10, 40, 60, 0.6)',
      '--gf-bg-solid': '#0a283c',
      '--gf-border': 'rgba(0, 180, 216, 0.25)',
      '--gf-text': '#d0f0ff',
      '--gf-text-secondary': '#7ab8d0',
      '--gf-shadow': '0 8px 32px rgba(0, 100, 150, 0.2)',
      '--gf-shadow-hover': '0 12px 48px rgba(0, 100, 150, 0.35)',
      '--gf-accent': '#00b4d8',
      '--gf-accent-rgb': '0, 180, 216',
      '--gf-surface': '#0e3450',
      '--gf-overlay': 'rgba(5, 20, 35, 0.7)',
      '--gf-ripple': 'rgba(0, 180, 216, 0.15)',
      '--gf-mouse-light': 'rgba(0, 180, 216, 0.2)',
      '--gf-refraction': '0.7',
      '--gf-caustics': 'rgba(0, 180, 216, 0.08)',
      '--gf-nav-bg': 'rgba(10, 40, 60, 0.75)',
    },
    rose: {
      '--gf-bg': 'rgba(60, 20, 40, 0.6)',
      '--gf-bg-solid': '#3c1428',
      '--gf-border': 'rgba(255, 80, 120, 0.25)',
      '--gf-text': '#ffe0ea',
      '--gf-text-secondary': '#d08aa0',
      '--gf-shadow': '0 8px 32px rgba(200, 40, 80, 0.2)',
      '--gf-shadow-hover': '0 12px 48px rgba(200, 40, 80, 0.35)',
      '--gf-accent': '#ff5078',
      '--gf-accent-rgb': '255, 80, 120',
      '--gf-surface': '#4a1a30',
      '--gf-overlay': 'rgba(30, 10, 20, 0.7)',
      '--gf-ripple': 'rgba(255, 80, 120, 0.15)',
      '--gf-mouse-light': 'rgba(255, 80, 120, 0.2)',
      '--gf-refraction': '0.7',
      '--gf-caustics': 'rgba(255, 80, 120, 0.08)',
      '--gf-nav-bg': 'rgba(60, 20, 40, 0.75)',
    },
    emerald: {
      '--gf-bg': 'rgba(15, 50, 35, 0.6)',
      '--gf-bg-solid': '#0f3223',
      '--gf-border': 'rgba(16, 185, 129, 0.25)',
      '--gf-text': '#d0ffe8',
      '--gf-text-secondary': '#7ac0a0',
      '--gf-shadow': '0 8px 32px rgba(0, 120, 80, 0.2)',
      '--gf-shadow-hover': '0 12px 48px rgba(0, 120, 80, 0.35)',
      '--gf-accent': '#10b981',
      '--gf-accent-rgb': '16, 185, 129',
      '--gf-surface': '#134030',
      '--gf-overlay': 'rgba(8, 25, 18, 0.7)',
      '--gf-ripple': 'rgba(16, 185, 129, 0.15)',
      '--gf-mouse-light': 'rgba(16, 185, 129, 0.2)',
      '--gf-refraction': '0.7',
      '--gf-caustics': 'rgba(16, 185, 129, 0.08)',
      '--gf-nav-bg': 'rgba(15, 50, 35, 0.75)',
    },
  }

  // ---------------------------------------------------------------------------
  // Utility Helpers
  // ---------------------------------------------------------------------------

  /** Merge options with defaults */
  function mergeOptions(target, source) {
    const result = Object.assign({}, target)
    for (const key of Object.keys(source)) {
      if (source[key] !== undefined) {
        result[key] = source[key]
      }
    }
    return result
  }

  /** Check if the system prefers dark color scheme */
  function prefersDarkScheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  /** Resolve the effective theme name */
  function resolveTheme(theme) {
    if (theme === 'auto') {
      return prefersDarkScheme() ? 'dark' : 'light'
    }
    return theme
  }

  /** Generate a unique ID */
  let _uid = 0
  function uid() {
    return 'gf-' + (++_uid)
  }

  /** Simple debounce */
  function debounce(fn, delay) {
    let timer = null
    return function (...args) {
      clearTimeout(timer)
      timer = setTimeout(() => fn.apply(this, args), delay)
    }
  }

  // ---------------------------------------------------------------------------
  // Ripple Effect
  // ---------------------------------------------------------------------------

  /** Create a ripple effect on the target element */
  function createRipple(e, el, config) {
    const rect = el.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height) * 2
    const x = (e.clientX || rect.left + rect.width / 2) - rect.left - size / 2
    const y = (e.clientY || rect.top + rect.height / 2) - rect.top - size / 2

    const ripple = document.createElement('span')
    ripple.className = 'gf-ripple'
    ripple.style.cssText = `
      position:absolute; border-radius:50%; pointer-events:none;
      width:${size}px; height:${size}px; left:${x}px; top:${y}px;
      background:var(--gf-ripple, rgba(0,0,0,0.08));
      transform:scale(0); opacity:1;
      animation:gf-ripple-anim ${config.rippleDuration}ms ease-out forwards;
    `

    // Ensure the container has position relative and overflow hidden
    const position = getComputedStyle(el).position
    if (position === 'static' || position === '') {
      el.style.position = 'relative'
    }
    el.style.overflow = 'hidden'

    el.appendChild(ripple)
    ripple.addEventListener('animationend', () => ripple.remove())
  }

  /** Inject ripple keyframes if not present */
  function ensureRippleStyles() {
    if (document.getElementById('gf-ripple-style')) return
    const style = document.createElement('style')
    style.id = 'gf-ripple-style'
    style.textContent = `
      @keyframes gf-ripple-anim {
        0%   { transform: scale(0); opacity: 1; }
        100% { transform: scale(1); opacity: 0; }
      }
    `
    document.head.appendChild(style)
  }

  // ---------------------------------------------------------------------------
  // Scroll Reveal (IntersectionObserver)
  // ---------------------------------------------------------------------------

  /** Setup scroll-driven reveal animations */
  function setupScrollReveal(root, config) {
    const elements = root.querySelectorAll('[data-gf-reveal]')
    if (!elements.length) return

    // Inject reveal styles if not present
    if (!document.getElementById('gf-reveal-style')) {
      const style = document.createElement('style')
      style.id = 'gf-reveal-style'
      style.textContent = `
        [data-gf-reveal] {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity ${config.animationDuration}ms ${config.animationEasing},
                      transform ${config.animationDuration}ms ${config.animationEasing};
        }
        [data-gf-reveal].gf-revealed {
          opacity: 1;
          transform: translateY(0);
        }
        [data-gf-reveal="fade"] {
          transform: none;
        }
        [data-gf-reveal="scale"] {
          transform: scale(0.9);
        }
        [data-gf-reveal="scale"].gf-revealed {
          transform: scale(1);
        }
        [data-gf-reveal="left"] {
          transform: translateX(-40px);
        }
        [data-gf-reveal="left"].gf-revealed {
          transform: translateX(0);
        }
        [data-gf-reveal="right"] {
          transform: translateX(40px);
        }
        [data-gf-reveal="right"].gf-revealed {
          transform: translateX(0);
        }
      `
      document.head.appendChild(style)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Support staggered delay via data-gf-delay attribute
            const delay = parseInt(entry.target.dataset.gfDelay || '0', 10)
            setTimeout(() => {
              entry.target.classList.add('gf-revealed')
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: config.scrollThreshold }
    )

    elements.forEach((el) => observer.observe(el))
    return observer
  }

  // ---------------------------------------------------------------------------
  // Mouse Tracking Light Effect
  // ---------------------------------------------------------------------------

  /** Setup mouse-following highlight on glass surfaces */
  function setupMouseLight(root, config) {
    const glassElements = root.querySelectorAll('.gf-card, .gf-nav, .gf-panel, .gf-modal, [data-gf-glass]')

    if (!glassElements.length) return

    // Inject mouse light styles if not present
    if (!document.getElementById('gf-mouse-light-style')) {
      const style = document.createElement('style')
      style.id = 'gf-mouse-light-style'
      style.textContent = `
        .gf-mouse-light {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          pointer-events: none;
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }
      `
      document.head.appendChild(style)
    }

    // Add light overlay to each glass element
    glassElements.forEach((el) => {
      if (el.querySelector('.gf-mouse-light')) return
      const light = document.createElement('div')
      light.className = 'gf-mouse-light'
      el.style.position = el.style.position || 'relative'
      el.style.overflow = 'hidden'
      el.appendChild(light)
    })

    // Use event delegation on the root for performance
    function handleMouseMove(e) {
      glassElements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const light = el.querySelector('.gf-mouse-light')
        if (!light) return

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const radius = config.mouseLightRadius

        // Only show light when mouse is near the element
        const isNear =
          x > -radius && x < rect.width + radius &&
          y > -radius && y < rect.height + radius

        if (isNear) {
          light.style.opacity = config.mouseLightOpacity
          light.style.background = `radial-gradient(circle at ${x}px ${y}px, var(--gf-mouse-light, rgba(255,255,255,0.3)) 0%, transparent 70%)`
        } else {
          light.style.opacity = '0'
        }
      })
    }

    function handleMouseLeave() {
      glassElements.forEach((el) => {
        const light = el.querySelector('.gf-mouse-light')
        if (light) light.style.opacity = '0'
      })
    }

    root.addEventListener('mousemove', debounce(handleMouseMove, 8), { passive: true })
    root.addEventListener('mouseleave', handleMouseLeave, { passive: true })

    return { destroy: () => {
      root.removeEventListener('mousemove', handleMouseMove)
      root.removeEventListener('mouseleave', handleMouseLeave)
    }}
  }

  // ---------------------------------------------------------------------------
  // Spring / Elastic Animation Helper
  // ---------------------------------------------------------------------------

  /** Apply a spring-like animation to an element */
  function springAnimate(el, property, endValue, duration) {
    const startValue = parseFloat(getComputedStyle(el)[property]) || 0
    const startTime = performance.now()
    const range = endValue - startValue

    function step(now) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Damped spring approximation
      const spring = 1 - Math.exp(-6 * progress) * Math.cos(progress * Math.PI * 2.5)
      const current = startValue + range * spring
      el.style[property] = current + (typeof endValue === 'string' && endValue.includes('%') ? '%' : 'px')

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        el.style[property] = endValue
      }
    }
    requestAnimationFrame(step)
  }

  // ---------------------------------------------------------------------------
  // Theme Management
  // ---------------------------------------------------------------------------

  /** Apply theme CSS variables to a target element (or :root) */
  function applyTheme(target, themeName) {
    const vars = THEMES[themeName]
    if (!vars) {
      console.warn(`[GlassFlow] Unknown theme: "${themeName}". Available: ${Object.keys(THEMES).join(', ')}`)
      return
    }
    for (const [prop, value] of Object.entries(vars)) {
      target.style.setProperty(prop, value)
    }
  }

  /** Remove all GlassFlow CSS variables */
  function removeThemeVars(target) {
    Object.values(THEMES).flatMap(Object.keys).forEach((prop) => {
      target.style.removeProperty(prop)
    })
  }

  // ---------------------------------------------------------------------------
  // GlassFlow Main Class
  // ---------------------------------------------------------------------------

  class GlassFlow {
    constructor(options) {
      this._config = mergeOptions(DEFAULTS, options || {})
      this._root = this._config.root || document.documentElement
      this._currentTheme = null
      this._observers = []
      this._mouseLightCleanup = null
      this._systemMediaQuery = null
      this._initialized = false
    }

    // --- Public API ---

    /** Initialize GlassFlow on the document */
    init() {
      if (this._initialized) return this

      const root = this._root

      // Apply resolved theme
      this._applyCurrentTheme()

      // Listen for system theme changes when in 'auto' mode
      this._systemMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      this._systemMediaQuery.addEventListener('change', () => {
        if (this._config.theme === 'auto') {
          this._applyCurrentTheme()
          this._emit('themechange', { theme: resolveTheme('auto'), auto: true })
        }
      })

      // Setup scroll reveal animations
      const scrollObserver = setupScrollReveal(root, this._config)
      if (scrollObserver) this._observers.push(scrollObserver)

      // Setup mouse tracking light
      if (this._config.mouseLightEnabled) {
        this._mouseLightCleanup = setupMouseLight(root, this._config)
      }

      // Setup event delegation for ripple effects
      ensureRippleStyles()
      this._setupRippleDelegation()

      // Mark initialized
      this._initialized = true
      root.setAttribute('data-gf-active', '')

      this._emit('init', { theme: this._currentTheme })
      return this
    }

    /** Switch theme at runtime */
    setTheme(themeName) {
      if (!THEMES[themeName] && themeName !== 'auto') {
        console.warn(`[GlassFlow] Unknown theme: "${themeName}"`)
        return this
      }
      this._config.theme = themeName
      this._applyCurrentTheme()
      this._emit('themechange', { theme: this._currentTheme, auto: themeName === 'auto' })
      return this
    }

    /** Get the current active theme name */
    getTheme() {
      return this._currentTheme
    }

    /** Get all available theme names */
    getAvailableThemes() {
      return Object.keys(THEMES)
    }

    /** Get theme CSS variables for a given theme */
    getThemeVars(themeName) {
      return THEMES[themeName] || null
    }

    /** Update configuration at runtime */
    setConfig(newOptions) {
      this._config = mergeOptions(this._config, newOptions)
      return this
    }

    /** Get current configuration */
    getConfig() {
      return Object.assign({}, this._config)
    }

    /** Trigger a ripple effect programmatically */
    ripple(target, x, y) {
      const el = typeof target === 'string' ? document.querySelector(target) : target
      if (!el) return this
      createRipple({ clientX: x, clientY: y }, el, this._config)
      return this
    }

    /** Trigger a spring animation */
    spring(target, property, endValue, duration) {
      const el = typeof target === 'string' ? document.querySelector(target) : target
      if (!el) return this
      springAnimate(el, property, endValue, duration || this._config.animationDuration)
      return this
    }

    /** Refresh scroll observers (call after DOM changes) */
    refresh() {
      // Disconnect old observers
      this._observers.forEach((o) => o.disconnect && o.disconnect())
      this._observers = []

      // Re-setup
      const scrollObserver = setupScrollReveal(this._root, this._config)
      if (scrollObserver) this._observers.push(scrollObserver)

      if (this._config.mouseLightEnabled) {
        if (this._mouseLightCleanup) this._mouseLightCleanup.destroy()
        this._mouseLightCleanup = setupMouseLight(this._root, this._config)
      }

      return this
    }

    /** Destroy GlassFlow instance and clean up */
    destroy() {
      // Disconnect observers
      this._observers.forEach((o) => o.disconnect && o.disconnect())
      this._observers = []

      // Cleanup mouse light
      if (this._mouseLightCleanup) {
        this._mouseLightCleanup.destroy()
        this._mouseLightCleanup = null
      }

      // Remove system media query listener
      if (this._systemMediaQuery) {
        this._systemMediaQuery.removeEventListener('change')
        this._systemMediaQuery = null
      }

      // Remove theme variables
      removeThemeVars(this._root)

      // Remove injected styles
      ;['gf-ripple-style', 'gf-reveal-style', 'gf-mouse-light-style'].forEach((id) => {
        const el = document.getElementById(id)
        if (el) el.remove()
      })

      // Remove mouse light overlays
      this._root.querySelectorAll('.gf-mouse-light').forEach((el) => el.remove())

      // Remove active attribute
      this._root.removeAttribute('data-gf-active')

      this._initialized = false
      this._emit('destroy')
      return this
    }

    // --- Event System ---

    /** Subscribe to an event */
    on(event, handler) {
      if (!this._handlers) this._handlers = {}
      if (!this._handlers[event]) this._handlers[event] = []
      this._handlers[event].push(handler)
      return this
    }

    /** Unsubscribe from an event */
    off(event, handler) {
      if (!this._handlers || !this._handlers[event]) return this
      this._handlers[event] = this._handlers[event].filter((h) => h !== handler)
      return this
    }

    /** Emit an event */
    _emit(event, detail) {
      if (!this._handlers || !this._handlers[event]) return
      this._handlers[event].forEach((h) => {
        try { h(detail) } catch (err) { console.error(err) }
      })
      // Also dispatch a native CustomEvent on the root
      this._root.dispatchEvent(new CustomEvent('gf:' + event, { detail, bubbles: true }))
    }

    // --- Private Methods ---

    /** Apply the current theme based on config */
    _applyCurrentTheme() {
      const resolved = resolveTheme(this._config.theme)
      this._currentTheme = resolved
      applyTheme(this._root, resolved)
      this._root.setAttribute('data-gf-theme', resolved)
    }

    /** Setup delegated ripple click handler */
    _setupRippleDelegation() {
      this._root.addEventListener('click', (e) => {
        // Walk up the DOM to find the closest ripple-enabled element
        const target = e.target.closest('[data-gf-ripple], .gf-btn, .gf-card')
        if (target) {
          createRipple(e, target, this._config)
        }
      }, { passive: true })
    }
  }

  // ---------------------------------------------------------------------------
  // Static Convenience Methods
  // ---------------------------------------------------------------------------

  /** Quick init with optional config */
  GlassFlow.init = function (options) {
    const instance = new GlassFlow(options)
    return instance.init()
  }

  /** Quick theme switch (uses default singleton) */
  GlassFlow.setTheme = function (themeName) {
    if (!GlassFlow._defaultInstance) {
      GlassFlow._defaultInstance = GlassFlow.init()
    }
    return GlassFlow._defaultInstance.setTheme(themeName)
  }

  /** Destroy default instance */
  GlassFlow.destroy = function () {
    if (GlassFlow._defaultInstance) {
      GlassFlow._defaultInstance.destroy()
      GlassFlow._defaultInstance = null
    }
  }

  /** Access the default instance */
  GlassFlow.getInstance = function () {
    return GlassFlow._defaultInstance || null
  }

  // Expose theme data
  GlassFlow.THEMES = THEMES
  GlassFlow.DEFAULTS = DEFAULTS

  return GlassFlow
})
