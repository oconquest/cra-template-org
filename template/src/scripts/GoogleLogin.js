import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import DBRequest from "./DBRequest";
import DBSet from "./DBSet";
import RandomNumbers from "./RandomNumbers";

const GoogleLogin = (setMsgOpen, setMsgType, setUser, setMsg, navigate) => {

const auth = getAuth();
const provider = new GoogleAuthProvider();

signInWithPopup(auth, provider)
.then((result) => {

const number = RandomNumbers();

const info = {
uid: result.user.uid,
name: result.user.displayName,
photo: result.user.photoURL,
tag: `@${(result.user.displayName.split(" ")[0]).toLowerCase()}${number}`,
email: result.user.email,
}

DBRequest(`users/${result.user.uid}`).then((data) => {

if(data){

setUser(data);

}else{

DBSet(`users/${result.user.uid}`, info);
DBSet(`user-info/${result.user.uid}`, info);
setUser(info);

}

})

setMsgOpen(true);
setMsgType("success");
setMsg("Signed in successfully. Updating user data...");
setUser(result.user);

navigate("/");

}).catch((error) => {

const errorMessage = error.message;

setMsgOpen(true);
setMsgType("error");
setMsg(errorMessage);

});

}

export default GoogleLogin;