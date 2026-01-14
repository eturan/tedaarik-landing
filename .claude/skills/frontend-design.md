# Front-End Design Skill for TEDAARIK

You are a front-end design specialist for the TEDAARIK restaurant management system. Follow these modern guidelines when designing and implementing UI components.

## Design System

### Color Palette
- **Primary (Teal)**: `bg-primary` / `text-primary` - oklch(0.697 0.121 192.5) - Use for main CTAs, links, focus rings
- **Accent (Orange)**: `bg-accent` / `text-accent` - oklch(0.658 0.156 45.5) - Use for highlights, secondary actions
- **Destructive (Red)**: `bg-destructive` - For delete actions, errors
- **Muted**: `bg-muted` / `text-muted-foreground` - For subtle backgrounds, secondary text

### Typography
- Font: Geist Sans (--font-sans) / Geist Mono (--font-mono)
- Use Tailwind text utilities: `text-sm`, `text-base`, `text-lg`
- Headings: `font-semibold` or `font-medium`
- Secondary text: `text-muted-foreground`
- Use `tracking-tight` for large headings
- Use `text-balance` for better text wrapping on headings

### Spacing & Layout
- Border radius: `rounded-md` (default), `rounded-lg` for cards, `rounded-xl` for modals
- Consistent padding: `p-4`, `p-6` for containers
- Gap utilities: `gap-2`, `gap-4`, `gap-6`
- Use `space-y-*` for vertical stacking

## Modern CSS Techniques

### Fluid Typography & Spacing
```tsx
// Use clamp for fluid sizing
className="text-[clamp(1.5rem,4vw,2.5rem)]"

// Fluid spacing
className="p-[clamp(1rem,3vw,2rem)]"
```

### Container Queries
```tsx
// Parent container
<div className="@container">
  {/* Responsive to container, not viewport */}
  <div className="@md:flex-row flex-col">
    {/* ... */}
  </div>
</div>
```

### Modern Gradients & Effects
```tsx
// Subtle gradient backgrounds
className="bg-gradient-to-br from-background to-muted/50"

// Glass morphism effect
className="bg-background/80 backdrop-blur-sm border border-border/50"

// Subtle shadows
className="shadow-sm hover:shadow-md transition-shadow"
```

## Available UI Components

Import from `@/components/ui/`:

```tsx
// Core
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'

// Selection
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Command, CommandInput, CommandList, CommandItem } from '@/components/ui/command'

// Layout
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'

// Overlays
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

// Data Display
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

// Forms
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

// Feedback
import { toast } from 'sonner'
```

## Shared Components

Import from `@/components/shared/`:

```tsx
import { LoadingState } from '@/components/shared/loading-state'
import { EmptyState } from '@/components/shared/empty-state'
import { ErrorBoundary } from '@/components/shared/error-boundary'
import { ImageZoomViewer } from '@/components/shared/image-zoom-viewer'
```

## Icons

Use Lucide React icons:

```tsx
import {
  Plus, Trash2, Edit, Save, X, Check,
  Loader2, Search, Filter, Download, Upload,
  ChevronDown, ChevronRight, MoreHorizontal,
  AlertCircle, Info, CheckCircle, XCircle,
  Sparkles, Zap, TrendingUp, ArrowRight
} from 'lucide-react'
```

## Modern Animation Patterns

### Micro-interactions with Tailwind
```tsx
// Smooth hover transitions
className="transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"

// Subtle hover lift
className="hover:-translate-y-0.5 transition-transform"

// Icon animations
<Button className="group">
  {t('continue')}
  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
</Button>

// Staggered animations for lists
className="animate-in fade-in slide-in-from-bottom-2 duration-300"
style={{ animationDelay: `${index * 50}ms` }}
```

### Loading States with Skeleton
```tsx
// Prefer skeletons over spinners for content loading
function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className="h-12 rounded-md bg-muted animate-pulse"
          style={{ animationDelay: `${i * 100}ms` }}
        />
      ))}
    </div>
  )
}

// Card skeleton
function CardSkeleton() {
  return (
    <Card>
      <CardHeader className="space-y-2">
        <div className="h-5 w-1/3 rounded bg-muted animate-pulse" />
        <div className="h-4 w-2/3 rounded bg-muted animate-pulse" />
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-muted animate-pulse" />
          <div className="h-4 w-4/5 rounded bg-muted animate-pulse" />
        </div>
      </CardContent>
    </Card>
  )
}
```

### Animated Numbers
```tsx
// Use for statistics/metrics that change
import { useEffect, useState } from 'react'

function AnimatedNumber({ value, duration = 500 }: { value: number; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const start = displayValue
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // Ease out cubic
      setDisplayValue(Math.round(start + (value - start) * eased))

      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [value])

  return <span className="tabular-nums">{displayValue.toLocaleString()}</span>
}
```

