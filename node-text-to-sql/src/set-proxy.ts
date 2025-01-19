import { ProxyAgent, setGlobalDispatcher } from "undici";
import { env } from "./env";

if (env.PROXY) {
  const token = `Basic ${btoa(`${env.USERNAME}:${env.PASSWORD}`)}`;

  const proxyAgent = new ProxyAgent({
    uri: env.PROXY,
    token,
    requestTls: { rejectUnauthorized: false },
  });

  setGlobalDispatcher(proxyAgent);
}
