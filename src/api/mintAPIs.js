import { axiosClient  } from "./apiClient";

export const getAllMints = async () => {
  return await axiosClient.get("/mints");
};

export const createMint = async (mint) => {
  console.log("This is mint created", mint);
  return await axiosClient.post("/mints", mint);
};

export const getMintDetails = async (uuid) => {
  console.log("This is mint details", uuid)
  return await axiosClient.get("/mints?uuid=" + uuid);
};
