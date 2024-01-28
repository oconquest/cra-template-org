import { ref, get } from "firebase/database";
import { database } from "./InitFirebase";

const DBRequest = async (path) => {

  try {

    const snapshot = await get(ref(database, path));
    return snapshot.val();

  } catch (error) {

    console.error(error);
    return null;

  }

};

export default DBRequest;