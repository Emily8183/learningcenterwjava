import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as iam from "aws-cdk-lib/aws-iam";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkInfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //IAM role
    const leetcompareiamrole = new iam.Role(this, "leetcompareiamlogicalid", {
      roleName: "leetcomparelambdarole",
      description: "role for lambda service to access dynamoDB",
      assumedBy: new iam.ServicePrincipal("lambda.amazonaws.com"), //允许lambda函数访问这些资源
    });

    leetcompareiamrole.addManagedPolicy(
      iam.ManagedPolicy.fromAwsManagedPolicyName("AmazonDynamoDBFullAccess") //allow to access DynamoDB
    );
    leetcompareiamrole.addManagedPolicy(
      iam.ManagedPolicy.fromAwsManagedPolicyName("CloudWatchFullAccess") //allow to access Cloudwatch
    );

    //DynamoDB
    const solutionTable = new dynamodb.Table(this, "LeetcodeSolutionTable", {
      tableName: "LeetcodeSolutionTable",
      partitionKey: { name: "problemId", type: dynamodb.AttributeType.STRING },
      removalPolicy: cdk.RemovalPolicy.DESTROY, // only for this testing
    });

    //lambda
    const leetcompareLambda = new lambda.Function(this, "LeetCompareLambda", {
      handler: "leetcompare_Lambda.handler",
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset("./services/"),
      functionName: "lambdaFetchTable",
      role: leetcompareiamrole,
      environment: {
        TABLE_NAME: solutionTable.tableName, //matching: const table = process.env.TABLE_NAME;
      },
    });

    // API Gateway
    const leetcomparerestapi = new apigateway.RestApi(this, "LeetCompareApi", {
      restApiName: "leetcompareAPI",
      defaultCorsPreflightOptions: {
        //only works for OPTIONS, need to set in Lambda function too
        // allowOrigins: ["http://localhost:5173", "https://emily.brajk.me"],
        allowOrigins: apigateway.Cors.ALL_ORIGINS, // CDK中设置CORS（属于API Gateway层）
        allowMethods: apigateway.Cors.ALL_METHODS,
        allowHeaders: ["Content-Type", "x-api-key"],
      },
    });

    const apiKey = leetcomparerestapi.addApiKey("LeetCompareApiKey", {
      apiKeyName: "MyLeetCompAppKey",
    });

    const usagePlan = leetcomparerestapi.addUsagePlan("LeetCompareUsagePlan", {
      name: "EmilyLeetCompUsagePlan",
      apiStages: [
        {
          api: leetcomparerestapi,
          stage: leetcomparerestapi.deploymentStage,
        },
      ],
    });

    usagePlan.addApiKey(apiKey);

    const leetResource = leetcomparerestapi.root.addResource("leetResource"); //Authentication Token

    leetResource.addMethod(
      "GET",
      new apigateway.LambdaIntegration(leetcompareLambda),
      {
        apiKeyRequired: true,
      }
    ); // For fetching all problems (list), apiKey is required

    leetResource
      .addResource("{id}")
      .addMethod("GET", new apigateway.LambdaIntegration(leetcompareLambda), {
        apiKeyRequired: true,
      }); // For single problem detail
  }
}
