const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('purge') // command name
		.setDescription('deletes specified amount of messages.') // command description
		.addIntegerOption(option => option.setName('amount').setDescription('Number of messages to purge')) // integer option, the amount of messages memeber wants to delete
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages), // only show command if user has 'manage messages' permission
		
	async execute(interaction) {
		const amount = interaction.options.getInteger('amount');

		//delete amount of messages specified or error message
		await interaction.channel.bulkDelete(amount, true).catch(error => {
			console.error(error);
			interaction.reply({ content: 'There was an error trying to purge messages in this channel!', ephemeral: true });
		});

		return interaction.reply({ content: `Successfully purged \`${amount}\` messages.`, ephemeral: true }); //confirmation message, only viewable to member who called the command
	},
};
