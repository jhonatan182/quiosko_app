import Head from "next/head";
import Modal from 'react-modal'
import { ToastContainer} from 'react-toastify';
import Pasos from "../components/Pasos";
import Sidebar from "../components/Sidebar";
import useQuiosco from "../hooks/useQuiosco";
import ModalProducto from "../components/ModalProducto";

import 'react-toastify/dist/ReactToastify.css';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

Modal.setAppElement('#__next');

const Layout = ({children , pagina}) => {

    // context
    const {modal} = useQuiosco()


    return (
        <>
            <Head>
                <title>Café - {pagina}</title>
                <meta name="description" content="Quisco Cafeteria" />
            </Head>

            <div className="md:flex">
                <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
                    <Sidebar />
                </aside>

                <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                    <div className="p-10">
                        <Pasos />
                        {children}    
                    </div>

    
                </main>
            </div>

            {modal && (
                <Modal isOpen={modal} style={customStyles}
                >
                    <ModalProducto />
                </Modal>
            
            )}

            {/* este  sirve para indicar donde se va mostrar el toast */}
            <ToastContainer />

        </>    
    )
}

export default Layout;