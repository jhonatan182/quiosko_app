import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler(req, res) {

  try {

    if(req.method === 'POST') {
        
        const orden = await prisma.orden.create({
            data: {
                nombre: req.body.nombre,
                fecha: req.body.fecha,
                total: req.body.total,
                pedido: req.body.pedido
            }
        })

        res.json(orden)
    }

  } catch (error) {
    console.log(error)
  }


}
