import { useEffect } from 'react'

export default function SmoothScrollLink({ href, children, ...props }) {
  useEffect(() => {
    const handleClick = (e) => {
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const targetId = href.slice(1)
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    const link = document.querySelector(`a[href="${href}"]`)
    if (link) {
      link.addEventListener('click', handleClick)
      return () => link.removeEventListener('click', handleClick)
    }
  }, [href])

  return <a href={href} {...props}>{children}</a>
}