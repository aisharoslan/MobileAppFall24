import { FaTimes } from 'react-icons/fa';

export default function Toast(props) {
    const { onClick, children } = props
    return (
        <>
            <div className="flex justify-between items-center bg-blue-200 border-b-2 border-stone-50 pb-4 px-8 pt-4 font-bold">
                Toast Component 
                <span onClick={onClick}><FaTimes className="text-xl hover:text-white" /></span>
            </div>
            <div className="flex justify-start items-center bg-blue-400 pt-4 px-2 pb-6 pl-8">{children}</div>
        </>
    )
}