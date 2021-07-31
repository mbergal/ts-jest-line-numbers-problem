import { aws } from "dynamoose";

describe("Some thing", () => {
  it("some statement", async () => {
    throw new Error("111");
  });
});

export async function f() {
  try {
    aws.ddb();
  } catch (ex) {
    throw ex;
  }
}
