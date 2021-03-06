const { MessageEmbed, Client } = require('discord.js');
require('dotenv').config();

module.exports = {
    /**
     * Reports a bug to the developers
     * @param {Client} client - The discord client
     * @param {String} username - The username of the user
     * @param {String} avatar - The avatar of the user
     * @param {String} description - The description of the bug
     */
    report: (client, username, avatar, description, reportFlag = module.exports.reportFlags.error) => {
        const embed = new MessageEmbed()
                .setAuthor({name: username, iconURL: avatar})
                .setDescription(description);

        switch (reportFlag) {
            case (module.exports.reportFlags.bug): {
                embed.setTitle("Bug Report");
                embed.setColor(0xDD2725);
                break;
            }
            case (module.exports.reportFlags.error): {
                embed.setTitle("Runtime Error");
                embed.setColor(0x401110);
                break;
            }
            case (module.exports.reportFlags.suggestion): {
                embed.setTitle("Suggestion");
                embed.setColor(0x00A2FF);
                break;
            }
            default : {
                embed.setTitle("Unknown Report");
                embed.setColor(0xE2CCF2);
                break;
            }
        }
    
        client.channels.cache.get(process.env.REPORT_CHANNEL_ID).send({embeds: [embed]});
    },
    reportFlags: {
        error: 0,
        bug: 1,
        suggestion: 2,
    }
}

