import AdminLayout from '../layout/AdminLayout';

const Admin = () => {
    return (
        <AdminLayout pagina={'Admin'}>
            <h1 className="text-4xl font-black">Panel de administracion</h1>
            <p className="text-2xl my-10">Revisa tu pedido</p>
        </AdminLayout>
    );
};

export default Admin;
