const Home = () => {
    return (
        <div className='hero'>
            <svg viewBox='0 0 1200 300'>
                <symbol id='s-text'>
                    <text text-anchor='middle' x='50%' y='100%'>
                        ¡Bienvenido!
                    </text>
                </symbol>

                <g className='g-ants'>
                    <use xlinkHref='#s-text' className='text-copy'></use>
                    <use xlinkHref='#s-text' className='text-copy'></use>
                    <use xlinkHref='#s-text' className='text-copy'></use>
                    <use xlinkHref='#s-text' className='text-copy'></use>
                    <use xlinkHref='#s-text' className='text-copy'></use>
                </g>
            </svg>
        </div>
    );
};

export default Home;
