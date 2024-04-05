import { yarg as argv } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";

(async() => {
    await main();
}) ();

async function main() {
    const { l:limit, s:showTable, b:base, n: fileName, d: fileDestination } = argv;
    ServerApp.run({base, limit, showTable, fileName, fileDestination});
}


