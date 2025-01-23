const ConoceDuricof = () => {
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="text-black flex flex-col md:flex-row justify-center items-center w-full p-5"> 
                {/* Columna de la izquierda */}
                <div className="flex-1 flex flex-col justify-center items-center text-center p-5">
                        {/* Imagen del gráfico debajo del texto */}
                        <img 
                            src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/6b4f5e38-5fb1-444f-89b7-d7da2ee3690f.gif?ClientID=sulu&Date=1737658382&Signature=b408f9b97f96a8dc0f3f8e3def72c91764f7dddb" 
                            alt="Gráfico de cmrbolsa" 
                            className="w-full max-w-xs md:max-w-xl mt-3 rounded-xl" 
                        />
                    </div>
                    {/* Columna de la derecha */}
                    <div className="flex-1 md:p-28 p-7">
                        <p className="text-xl md:text-4xl font-bold mb-5">Conoce a Miguel Angel Sosa (duricof)</p>
                        <p className="text-lg md:text-xl max-w-2xl mb-5">
                        Canario de Gran Canaria y se he formado bajo la tutela de Carlos Martín (cmrbolsa) desde hace más de 3 años, lleva desde el 2022 ayudando a trader iniciados y avanzados a entender el mercado a través del PEV.
                        </p>
                        <p className="text-lg md:text-xl max-w-2xl">
                            Ha conseguido consagrarse como un trade profesional de éxito gracias a su aplomo, paciencia, humildad y constancia frente a los mercados. Pilota, cada día, de lunes a jueves, la Sala de trading aplicando el método PEV.
                           
                        </p>
                    </div> 
                      
                    
                </div>            
            </div>
        </>
    );
}

export default ConoceDuricof;
