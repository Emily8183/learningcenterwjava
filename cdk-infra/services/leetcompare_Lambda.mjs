//sdk for JS(v3)
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  GetCommand,
  ScanCommand,
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({ region: "us-east-1" });
const docClient = DynamoDBDocumentClient.from(client); //convert from dynamoDB format to JSON

const table = process.env.TABLE_NAME; //TABLE_NAME was set in the lambda
export async function handler(event) {
  const method = event.httpMethod;

  //if user clicks on a specific Id
  if (method === "GET" && event.pathParameters && event.pathParameters.id) {
    const problemId = event.pathParameters.id;

    try {
      const result = await docClient.send(
        new GetCommand({
          TableName: table,
          Key: { problemId },
        })
      );

      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:5173",
          "Access-Control-Allow-Headers": "Content-Type,x-api-key",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        },
        body: JSON.stringify(result.Item || {}), //turn the result.Item (as an object) to JSON
      };
    } catch (err) {
      //pre-set the catch/error for input box
      console.error(err);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to fetch problem" }),
      };
    }
  }

  if (method === "GET") {
    // check the entire prob list, only for testing otherwise may cause latency
    try {
      const result = await docClient.send(
        // Convert AWS SDK callback to Promise to use with await
        new ScanCommand({
          TableName: table,
          ProjectionExpression: "problemId, title",
        })
      );

      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:5173",
          "Access-Control-Allow-Headers": "Content-Type,x-api-key",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        },
        body: JSON.stringify(result.Items || {}), //note: Item"s"
      };
    } catch (err) {
      console.error("Scan error:", err);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to fetch problem list" }),
      };
    }
  }

  return {
    statusCode: 400,
    body: JSON.stringify({ message: "API received an unsupported request" }),
  };
}
