
import { createContext,useState ,useEffect, use} from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebaseutils";


export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
      const unsubscribe = onAuthStateChangedListener((user) => {
        if(user){
          createUserDocumentFromAuth(user);
        }
        setCurrentUser(user);
      });
      return unsubscribe;
    }, []);



    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

