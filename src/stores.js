import { writable } from "svelte/store";
import Pocketbase from "pocketbase";

export const pb = new Pocketbase("https://tickets.elegantwebcreations.com");
export const user = writable(pb.authStore.model);

pb.authStore.onChange(auth => user.set(pb.authStore.model));
