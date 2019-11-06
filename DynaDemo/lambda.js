let AWS = require('aws-sdk');
let SL_AWS = require('slappforge-sdk-aws');
const sqs = new SL_AWS.SQS(AWS);

exports.handler = function (event, context, callback) {
    debugger;

    let messageBody = "Hello World 2";
    sqs.sendMessage({
        MessageBody: messageBody,
        QueueUrl: `https://sqs.${process.env.AWS_REGION}.amazonaws.com/${process.env.SIGMA_AWS_ACC_ID}/sqs`,
        DelaySeconds: '0',
        MessageAttributes: {}
    }, function (data) {
        callback(null, { "message": "Published : " + messageBody });
    }, function (error) {
        callback(null, { "message": "Failed: " + error });
    });
}