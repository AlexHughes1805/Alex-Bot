const {SlashCommandBuilder} = require("discord.js");
const fs = require('fs'); // file system

const idx = (len) => Math.floor(Math.random() * (len)); // chooses random image number to send
const files = fs.readdirSync('images/LuluAndMomo'); // reads image files

module.exports = {
	data: new SlashCommandBuilder()
		.setName('luluandmomo')
		.setDescription('Kypohs cats'),

	async execute(interaction)
    {
        const image = files[idx(files.length)];
		interaction.reply({files: [`images/LuluAndMomo/${image}`]}) // send random image
		console.log(image);
	},
};
