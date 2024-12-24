import httpJson from "./http-client-Json";
import tickets from "./tickets";

export default {
    tickets: tickets(httpJson),
}