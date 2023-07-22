const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('purge')
		.setDescription('deletes specified amount of messages.')
		.addIntegerOption(option => option.setName('amount').setDescription('Number of messages to purge')),
	async execute(interaction) {
		const amount = interaction.options.getInteger('amount');

		await interaction.channel.bulkDelete(amount, true).catch(error => {
			console.error(error);
			interaction.reply({ content: 'There was an error trying to purge messages in this channel!', ephemeral: true });
		});

		return interaction.reply({ content: `Successfully purged \`${amount}\` messages.`, ephemeral: true });
	},
};