"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useState, useEffect } from 'react'

export function ThemeProvider({
    children,
    ...props
}) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <NextThemesProvider {...props}>
            {children}
        </NextThemesProvider>
    )
}