## Modern Component Patterns

### Optimistic Updates
```tsx
async function handleToggle(id: string, currentValue: boolean) {
  // Update UI immediately
  setItems(prev => prev.map(item =>
    item.id === id ? { ...item, active: !currentValue } : item
  ))

  try {
    await updateItem(id, { active: !currentValue })
    toast.success(t('updateSuccess'))
  } catch (error) {
    // Revert on failure
    setItems(prev => prev.map(item =>
      item.id === id ? { ...item, active: currentValue } : item
    ))
    toast.error(t('updateFailed'))
  }
}
```

### Modern Card with Hover Effects
```tsx
<Card className="group relative overflow-hidden transition-all hover:shadow-lg hover:border-primary/20">
  {/* Subtle gradient overlay on hover */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

  <CardHeader className="relative">
    <CardTitle className="flex items-center gap-2">
      <span className="p-2 rounded-lg bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </span>
      {title}
    </CardTitle>
  </CardHeader>

  <CardContent className="relative">
    {/* Content */}
  </CardContent>

  <CardFooter className="relative">
    <Button variant="ghost" className="ml-auto group/btn">
      {t('viewDetails')}
      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
    </Button>
  </CardFooter>
</Card>
```

### Modern Stats/Metrics Display
```tsx
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
  {stats.map((stat, index) => (
    <Card
      key={stat.label}
      className="animate-in fade-in slide-in-from-bottom-2"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="text-2xl font-semibold tracking-tight">
              <AnimatedNumber value={stat.value} />
            </p>
          </div>
          <div className={cn(
            "p-3 rounded-full",
            stat.trend > 0 ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
          )}>
            <TrendingUp className={cn("h-5 w-5", stat.trend < 0 && "rotate-180")} />
          </div>
        </div>
        {stat.change && (
          <p className={cn(
            "mt-2 text-xs flex items-center gap-1",
            stat.trend > 0 ? "text-green-600" : "text-red-600"
          )}>
            {stat.trend > 0 ? "+" : ""}{stat.change}% {t('fromLastMonth')}
          </p>
        )}
      </CardContent>
    </Card>
  ))}
</div>
```

### Modern Empty State
```tsx
<div className="flex flex-col items-center justify-center py-16 text-center">
  <div className="relative mb-6">
    {/* Decorative rings */}
    <div className="absolute inset-0 rounded-full bg-primary/5 animate-ping" />
    <div className="relative rounded-full bg-gradient-to-br from-primary/10 to-accent/10 p-6">
      <Icon className="h-10 w-10 text-primary" />
    </div>
  </div>

  <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
  <p className="mt-2 text-muted-foreground max-w-sm text-balance">{description}</p>

  <Button className="mt-6 group">
    <Plus className="mr-2 h-4 w-4 transition-transform group-hover:rotate-90" />
    {t('createFirst')}
  </Button>
</div>
```

