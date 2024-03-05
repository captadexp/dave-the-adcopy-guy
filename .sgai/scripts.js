export default {
    action_processor: {
        onAction(actionMessage, payload) {
            chet.alert("hello")
        },
        getAvailableActions() {
            return ["generate_img"]
        }
    }
}
