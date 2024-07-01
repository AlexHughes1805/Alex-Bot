const {SlashCommandBuilder} = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('Ping')
		.setDescription('A classic game'),
	async execute(interaction)
    {
		await interaction.reply("Pong!");
	},
};

// classic call and response
