import { createClient } from "@sanity/client";

const client = createClient({
  projectId: import.meta.env.VITE_REACT_APP_PROJECTID,
  dataset: "production",
  apiVersion: "2024-04-28",
  // unless you have caching for your front end, `useCdn` should be `true` for most production environments
  useCdn: true, 
})

export default client;