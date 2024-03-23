import chalk from "chalk";
import { program } from "commander";
import { User } from "@workspaces-example/types";

program.name("workspace-web-example").description("Web").version("0.0.1");

program.command("hello").argument("<name>", "name").action((name: string) => {
    const user: User = {
        name: name
    };
    console.log(chalk.green(`Hello ${user.name}!`));
});

program.parse(process.argv);
