import { useState } from 'react'

import Button from '../components/Button'
import Toast from '../components/Toast'

export default function ModalPage() {
    const [toasts, setToasts] = useState([])
    const maxToasts = 3

    const openToast = () => {
        if (toasts.length < maxToasts) {
            // prevToasts is state before modification
            // ... is to create a new array using spread operator
            // template strings
            setToasts(prevToasts => [...prevToasts, `Toast ${prevToasts.length + 1}`])
        }
    }

    const closeToast = (index) => {
        // basically creates a new array with everything except for the curr index
        // prevToasts is state before modification
        setToasts(prevToasts => prevToasts.filter((_, i) => i !== index))
    }

    return (
        <div className="h-screen">
            {/* button to open toast */}
            <Button primary className="m-4" onClick={openToast}>
                Open Toast
            </Button>
            {/* div for all toasts */}
            <div className='absolute bottom-24 right-3 w-80 p-2'>
            {toasts.map((message, index) => (
                // each toast div
                <div className='mb-4' key={index}>
                    <Toast key={index} onClick={() => closeToast(index)}>
                        {message}
                        <br />
                        {message}
                        <br />
                        {message}
                        <br />
                    </Toast>
                </div>
            ))}
            </div>
        </div>
    )
}