import React from 'react';
import {cn} from '@/lib/utils'

export const MaxWidthWrapper = ({
    className,
    children
    }:{
    className?: string,
    children: React.ReactNode
}) => {
    return (
        <div className={cn('max-w-screen-2xl px-4', className)}>
            {children}
        </div>
    );
};
