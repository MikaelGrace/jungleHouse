import '../styles/Banner.css'

function Banner({children}) {
    /*const title = 'Jungle House'
     const currentMonth = new Date().getMonth();
    const isSpring = currentMonth >= 2 && currentMonth <= 5
    const recommendation = isSpring ? (
    <div>It's spring, time to repot🌱</div>) : (
    <div>It's not time to repot</div>) */
    return (
        <div className='jh-banner'>
            {children}
        </div>
        
    )
}

export default Banner