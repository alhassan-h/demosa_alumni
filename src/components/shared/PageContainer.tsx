import type { ReactNode } from 'react';
import { cn } from '../ui/utils';

interface PageContainerProps {
  children: ReactNode;
  /** 'default' for grids/lists, 'narrow' for single-column reading/detail/form views */
  size?: 'default' | 'narrow';
  className?: string;
}

export function PageContainer({ children, size = 'default', className }: PageContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        size === 'narrow' ? 'max-w-3xl' : 'max-w-7xl',
        className,
      )}
    >
      {children}
    </div>
  );
}
