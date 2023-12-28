import { Product } from "../models/product.models.js";
import { Inventory } from "../models/inventory.models.js";

export const getInventory = async (_, res) => {
  try {
    const products = await Product.findAll();
    await res.json(products);
  } catch (error) {
    return res.json({ message: error.message });
  }
};

export const getOutputInventory = async (_, res) => {
  try {
    const inventory = await Inventory.findAll({
      where: {
        movementType: "salida",
      },
      include: [
        {
          model: Product,
          attributes: ["name", "subsystem"],
        },
      ],
    });
    return res.json(inventory);
  } catch (error) {
    return res.json({ message: error.message });
  }
};
export const getEntryInventory = async (_, res) => {
  try {
    const inventory = await Inventory.findAll({
      where: {
        movementType: "entrada",
      },
      include: [
        {
          model: Product,
          attributes: ["name", "subsystem"],
        },
      ],
    });
    return res.json(inventory);
  } catch (error) {
    return res.json({ message: error.message });
  }
};
export const getRefundInventory = async (_, res) => {
  try {
    const inventory = await Inventory.findAll({
      where: {
        movementType: "reintegro",
      },
      include: [
        {
          model: Product,
          attributes: ["name", "subsystem"],
        },
      ],
    });
    return res.json(inventory);
  } catch (error) {
    return res.json({ message: error.message });
  }
};

export const createRecord = async (req, res) => {
  const {
    consecutive,
    amount,
    movementType,
    serialNumber,
    observation,
    date,
    productId,
  } = req.body;

  const getProductId = await Product.findByPk(productId);
  try {
    if (!getProductId) {
      return res
        .status(404)
        .json({ message: `Product  with ID: ${productId} not found` });
    }

    const newRecord = await Inventory.create({
      consecutive,
      amount,
      movementType,
      serialNumber,
      observation,
      date,
      productId,
    });
    let endAmount;
    console.log(
      "Before update: outputAmount =",
      getProductId.outputAmount,
      "endAmount =",
      getProductId.endAmount
    );
    if (movementType === "entrada") {
      console.log("Condition 1:", movementType === "entrada");
      getProductId.entryAmount += amount;
      endAmount = getProductId.endAmount + amount;
    } else if (movementType === "salida" || movementType === "reintegro") {
      console.log(
        "Condition 2:",
        movementType === "salida" || movementType === "reintegro"
      );
      if (getProductId.endAmount >= amount) {
        getProductId.outputAmount += amount; // Mover aquí
        endAmount = getProductId.endAmount - amount;
      } else {
        throw new Error("End amount cannot be zero or negative");
      }
    }

    // Actualizar el endAmount después de los bloques if/else
    getProductId.endAmount = endAmount;
    console.log(
      "After update: outputAmount =",
      getProductId.outputAmount,
      "endAmount =",
      getProductId.endAmount
    );
    // Guardar el modelo Product
    await getProductId.save();

    return res.json(newRecord);
  } catch (error) {
    console.error("Error:", error.message);
    return res.json({ message: error.message });
  }
};

//one route getId
export const getInventoryId = async (req, res) => {
  const { id } = req.params;
  try {
    const idInventory = await Inventory.findByPk(id);
    if (!idInventory) {
      return res.status(404).json({ message: `ID: ${id} Not Found` });
    }
    return res.json(idInventory);
  } catch (error) {
    return res.json({ message: error.message });
  }
};
//update

export const updateInventory = async (req, res) => {
  const { id } = req.params;
  const { consecutive, amount, movementType, observation, serialNumber, date } =
    req.body;

  try {
    const updateInventory = await Inventory.findByPk(id);
    if (updateInventory) {
      (updateInventory.consecutive = consecutive),
        (updateInventory.amount = amount),
        (updateInventory.movementType = movementType),
        (updateInventory.observation = observation),
        (updateInventory.serialNumber = serialNumber),
        (updateInventory.date = date);
    }

    await updateInventory.save();

    return res.json(updateInventory);
  } catch (error) {
    console.error("Error:", error.message);
    return res.json({ message: error.message });
  }
};

export const deleteInventory = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteId = await Inventory.findByPk(id);
    if (!deleteId) {
      return res.status(404).json({ message: `ID: ${id} Not Found` });
    }
    deleteId.destroy();
    return res.json(`deleted ID: ${id}`);
  } catch (error) {
    return res.json({ message: error.message });
  }
};
