import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkInfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //DynamoDB
    const solutionTable = new dynamodb.Table(this, "LeetcodeSolutionTable", {
      tableName: "LeetcodeSolutionTable",
      partitionKey: { name: "problemId", type: dynamodb.AttributeType.STRING },
      removalPolicy: cdk.RemovalPolicy.DESTROY, // only for this testing
    });
  }
}
