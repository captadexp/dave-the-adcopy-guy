print("Loaded guestcode")

chet.ui.onmessage = function (e) {
    chet.ui.close()
}


globalThis.action_processor = {
    onAction(actionMessage) {
        chet.ui.showUI(`<html>
<body>
Action: ${actionMessage.id}<br/>
Payload: ${JSON.stringify(actionMessage.payload || '""')}
</body>
<script type='application/javascript'>
    setTimeout(() => window.parent.postMessage("whooooo", "*"), 5000)
</script>
</html>`)
    },
    getAvailableActions() {
        return [];
    }
}

"success";