### Modern Dialog
```tsx
<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent className="max-w-lg overflow-hidden p-0">
    {/* Optional header gradient */}
    <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-transparent p-6 pb-4">
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          <span className="p-1.5 rounded-md bg-primary/10">
            <Icon className="h-4 w-4 text-primary" />
          </span>
          {t('dialogTitle')}
        </DialogTitle>
        <DialogDescription>{t('dialogDescription')}</DialogDescription>
      </DialogHeader>
    </div>

    <div className="p-6 pt-2 space-y-4">
      {/* Form fields */}
    </div>

    <DialogFooter className="bg-muted/30 px-6 py-4">
      <Button variant="outline" onClick={() => setOpen(false)}>
        {t('cancel')}
      </Button>
      <Button onClick={handleSubmit} disabled={isSubmitting}>
        {isSubmitting ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Check className="mr-2 h-4 w-4" />
        )}
        {t('save')}
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Modern Table with Row Actions
```tsx
<div className="rounded-xl border overflow-hidden">
  <Table>
    <TableHeader>
      <TableRow className="bg-muted/50 hover:bg-muted/50">
        <TableHead className="font-semibold">{t('name')}</TableHead>
        <TableHead className="font-semibold">{t('status')}</TableHead>
        <TableHead className="w-[100px]"></TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {items.map((item, index) => (
        <TableRow
          key={item.id}
          className="group animate-in fade-in slide-in-from-left-1"
          style={{ animationDelay: `${index * 30}ms` }}
        >
          <TableCell>
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary/10 text-primary text-xs">
                  {item.name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.subtitle}</p>
              </div>
            </div>
          </TableCell>
          <TableCell>
            <Badge
              variant={item.active ? 'default' : 'secondary'}
              className={cn(
                "transition-colors",
                item.active && "bg-green-100 text-green-700 hover:bg-green-200"
              )}
            >
              <span className={cn(
                "mr-1.5 h-1.5 w-1.5 rounded-full",
                item.active ? "bg-green-500" : "bg-gray-400"
              )} />
              {item.active ? t('active') : t('inactive')}
            </Badge>
          </TableCell>
          <TableCell>
            <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon-sm" onClick={() => handleEdit(item)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{t('edit')}</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    className="text-destructive hover:text-destructive"
                    onClick={() => handleDelete(item)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{t('delete')}</TooltipContent>
              </Tooltip>
            </div>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</div>
```

## Modern Form Patterns

### Inline Validation with Visual Feedback
```tsx
<FormField
  control={form.control}
  name="email"
  render={({ field, fieldState }) => (
    <FormItem>
      <FormLabel>{t('email')}</FormLabel>
      <FormControl>
        <div className="relative">
          <Input
            {...field}
            className={cn(
              "pr-10 transition-colors",
              fieldState.invalid && "border-destructive focus-visible:ring-destructive/20",
              fieldState.isDirty && !fieldState.invalid && "border-green-500 focus-visible:ring-green-500/20"
            )}
          />
          {fieldState.isDirty && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {fieldState.invalid ? (
                <XCircle className="h-4 w-4 text-destructive" />
              ) : (
                <CheckCircle className="h-4 w-4 text-green-500" />
              )}
            </div>
          )}
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
```

### Multi-step Form Progress
```tsx
<div className="mb-8">
  <div className="flex items-center justify-between mb-2">
    {steps.map((step, index) => (
      <div
        key={step.id}
        className={cn(
          "flex items-center gap-2",
          index <= currentStep ? "text-primary" : "text-muted-foreground"
        )}
      >
        <div className={cn(
          "flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors",
          index < currentStep && "bg-primary border-primary text-primary-foreground",
          index === currentStep && "border-primary",
          index > currentStep && "border-muted"
        )}>
          {index < currentStep ? (
            <Check className="h-4 w-4" />
          ) : (
            <span className="text-sm font-medium">{index + 1}</span>
          )}
        </div>
        <span className="hidden sm:block text-sm font-medium">{step.label}</span>
      </div>
    ))}
  </div>
  <div className="h-2 rounded-full bg-muted overflow-hidden">
    <div
      className="h-full bg-primary transition-all duration-500"
      style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
    />
  </div>
</div>
```

## Modern Toast Patterns

```tsx
import { toast } from 'sonner'

// Success with icon
toast.success(t('saved'), {
  description: t('changesSaved'),
  icon: <CheckCircle className="h-4 w-4 text-green-500" />,
})

// Action toast
toast(t('itemDeleted'), {
  action: {
    label: t('undo'),
    onClick: () => handleUndo(),
  },
})

// Promise toast for async operations
toast.promise(saveData(), {
  loading: t('saving'),
  success: t('saved'),
  error: t('saveFailed'),
})
```

## Responsive Patterns

### Modern Responsive Layout
```tsx
// Use grid with auto-fit for responsive cards
<div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
  {items.map(item => <Card key={item.id}>{/* ... */}</Card>)}
</div>

// Responsive stack to row
<div className="flex flex-col sm:flex-row sm:items-center gap-4">
  {/* ... */}
</div>

// Hide/show based on viewport
<Button className="sm:hidden" size="icon">
  <Menu className="h-4 w-4" />
</Button>
<Button className="hidden sm:flex">
  <Plus className="mr-2 h-4 w-4" />
  {t('addNew')}
</Button>
```

## Accessibility (Modern)

- Use `prefers-reduced-motion` for animations:
```tsx
className="motion-safe:animate-in motion-safe:fade-in motion-reduce:animate-none"
```
- Focus visible rings: `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`
- Skip links for keyboard users
- `aria-live` regions for dynamic content
- Semantic HTML with proper landmarks

## Internationalization

Always use translations via the `useLanguage` hook:

```tsx
import { useLanguage } from '@/lib/i18n/LanguageContext'

function MyComponent() {
  const { t } = useLanguage()
  return <Button>{t('save')}</Button>
}
```

Add translations to `lib/i18n/translations.ts` for both `en` and `tr`.

## File Naming & Location

- Component files: `kebab-case.tsx` (e.g., `recipe-editor.tsx`)
- Location: `/components/[feature]/component-name.tsx`
- Shared components: `/components/shared/`
- UI primitives: `/components/ui/`
