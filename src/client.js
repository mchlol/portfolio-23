import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "52duxrdl",
  dataset: "production",
  apiVersion: "2024-04-28",
  // unless you have caching for your front end, `useCdn` should be `true` for most production environments
  useCdn: false, 
})

export default client;