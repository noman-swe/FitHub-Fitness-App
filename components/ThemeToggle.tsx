"use client"
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Moon, Sun } from 'lucide-react'

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) return null;
    return (
        <div>
            <Button variant={"ghost"} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? (<Sun className='w-4 h-4' />) : (<Moon className='w-4 h-4' />)}
            </Button>
        </div>
    )
}

export default ThemeToggle