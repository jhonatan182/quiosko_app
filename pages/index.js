import Layout from '../layout/Layout';
import useQuiosco from '../hooks/useQuiosco';
import Producto from '../components/Producto';
import Spinner from '../components/Spinner';

export default function Home() {
  const { categoriaActual, cargando } = useQuiosco();

  return (
    <Layout
      pagina={`Menú ${categoriaActual?.nombre ? categoriaActual.nombre : ''}`}
    >
      <h1 className="text-4xl font-bold">{categoriaActual?.nombre}</h1>
      <p className="text-2xl my-10">
        Elige y personaliza tu pedido a continuacion
      </p>

      {cargando ? (
        <Spinner />
      ) : (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {categoriaActual?.Producto?.map((producto) => (
            <Producto key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </Layout>
  );
}
