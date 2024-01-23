import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";


(async () => {
    main();
})();

async function main() {
    const {b: base, l:limit, s:showTable} = yarg;
    ServerApp.run({base, limit, showTable});
}