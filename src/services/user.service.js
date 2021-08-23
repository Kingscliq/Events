import client from "../api/api-client";
import authHeader from "../services/auth-header";

const config = {
  headers: authHeader(),
};
const getAllEvents = async () => {
  try {
    const res = await client.get("/users/events/all");
    return res.data;
  } catch (error) {
    console.log(error.reponse);
  }
};
const getUser = async () => {
  try {
    const res = await client.get("/users/auth", config);
    return res.data
  } catch (err) {
    console.log(err.response);
  }
};

const getUserEvents = async (id) => {
  try {
    const res = await client.get(`/users/events/${id}`, config);
    return res.data;
  } catch (error) {
    console.log(error.reponse);
  }
};

export {
  getAllEvents,
  getUserEvents,
  getUser,
};
