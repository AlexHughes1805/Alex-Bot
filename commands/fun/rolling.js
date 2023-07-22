const {SlashCommandBuilder} = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rolling')
		.setDescription('just click the link'),
	async execute(interaction)
    {
		await interaction.reply("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
	},
};