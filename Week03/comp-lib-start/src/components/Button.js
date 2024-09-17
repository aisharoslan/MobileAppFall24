import cx from 'classnames'
import { twMerge } from 'tailwind-merge'

export default function Button(props) {
  const {
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...otherProps // all the things non-boolean, e.g. mouseover, onclick etc - known as SPREADING
  } = props

  // need twMerge - helper library to allow us to do stuff - to ensure prioritization - don't know which classname comes first
  const classes = twMerge(cx(
    otherProps.className,
    'flex items-center px-8 py-3 border',
    {
      'bg-blue-500 border-blue-500 text-white': primary,
      'bg-gray-900 border-gray-900 text-white': secondary,
      'bg-green-500 border-green-500 text-white': success,
      'bg-orange-400 border-orange-500 text-white': warning,
      'bg-red-600 border-red-700 text-white': danger,
      // rounded
      'rounded-full': rounded,
      // outline
      'bg-white': outline,
      // outline variation text color
      'text-blue-500': outline && primary,
      'text-gray-900': outline && secondary,
      'text-green-500': outline && success,
      'text-orange-400': outline && danger,
      'text-red-600': outline && warning,
    }
  ))

  return (
    // taking an object and unpacking it - spreading it
    <button {...otherProps} className={classes}>
      {children}
    </button>
  )
}

Button.propTypes = {
  checkVariationValue: ({primary, secondary, success, warning, danger}) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger)

    if (count > 1) {
      return new Error(
        'Only one of primary, secondary, success, warning, danger can be true!'
      )
    }
  },
}
