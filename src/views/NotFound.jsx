import imgError from "../assets/img/animado.gif";

const NotFound = () => {
    return (
        <>
            <h2 className='error-404'>404 Not Found</h2>
            <h5>La ruta a la que intentas acceder no existe</h5>
            <img src={imgError} alt='Not Found' className='img-error' />
        </>
    );
};

export default NotFound;
