import Image from 'next/image';
import useQuiosco from '../hooks/useQuiosco';

const Categoria = ({categoria}) => {

    //context provider
    const { hanldeClickCategoria , categoriaActual  } =  useQuiosco();

    const {id , nombre , icono} = categoria;

  return (  
    <div
        onClick={ () => hanldeClickCategoria(categoria) }
        className={` ${categoriaActual?.id === id ?  'bg-amber-400' : ''}  flex items-center gap-4 w-full border p-5 hover:bg-amber-400 hover:cursor-pointer`}
    >
        <Image 
            alt='Imagen Icono'
            width={70}
            height={70}
            src={`/assets/img/icono_${icono}.svg`}
            className={'mr-5'}
        />

    <button type='button' className='text-2xl font-bold'> {nombre} </button>

    </div>

  ) 
}

export default Categoria;