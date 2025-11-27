import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Observer } from 'gsap/Observer'
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(ScrollTrigger, Observer, Flip)

export { gsap, ScrollTrigger, Observer, Flip }

export const revealChildren = (container, childSelector, options = {}) => {
  if (!container) return
  const items = container.querySelectorAll(childSelector)
  items.forEach((el, i) => {
    gsap.set(el, { opacity: 0, y: 24 })
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          delay: i * (options.stagger ?? 0.06)
        })
      }
    })
  })
}

export const magneticHover = (el, strength = 0.25) => {
  if (!el) return
  const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' })
  const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' })
  const onMove = (e) => {
    const rect = el.getBoundingClientRect()
    const relX = (e.clientX - rect.left - rect.width / 2)
    const relY = (e.clientY - rect.top - rect.height / 2)
    xTo(relX * strength)
    yTo(relY * strength)
  }
  const reset = () => {
    xTo(0)
    yTo(0)
  }
  el.addEventListener('mousemove', onMove)
  el.addEventListener('mouseleave', reset)
  return () => {
    el.removeEventListener('mousemove', onMove)
    el.removeEventListener('mouseleave', reset)
  }
}

