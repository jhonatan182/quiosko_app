import Image from 'next/image'
import useQuiosco from '../hooks/useQuiosco'
import { formatearDinero } from '../helpers'

const Producto = ({producto}) => {

    // context
    const { hanldeSetProducto, handelChangeModal} = useQuiosco();

    // props
    const { id , nombre , precio , imagen } = producto

    return (
        <div className="border p-3">
            <Image 
                src={`/assets/img/${imagen}.jpg`}
                alt={`Imagen de  ${nombre}`}
                width={400}
                height={500}
            />

            <div className='p-5'>
                <h3 className='text-2xl font-bold'>{nombre}</h3>
                <p className='mt-5 font-black text-4xl text-amber-500'>{formatearDinero(precio)}</p>

                <button
                    onClick={ () => {
                        hanldeSetProducto(producto)
                        handelChangeModal()
                    } }
                    type="button" 
                    className="bg-indigo-600 hover:bg-indigo-800 w-full text-2xl text-center p-2 rounded mt-5 text-white font-bold uppercase">
                    Agregar
                </button>
            </div>
        </div>
    )
}

export default Producto;