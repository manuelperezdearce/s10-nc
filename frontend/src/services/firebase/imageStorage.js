import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from './config'

// folders:
// meals o restaurants
export const uploadImageAndGetLink = async (filename, folder, img) => {
  try {
    const imgRef = ref(storage, `${folder}/${filename}`)
    await uploadBytes(imgRef, img)
    const link = await getDownloadURL(imgRef)
    return link
  } catch (err) {
    console.log(err)
  }
}

export const deleteImage = async (folder, filename) => {
  try {
    const imgRef = ref(storage, `${folder}/${filename}`)
    await deleteObject(imgRef)
    console.log('Archivo eliminado')
  } catch (err) {
    console.log(err)
  }
}
