import React,{useState,useEffect, useRef} from 'react'

const Messenger = () => {
    const buttonref = useRef(null);
    const [circle, setCircle] = useState(false);
    useEffect(() => {
        const wind = () => {
            const pageOffset = window.pageYOffset * 2;
            const ViewPortHeight = window.innerHeight;
            if (pageOffset > ViewPortHeight) {
                buttonref.current.style.top = '80vh'
                setCircle(true);
            } else {
                buttonref.current.style.top = '15vh';
                setCircle(false)
            }
        };
        window.addEventListener('scroll', wind)
        return () => {
            window.removeEventListener('scroll', wind)
        }
    })

    return (
        <div className="messenger" ref={buttonref}>
            <button className={`chat ${circle ? 'active' : ''}`}>{circle ? `chat` : `lets's talk`}</button>
        </div>
    )
}

export default Messenger
