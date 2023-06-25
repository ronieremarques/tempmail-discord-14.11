const Discord = require("discord.js")
module.exports = {
    name: "e-mail",
    description: "gerador de e-mails témporario",
    type: Discord.ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {
        interaction.channel.send({ 
            // cria a mensagem!
            embeds: [ 
                new Discord.EmbedBuilder()
                .setColor('#2f3136')
                .setDescription(`Clique no botão abaixo para gerar seu primeiro __e-mail__ temporario de 1 hora de uso, você pode gerar quantos quiser :D`) ],
            // cria um botão! 
            components: [ 
                new Discord.ActionRowBuilder().addComponents(
                new Discord.ButtonBuilder()
                .setCustomId('geraremail')
                .setLabel('E-mail descartável')
                .setStyle(Discord.ButtonStyle.Success)
                )]
            })
    }
}