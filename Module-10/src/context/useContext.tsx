import React, {
  useState,
  Dispatch,
  createContext,
  SetStateAction,
} from "react";

export type TypeOfContext = {
  id: string | number | null;
  setId: Dispatch<SetStateAction<string | number | null>>;
} | null;

export const ProductContext = createContext<TypeOfContext>(null);

interface PropsChildren {
  children: React.ReactNode;
}

const ProductContextProvider = ({ children }: PropsChildren) => {
  const [id, setId] = useState<string | number | null>(null);
  return (
    <ProductContext.Provider value={{ id, setId }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
