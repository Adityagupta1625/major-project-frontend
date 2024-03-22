import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import app from './firebase';

const storage = getStorage(app);

export const fileUpload = async (file: File, folderName: string) => {
  const storageRef = ref(storage, `${folderName}/${file.name}`);

  try {
    await uploadBytes(storageRef, file);
    console.log('File uploaded successfully!');
    const publicImageUrl = await getDownloadURL(storageRef);
    return publicImageUrl;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw new Error('Failed to upload file');
  }
};
