
const { App, Util, BasicLogging } = require('jovo-framework');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { Alexa } = require('jovo-platform-alexa');
const { JovoDebugger } = require('jovo-plugin-debugger');
const { BotAnalyticsAlexa } = require('jovo-analytics-botanalytics');
const _  = require('lodash');

const app = new App();
// Util.consoleLog();
app.use(
    new GoogleAssistant(),
    new Alexa(),
    new JovoDebugger(),
    new BotAnalyticsAlexa()
);

app.setHandler({
    async LAUNCH(jovo) {
        // await this.$user.load();
        this.toIntent('HelloWorldIntent');
        // this.tell('Hello');
        // await this.$user.save();
    },
    HelloWorldIntent() {
        this.ask('Hello World! What\'s your name?', 'Please tell me your name.');
    },
    MyNameIsIntent() {
        this.tell('Hey ' + this.$inputs.name.value + ', nice to meet you!');
    },
});


module.exports.app = app;
