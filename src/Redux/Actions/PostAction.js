import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { firestore, storage } from "../../Firebase/firebase";

export const postAction = async (
  name,
  profilepic,
  postDescription,
  postPic
) => {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const space = " ";
  const dateandtime = date + space + time;

  const imageRef = ref(
    storage,
    `uploads/images/${Math.floor(Math.random() * 100000)}-${postPic.name}`
  );
  const uploadImage = await uploadBytes(imageRef, postPic);
  return await addDoc(collection(firestore, "posts"), {
    name: name,
    pic: profilepic,
    descripton: postDescription,
    image: uploadImage,
    timestamp: dateandtime,
    gettingdata: true,
  });
};
