import axios from "axios";
import { InventoryItem } from "../interfaces/InventoryItem";

export async function fetchItems(id: number): Promise<InventoryItem> {
  const url = `/api/inventory/products/${id}/`;
  const response = await axios.get(url);
  const data: InventoryItem = response.data;
  return data;
}

export async function fetchAllItems(page:number) {
  const response = await axios.get("/api/inventory/products/", {
    params: {
      page: page,
    },
  });
  const data = response.data;
  return data;
}
