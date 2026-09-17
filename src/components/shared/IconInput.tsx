import type { ComponentProps } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Input } from '../ui/input';
import { cn } from '../ui/utils';

interface IconInputProps extends ComponentProps<'input'> {
  icon: LucideIcon;
}

export function IconInput({ icon: Icon, className, ...props }: IconInputProps) {
  return (
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
      <Input className={cn('pl-11', className)} {...props} />
    </div>
  );
}
