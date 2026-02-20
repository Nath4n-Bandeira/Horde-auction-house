import { PrismaClient } from '@prisma/client'
import { Router } from 'express'
import { z } from 'zod'
import multer from 'multer'
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import { v2 as cloudinary } from 'cloudinary'

// Configuration
cloudinary.config({ 
  cloud_name: 'dmxpd17eh', 
  api_key: '223939621497947', 
  api_secret: '_7K5oKKtDfTGhTixH8IMVB1LPoI' // Click 'View API Keys' above to copy your API secret
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    return {
      folder: 'revenda_manha',
      allowed_formats: ['jpg', 'jpeg', 'png'],
      public_id: `${Date.now()}-${file.originalname.split(".")[0]}`,
    }  
  },
})

const upload = multer({ storage })

const prisma = new PrismaClient()

const router = Router()

const fotoSchema = z.object({
  descricao: z.string().min(5,
    { message: "Descrição da Foto deve possuir, no mínimo, 5 caracteres" }),
  artefatoId: z.coerce.number(),
})

router.get("/", async (req, res) => {
  try {
    const fotos = await prisma.foto.findMany({
      include: {
        artefato: true,
      }
    })
    res.status(200).json(fotos)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

router.post("/", upload.single('imagem'), async (req, res) => {

  const valida = fotoSchema.safeParse(req.body)
  if (!valida.success) {
    res.status(400).json({ erro: valida.error })
    return
  }

  if (!req.file || !req.file.path) {
    res.status(400).json(
      {erro: "Envio da imagem é obrigatório"})
    return
  }

  const { descricao, artefatoId } = valida.data
  const urlFoto = req.file.path

  try {
    const foto = await prisma.foto.create({
      data: { descricao, artefatoId, url: urlFoto }
    })
    res.status(201).json(foto)
  } catch (error) {
    res.status(400).json({ error })
  }
})


export default router
