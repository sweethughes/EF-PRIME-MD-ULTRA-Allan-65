{
  "name": "ef-prime-md-ultra",
  "description": "⚡ EF-PRIME-MD ULTRA - Advanced WhatsApp Bot Using Baileys Library with Quantum Core",
  "repository": "https://github.com/EF-PRIME-TECH/EF-PRIME-MD-ULTRA",
  "logo": "https://telegra.ph/file/fe4843a1261fc414542c4.jpg",
  "stack": "container",
  "keywords": [
    "whatsapp-bot",
    "multi-device", 
    "bot",
    "whatsapp",
    "baileys",
    "ef-prime",
    "quantum-core"
  ],
  "env": {
    "SESSION_ID": {
      "description": "Add your Session ID here if you want to connect via session download",
      "required": false,
      "value": "EF-PRIME-MD_iTE8N5WB"
    },
    "OWNER_NUMBER": {
      "description": "List of owner numbers (comma-separated), without '+' sign",
      "required": true,
      "value": "256791845294"
    },
    "BOT_NAME": {
      "description": "Display name of your bot",
      "required": false,
      "value": "EF-PRIME-MD-ULTRA"
    },
    "BOT_NUMBER": {
      "description": "WhatsApp phone number for pairing code (without '+' sign)",
      "required": true,
      "value": "256791845294"
    },
    "PACKNAME": {
      "description": "Sticker pack name",
      "required": false,
      "value": "⚡ EF-PRIME-MD ULTRA"
    },
    "AUTHOR": {
      "description": "Author name for sticker metadata",
      "required": false,
      "value": "💎 Frankkaumbadev"
    },
    "PREFIX": {
      "description": "Allowed command prefixes (comma-separated, no spaces)",
      "required": true,
      "value": "⚡,+,!,.,#,$"
    },
    "TIME_ZONE": {
      "description": "Your Time Zone (e.g., Africa/Malawi, UTC)",
      "required": false,
      "value": "EAT"
    },
    "PAIRING_CODE": {
      "description": "Set to 'false' to disable pairing code method",
      "required": false,
      "value": "false"
    },
    "ALWAYS_ONLINE": {
      "description": "Set to 'on' to make the bot always appear online",
      "required": false,
      "value": "on"
    },
    "PRIME_GROUP": {
      "description": "Prime WhatsApp group link",
      "required": false,
      "value": "true"
    },
    "MONGODB_URI": {
      "description": "MongoDB connection string for database (optional)",
      "required": false,
      "value": "false"
    },
    "HKEY": {
      "description": "Heroku API key - Get one from https://dashboard.heroku.com/account",
      "required": false,
      "value": "false"
    },
    "HAPP": {
      "description": "Heroku app name (same as the app name above)",
      "required": false,
      "value": "true"
    },
    "API_KEY": {
      "description": "Prime API key for advanced features",
      "required": false,
      "value": "true"
    },
    "GEMINI_API_KEY": {
      "description": "Google Gemini AI API key for AI features",
      "required": false,
      "value": "true"
    }
  },
  "buildpacks": [
    {
      "url": "heroku/nodejs"
    },
    {
      "url": "https://github.com/DuckyTeam/heroku-buildpack-imagemagick.git"
    },
    {
      "url": "https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest"
    },
    {
      "url": "https://github.com/clhuang/heroku-buildpack-webp-binaries.git"
    }
  ],
  "formation": {
    "web": {
      "quantity": 1,
      "size": "basic"
    }
  },
  "addons": [
    {
      "plan": "heroku-postgresql:mini",
      "as": "DATABASE"
    }
  ]
}
