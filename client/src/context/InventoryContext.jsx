import { createContext, useContext, useState } from "react";
import {
  getInventoryEntryRequest,
  getInventoryOutputRequest,
  getInventoryRequest,
  getInventoryRefoundRequest,
  createInventoryRequest,
  deleteInventoryRequest,
  updateInventoryRequest,
  getInventoryIdRequest
} from "../api/inventory.js";
const InventoryContext = createContext();

export const useInventory = () => {
  const context = useContext(InventoryContext);
  if (!context)
    throw new Error("useInventory must be used within an InventoryProvider");

  return context;
};

// eslint-disable-next-line react/prop-types
export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState([]);
  const [entry, setEntry] = useState([]);
  const [output, setOutput] = useState([]);
  const [refound, setRefound] = useState([]);
  const [inventoryError, setInventoryError] = useState([]);

  //Inventory
  const getInventoryId=async(id)=>{
    try {
    const res =await  getInventoryIdRequest(id);
    return res.data
    } catch (error) {
      setInventoryError(error.response.data)
    }
  }

  const getInventory = async (type) => {
    try {
      if (type === "general") {
        const res = await getInventoryRequest();
        console.log(res);
        setInventory(res);
      }
      if (type === "entry") {
        const res = await getInventoryEntryRequest();
        setEntry(res);
      }
      if (type === "output") {
        const res = await getInventoryOutputRequest();
        setOutput(res);
      }
      if (type === "refound") {
        const res = await getInventoryRefoundRequest();
        setRefound(res);
      }
    } catch (error) {
      setInventoryError([error.response.data.message]);
    }
  };

  const createInventory = async (inventory) => {
    try {
      const res = await createInventoryRequest(inventory);
      console.log(res);
    } catch (error) {
      setInventoryError([error.response.data.message]);
    }
  };
  const updateInventory = async (id, inventory) => {
    try {
      const res = await updateInventoryRequest(id, inventory);
      console.log(res);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        setInventoryError(error.response.data);
      }

      setInventoryError([error.response.data.message]);
    }
  };

  const deleteInventory = async (id) => {
    try {
      const res = await deleteInventoryRequest(id);
      if (res == 204)
        return setInventory(inventory.filter((inv) => inv.id !== id));
    } catch (error) {
      setInventoryError([error.response.data.message]);
    }
  };

  return (
    <InventoryContext.Provider
      value={{
        getInventory,
        entry,
        inventory,
        output,
        refound,
        createInventory,
        updateInventory,
        deleteInventory,
        inventoryError,
        getInventoryId
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};
