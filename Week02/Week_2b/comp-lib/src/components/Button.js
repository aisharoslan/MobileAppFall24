import cx from 'classnames'

export default function Button(props) {
    // can only pick one color at a time (it'd choose last color)- throw an error/warning if > 1
    // prop-types is now in Flow or TypeScript - concept of type checking bc JS too flexible
    // don't use commas to separate classes within className
    const {
        children, 
        primary, 
        secondary, 
        success, 
        warning, 
        danger, 
        outline, 
        rounded, 
        ...otherProps // unpack the rest of the props that are not from before, e.g. onClick etc - unpack any key values left
    } = props

    // general ones used for all (by default want it all)
    // apply conditional classes
    // rhs = condition to be true
    // key is classnames
    // wrap entire thing in twmerge if x work
    // so otherProps.className will come in if true, so that it's included tgt w styling - e.g. if wanna overwrite styling with ur own - like className css styling
    const classes = cx(
        otherProps.className,
        'flex items-center px-8 py-3 border', 
        {
            'bg-blue-500 border-blue-500 text-white': primary,
            'bg-gray-900 border-gray-900 text-white': secondary,
            'bg-green-500 border-green-500 text-white': success,
            'bg-orange-400 border-orange-500 text-white': warning,
            'bg-red-600 border-red-700 text-white': danger,
            // rounded - 50% radius
            'rounded-full': rounded,
            // outline
            'bg-white': outline,
            // outline variation text color
            'text-blue-500': outline && primary,
            'text-gray-900': outline && secondary,
            'text-green-500': outline && success,
            'text-orange-400': outline && warning,
            'text-red-600': outline && danger,
        }
    )

    // tailwind just removes everything on browser default - so build from scratch

    return (
        <button {...otherProps} className={classes}>
            {children}
        </button>
    )
}

Button.propTypes = {
    // in work need to do this but we know it'll be a bool
    // children: PropTypes.node,
    // primary: PropTypes.bool,
    // secondary: PropTypes.bool,
    // success: PropTypes.bool,
    // warning: PropTypes.bool,
    // danger: PropTypes.bool,
    // outline: PropTypes.bool,
    // rounded: PropTypes.bool,

    // custom error
    checkVariationValue: ({primary, secondary, success, warning, danger}) => {
        // Number(primary = it'll come in as not a number, use !! to make it a 1 or 0)
        const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger)
        
        if (count > 1) {
            // to get errors on console
            return new Error(
                'Only one of primary, secondary, success, warning, danger can be true'
            )
        }
    }
}

// can add .isRequired if must use prop