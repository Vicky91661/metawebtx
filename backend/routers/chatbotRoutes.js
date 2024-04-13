const express = require("express")
const router = express.Router()

const {postMessage ,getAllMessages,deleteMessage}=require("./../controller/chatboatController")

router.post("/message",postMessage)
router.get("/messages",getAllMessages)
router.delete("/message",deleteMessage)

module.exports  = router;