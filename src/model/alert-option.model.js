
export class AlertOption {
    text;
    onPress;
    style;
    constructor(text, onPress = () => {}, style) {
        this.text = text;
        this.onPress = onPress;
        this.style = style;
    }
}
