import React from 'react';
import {cn} from '@/lib/utils'

export const MinWidthWrapper = ({
    className,
    children
    }:{
    className?: string,
    children: React.ReactNode
}) => {
    return (
        <div className={cn('max-w-screen-xl px-2 sm:px-4', className)}>
            {children}
        </div>
    );
};
