import { useEffect, useState, createContext } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

//este toast es el que llama al Toast
import { toast } from 'react-toastify';

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
    // state
    const [categorias, setCategorias] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({});
    const [cargando, setCargando] = useState(false);
    const [producto, setProducto] = useState({});
    const [modal, setModal] = useState(false);
    const [pedido, setPedido] = useState([]);
    const [nombre, setNombre] = useState('');
    const [total, setTotal] = useState(0);

    //router

    const router = useRouter();

    const hanldeClickCategoria = (categoria) => {
        setCategoriaActual(categoria);
        router.push('/');
    };

    const hanldeSetProducto = (producto) => {
        setProducto(producto);
    };

    const handelChangeModal = () => {
        setModal(!modal);
    };

    const handleCambiarCantidades = (id) => {
        setModal(!modal);

        const cantidadesActualizadas = pedido.filter(
            (producto) => producto.id === id
        );

        setProducto(cantidadesActualizadas[0]);
    };

    const handleEliminarPedido = (id) => {
        const pedidoActualizado = pedido.filter(
            (producto) => producto.id !== id
        );

        setPedido(pedidoActualizado);
    };

    const handleAgregarPedido = ({ categoriaId, ...producto }) => {
        //sacando categoriaId e imagen del objeto

        if (pedido.some((bebida) => bebida.id === producto.id)) {
            const pedidoActualizado = pedido.map((bebidaState) => {
                if (bebidaState.id === producto.id) {
                    bebidaState.cantidad = producto.cantidad;
                }

                return bebidaState;
            });

            setPedido(pedidoActualizado);
            toast.success('Guardado Correctamente');
        } else {
            setPedido([...pedido, producto]);
            toast.success('Agregado el pedido');
        }

        setModal(false);
    };

    const colocarOrden = async (e) => {
        e.preventDefault();

        try {
            await axios.post('/api/ordenes', {
                nombre,
                fecha: Date.now().toString(),
                total,
                pedido,
            });

            //resetear la app
            setCategoriaActual(categorias[0]);
            setPedido([]);
            setNombre('');
            setTotal(0);

            toast.success('Pedido realizado correctamente');

            setTimeout(() => {
                router.push('/');
            }, 3000);
        } catch (error) {
            console.log(error);
        }
    };

    //effect
    useEffect(() => {
        const consultarCategorias = async () => {
            setCargando(true);

            try {
                const url = '/api/categorias';

                const { data } = await axios(url);

                setCategorias(data);
            } catch (error) {
                console.log(error);
            } finally {
                setCargando(false);
            }
        };

        consultarCategorias();
    }, []);

    useEffect(() => {
        setCategoriaActual(categorias[0]);
    }, [categorias]);

    useEffect(() => {
        const nuevoTotal = pedido.reduce(
            (total, producto) => total + producto.precio * producto.cantidad,
            0
        );
        setTotal(nuevoTotal);
    }, [pedido]);

    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                hanldeClickCategoria,
                categoriaActual,
                cargando,
                hanldeSetProducto,
                handelChangeModal,
                modal,
                producto,
                handleAgregarPedido,
                pedido,
                handleCambiarCantidades,
                handleEliminarPedido,
                nombre,
                setNombre,
                colocarOrden,
                total,
            }}
        >
            {children}
        </QuioscoContext.Provider>
    );
};

export { QuioscoProvider };

export default QuioscoContext;
