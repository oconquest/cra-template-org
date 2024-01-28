import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../scripts/InitFirebase";
import DBRequest from "../scripts/DBRequest";

const HandleAuth = (useEffect, navigate, user, setUser) => {

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (userFB) => {
      if (userFB) {
        if(user === null){
            DBRequest(`users/${user.uid}`).then((data) => {
                if(data){
                    setUser(data);
                }else{
                    console.log("User Data Not Found");
                }
            })
        }
      } else {
        navigate("/login");
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [navigate, setUser]);


};

export default HandleAuth;
