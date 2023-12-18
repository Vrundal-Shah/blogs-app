import {
  ReactNode,
  createContext,
  useContext,
  useReducer,
  useEffect,
} from 'react';

interface AuthState {
  userId: string | null;
}

// Define the action types
type AuthAction = { type: 'LOGIN'; payload: string } | { type: 'LOGOUT' };

const AuthContext = createContext<
  { state: AuthState; dispatch: React.Dispatch<AuthAction> } | undefined
>(undefined);

const reducer = (state: AuthState, action: AuthAction): AuthState => {
  console.log('Reducer - Current state:', state, 'Action:', action); // Log current state and action
  switch (action.type) {
    case 'LOGIN':
      return { userId: action.payload };
    case 'LOGOUT':
      localStorage.removeItem('userId');
      return { userId: null };
    default:
      return state;
  }
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    userId: null,
  });

  useEffect(() => {
    const userItem = localStorage.getItem('userId');
    const userId = userItem ? JSON.parse(userItem) : null;

    if (userId) {
      dispatch({ type: 'LOGIN', payload: userId.payload });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
