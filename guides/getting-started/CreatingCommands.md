# Creating commands

## Setting up the client

Before creating the command, you should specify a prefix for your commands.
For that, you will need to add a property in your client's options, in `src/main.js`:

```javascript
const client = new SapphireClient({
	defaultPrefix: '!'
});
```

From now on, when someone sends a message that start with `!`, Sapphire will check if a matching command exists.
If you know how to use regexes, you can also add a regex prefix by adding the `regexPrefix` property.

## Setting up the file structure

You should now create a `commands` folder in the `src` folder. Sapphire will automatically load commands that are in
this specific folder, so be careful to copy its name properly.
You can organize your different commands in subfolders corresponding to the category. We will create one called
"General" containing various important commands for our bot.
Your file structure should look like this:

```
node_modules/
src/
  ├── commands/
  │   └── General/
  └── main.js
package-lock.json
package.json
```

### Ping command

To create a command you simply need to create a file with the name of the command, in our case `ping.js`, in the
category you like, such as `./src/commands/General/`.

Each command is a class that extends from the base `Command` class from Sapphire. You need to extend it, and add a
`messageRun` method that will get called when your command is triggered.
Don't forget to export the class!

```javascript
const { Command } = require('@sapphire/framework');

module.exports = class extends Command {
	constructor(context) {
		super(context, {
			name: 'ping',
			description: 'Send back the ping of the bot'
		});
	}

	async messageRun(message) {
		const msg = await message.channel.send('Ping?');
		return msg.edit(
			`Pong! Bot Latency ${Math.round(this.container.client.ws.ping)}ms. API Latency ${msg.createdTimestamp - message.createdTimestamp}ms.`
		);
	}
};
```

The first parameter of `super` is the context, that is given in the constructor. You can then specify a
{@link CommandOptions} object, containing properties such as the command's name or the
command's description.

The `messageRun` method is the method that gets called when the command is ran. It takes the message as the first argument.

If everything was done correctly, you should now be able to launch your bot without errors and execute the `!ping` command.
