const {SlashCommandBuilder} = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fuck')
		.setDescription('Teaches you a lesson'),
	async execute(interaction)
    {
		await interaction.reply("Bruh, swearing is bad. Don't do it again.");
	},
};