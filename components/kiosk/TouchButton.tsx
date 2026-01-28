'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface TouchButtonProps {
    children: ReactNode;
    onClick?: () => void;
    icon?: LucideIcon;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    disabled?: boolean;
    type?: 'button' | 'submit';
}

export default function TouchButton({
    children,
    onClick,
    icon: Icon,
    variant = 'primary',
    size = 'lg',
    className = '',
    disabled = false,
    type = 'button'
}: TouchButtonProps) {
    const sizeClasses = {
        sm: 'px-6 py-3 text-base min-h-[50px]',
        md: 'px-8 py-4 text-lg min-h-[60px]',
        lg: 'px-10 py-5 text-xl min-h-[70px]'
    };

    const variantClasses = {
        primary: 'bg-primary text-white hover:bg-primary-dark',
        secondary: 'bg-secondary text-white hover:bg-secondary-dark',
        outline: 'bg-transparent border-2 border-white text-white hover:bg-white/10'
    };

    return (
        <motion.button
            type={type}
            onClick={onClick}
            disabled={disabled}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
                ${sizeClasses[size]}
                ${variantClasses[variant]}
                ${className}
                rounded-2xl font-bold
                flex items-center justify-center gap-3
                shadow-lg hover:shadow-xl
                transition-all duration-200
                disabled:opacity-50 disabled:cursor-not-allowed
                relative overflow-hidden
            `}
        >
            {Icon && <Icon className="w-6 h-6" />}
            <span>{children}</span>

            {/* Touch Ripple */}
            <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ scale: 0, opacity: 0 }}
                whileTap={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.5 }}
            />
        </motion.button>
    );
}
