import { ref, set } from "firebase/database";
import { database } from "./InitFirebase";

const DBSet = async (path, data) => {

  try {

    await set(ref(database, path), data);
    return true;

  } catch (error) {

    console.error(error);
    return false;

  }
};

export default DBSet;