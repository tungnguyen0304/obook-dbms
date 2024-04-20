import IUser from '@/interfaces/user-interface';
import { create } from 'zustand'


type Store = {
  user: IUser ;
  setUser: (newUser:IUser) => void
}

const initialState: IUser= {
    user_id: '',
    email: '',
    firstName: '',
    lastName: '',
    avatar: '',
    age: 18,
    dob: '',
    sex: 'male' ,
    accessToken: ''
}

const useUser = create<Store>()((set) => ({
  user: initialState,
  setUser: (newUser: IUser) => set({user: newUser})
}))


export default useUser;


// const useUser = () => {
//     const user = useStore().user;
//     const setUser = useStore().setUser;
//     return { user, setUser };
//   };
