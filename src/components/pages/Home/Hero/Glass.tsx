import { type HTMLAttributes, useCallback } from 'react'

import { labelData } from '@/constants'
import { cn } from '@/utilities'

const GlassItem = ({ value }: { value: string }) => {
  return <div className="bg-theme-night-300 text-theme-white rounded-md px-2 py-1">{value}</div>
}

type IGlassProps = HTMLAttributes<HTMLDivElement>
const Glass = ({ className }: IGlassProps) => {
  const getSeparator = useCallback((currentIndex: number, length: number): string => {
    if (currentIndex === length - 2) return ' and '
    if (currentIndex < length - 2) return ', '
    return ''
  }, [])
  return (
    <div
      className={cn(
        'border-theme-white/20 hover:border-theme-white/40 bg-theme-white/3 rounded-lg border px-7 py-4 backdrop-blur-md duration-300',
        className,
      )}
    >
      <div className="flex items-center justify-center gap-x-2">
        <p className="text-theme-gray-400">For</p>
        {labelData.map((item, index) => {
          return (
            <div className="flex items-center gap-x-2">
              <GlassItem value={item.label} key={'GlassItem' + item.label + index} />
              <span>{getSeparator(index, labelData.length)}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Glass
