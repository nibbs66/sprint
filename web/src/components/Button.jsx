import React from 'react'

import { cva, VariantProps } from 'class-variance-authority'
import classNames from 'classnames'
const button = cva('rounded-md relative', {
  variants: {
    variant: {
      default: [
        'bg-white',
        ' text-[#202223]',
        "shadow-['0 0.0625rem 0 rgba(0,0,0,.05)]",
        'border',
        'border-slate-400',
        'hover:bg-slate-100',
      ],
      primary:
        'bg-blue-500 text-white hover:bg-blue-500/80 hover:text-white transition duration-700 hover:duration-500',
      primaryOutline:
        'bg-blue-500 text-indigo-600  hover:bg-indigo-500/80 hover:text-white transition duration-700 hover:duration-500',
      destructive:
        'bg-[#d82c0d] hover:bg-[#d82c0d]/80 text-white transition duration-700 hover:duration-500',
      destructiveOutline:
        'bg-[#d82c0d] hover:bg-[#d82c0d]/80 text-red-500 hover:text-white transition duration-700 hover:duration-500',
      coverButton:
        'bg-white/80 hover:bg-[#d82c0d]/80 border border-[#d82c0d] text-red-500 hover:text-white transition duration-700 hover:duration-500',
      monochrome:
        'bg-white text-text border border-gray-400 transition duration-700 hover:duration-500',
    },
    modifier: {
      outline:
        'bg-transparent border border-current shadow-[0_0_0_1px_currentColor]',
      plain: 'shadow-none bg-transparent border-none px-2 py-1 text-sm',
    },
    size: {
      slim: 'text-sm',
      medium: 'text-sm',
      large: 'text-base',
      xLarge: 'text-2xl',
    },
    fullWidth: {
      true: 'w-full',
    },
    disabled: {
      true: 'bg-[#fafbfb] text-[#8c9196] hover:text-[#8c9196] hover:bg-[#fafbfb] cursor-not-allowed',
    },
  },
  compoundVariants: [
    {
      modifier: 'outline',
      variant: 'destructive',
      className: 'text-destructive',
    },
    {
      modifier: 'outline',
      variant: 'primary',
      className: 'text-primary',
    },
    {
      modifier: 'plain',
      variant: 'destructive',
      className: 'text-destructive',
    },
    {
      modifier: 'plain',
      variant: 'primary',
      className: 'text-primary',
    },
    {
      modifier: undefined,
      size: 'slim',
      className: 'px-3 py-[3px]',
    },
    {
      modifier: 'outline',
      size: 'slim',
      className: 'px-3 py-[3px]',
    },
    {
      modifier: undefined,
      size: 'medium',
      className: 'px-4 py-2 ',
    },
    {
      modifier: 'outline',
      size: 'medium',
      className: 'px-4 py-2',
    },
    {
      modifier: undefined,
      size: 'large',
      className: 'px-6 py-3',
    },
    {
      modifier: 'outline',
      size: 'large',
      className: 'px-6 py-3',
    },
    {
      modifier: undefined,
      size: 'xLarge',
      className: 'px-10 py-6',
    },
    {
      modifier: 'outline',
      size: 'xLarge',
      className: 'px-10 py-6',
    },
    {
      disabled: true,
      variant: 'default',
      className: 'border-borderDisabled',
    },
  ],
  defaultVariants: {
    variant: 'default',
    size: 'medium',
  },
})

const Button = ({
  children,
  size,
  variant,
  fullWidth,
  disabled,
  modifier,
  loading,
  onClick,
  caps,
}) => {
  return (
    <button
      onClick={onClick}
      type={`submit`}
      className={button({ variant, modifier, size, fullWidth, disabled })}
    >
      <span
        className={classNames(
          'leading-[1.25rem] ',
          loading && 'text-transparent',
          caps && 'uppercase'
        )}
      >
        {children}
      </span>
      {loading && (
        <span className="absolute left-1/2 top-1/2 block h-4 w-4 -translate-x-1/2 -translate-y-1/2">
          <svg
            className="animate-spin"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-current"
              d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"
            ></path>
          </svg>
          <span className="sr-only">Loading</span>
        </span>
      )}
    </button>
  )
}

export default Button
