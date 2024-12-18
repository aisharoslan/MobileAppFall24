import {useState} from 'react'
import cx from 'classnames'
import {GoChevronDown} from 'react-icons/go'
const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const {options, value, onChange} = props

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    setIsOpen(false)
    onChange(option)
  }

  const renderedOptions = options.map((option) => {
    return (
      <div
        onClick={() => handleOptionClick(option)}
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        key={option.value}
      >
        {option.label}
      </div>
    )
  })

  const content = value ? value.label : 'Select...'

  return (
    <div className="w-44 relative">
      <Panel
        onClick={handleClick}
        className="flex justify-between items-center cursor-pointer h-11 border-teal-500 border-[1.5px]"
      >
        {content}
        <GoChevronDown className="text-xl" />
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full">{renderedOptions}</Panel>
      )}
    </div>
  )
}

const Panel = ({children, className, ...otherProps}) => {
  return (
    <div
      {...otherProps}
      className={cx(className, 'border rounded p-3 bg-white w-full')}
    >
      {children}
    </div>
  )
}

export {Panel}
export default Dropdown
