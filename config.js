const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918768622684";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_32_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzksXG4gICAgICAgIDM2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzLFxuICAgICAgICA3NixcbiAgICAgICAgMTM5LFxuICAgICAgICAzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTgsXG4gICAgICAgIDUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA2OSxcbiAgICAgICAgNyxcbiAgICAgICAgNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg5LFxuICAgICAgICA3OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgzLFxuICAgICAgICA4OCxcbiAgICAgICAgMzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgODgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgODYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTksXG4gICAgICAgIDgwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM1LFxuICAgICAgICA3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgNixcbiAgICAgICAgMTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDU5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDczLFxuICAgICAgICAyMTksXG4gICAgICAgIDc2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDM1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTc5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOSxcbiAgICAgICAgNDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDczLFxuICAgICAgICAxMjQsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MixcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUwLFxuICAgICAgICAzMixcbiAgICAgICAgOTEsXG4gICAgICAgIDI0LFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICAxMixcbiAgICAgICAgODQsXG4gICAgICAgIDE2MixcbiAgICAgICAgNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODIsXG4gICAgICAgIDQ3LFxuICAgICAgICA4MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0LFxuICAgICAgICAxOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzLFxuICAgICAgICAxMixcbiAgICAgICAgMTYyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDcsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJoOWlndjcySE5OTmhXaC9aSkg2ek9kb3VaS0ZkNG1DQWFOVHh4bjVYbTFZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJtNU4yeEdTQ1FjbWkwZnlYOFROdzF3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjMyZTQ2NmQ0LWVjMzYtNDBiZi1iYjllLTIwNDY5OGYyY2I0M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNCxcbiAgICAgIDE4OCxcbiAgICAgIDU3LFxuICAgICAgMjEzLFxuICAgICAgMjE0LFxuICAgICAgNjYsXG4gICAgICA4OCxcbiAgICAgIDIwOSxcbiAgICAgIDI4LFxuICAgICAgNjgsXG4gICAgICAyNyxcbiAgICAgIDI0LFxuICAgICAgNTAsXG4gICAgICAyMzAsXG4gICAgICAxOTUsXG4gICAgICA3NSxcbiAgICAgIDQ5LFxuICAgICAgODgsXG4gICAgICAxNjYsXG4gICAgICAxODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgwLFxuICAgICAgNTUsXG4gICAgICAyNDgsXG4gICAgICA0NCxcbiAgICAgIDk3LFxuICAgICAgMjEwLFxuICAgICAgMTMxLFxuICAgICAgMTU5LFxuICAgICAgNzMsXG4gICAgICAxMTIsXG4gICAgICAyMTQsXG4gICAgICAxNjgsXG4gICAgICAxNyxcbiAgICAgIDIwMCxcbiAgICAgIDQxLFxuICAgICAgMTg1LFxuICAgICAgMjksXG4gICAgICAxODcsXG4gICAgICAxMjYsXG4gICAgICAzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzWDhHUDlOOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE4NzY4NjIyNjg0OjU2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NzQ1ODEyMjg0MjIyNzo1NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQS2gvbzhGRUo3NG9MUUdHQklnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZGODZUVGR2VUlCUTZkTWJhdDFDWklYTnROZGVLb3VsWDhiMmJacVp6Mkk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiT1JFajNJekhQMGw5WkhHbmVDSElVUWxiQkVCVVBDZ2FVUFNtYzkwbm5WUklBNG9SdGpBLytIYkJnY1Y4YkNVZEFyOHJabk5ESFFwL3ZORUNoWUE4Qnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYUlIMnpPbVJWVVQyMnA5Y1ExMjE2dW4wMmc4VVpBN0RLb2I0THBDaHhYOVhwdGN2RjlEY1MremwvYkhrU1M1OW5BMnFIRGljeVRQY1QxazZCZkFRREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE4NzY4NjIyNjg0OjU2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyMDQzMjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGUk9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZSTy5qc29uIjogIntcImtleURhdGFcIjpcIkJKUWIxZFpBSlgvZXB6cFdYWmYvQTBsM05WellHUFpwZjFub0JKUEg5eGc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM3NTcwMzI4MixcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4MDE3NTIzODY5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
