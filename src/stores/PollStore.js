import { writable } from "svelte/store";

export const polls = writable([]);
export const searchTerm = writable('');
let loaded = false;

// Fetch fake polls
export const fetchPolls = async () => {
	if (loaded) return;
  const url = "https://polls.apiblueprint.org/questions";
  const res = await fetch(url);
  const data = await res.json();
  const loadedPolls = data.map((data, index) => {
    return {
      ...data,
      id: index + 1,
    }
  })
  polls.set(loadedPolls);
	loaded = true;
};
