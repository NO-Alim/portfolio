import React,{useEffect,useRef} from 'react'

const Button = () => {
    const buttonref = useRef(null)
    useEffect(() => {
        const wind = () => {
            const pageOffset = window.pageYOffset * 2;
            const ViewPortHeight = window.innerHeight;
            if (pageOffset > ViewPortHeight) {
                buttonref.current.style.width = '50px'
                buttonref.current.style.height = '50px'
                buttonref.current.style.top = '79%'
                buttonref.current.style.background = 'rgb(255, 224, 240)'
                buttonref.current.style.borderRadius = '50%'
                buttonref.current.innerHTML = 'chat'
                buttonref.current.style.fontSize = '16px'
            } else {
                buttonref.current.style.width = '100px'
                buttonref.current.style.height = '50px'
                //10%
                buttonref.current.style.top = '20%';
                buttonref.current.style.borderRadius = '5px'
                buttonref.current.style.background = 'transparent'
                buttonref.current.innerHTML = `Let's talk`
                buttonref.current.style.fontSize = '18px'
            }
        };
        //     const paraX = pararef.current.getBoundingClientRect();
        //     // console.log(paraX.top);
        window.addEventListener('scroll', wind)
        return () => {
            window.removeEventListener('scroll', wind)
        }
    })
    return (
        <div className="fixed-button">
            Let's Talk
        </div>
    )
}

export default Button
