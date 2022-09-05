import { useState, useEffect } from 'react'

export const useWidthWindow = () => {
	const [width, setWidth] = useState(window.innerWidth)
	useEffect(() => {
		const handleResizeWindow = () => setWidth(window.innerWidth)
		window.addEventListener('resize', handleResizeWindow)
		return () => {
			window.removeEventListener('resize', handleResizeWindow)
		}
	}, [])

	return width
}
