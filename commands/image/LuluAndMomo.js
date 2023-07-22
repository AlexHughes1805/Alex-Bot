const {SlashCommandBuilder, EmbedBuilder} = require("discord.js");
const fs = require('fs');

const idx = (len) => Math.floor(Math.random() * (len));
const files = fs.readdirSync('images/LuluAndMomo');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('luluandmomo')
		.setDescription('Kypohs cats'),

	async execute(interaction)
    {
        const image = files[idx(files.length)];
		interaction.reply({files: [`images/LuluAndMomo/${image}`]})
		console.log(image);
	},
};