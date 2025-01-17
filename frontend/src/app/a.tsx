import { createClient } from "@connectrpc/connect";
import { createGrpcTransport } from "@connectrpc/connect-node";
import { Greeter } from "../../gen/helloworld_pb";

async function request() {
    const transport = createGrpcTransport({
        baseUrl: "http://localhost:50051",
    })
    const client = createClient(Greeter, transport)
    const reply = await client.sayHello({'name': "ryo"})
    return `Message is: ${reply.message}`
}

export async function A() {
    const data = await request();

    return <h1>{data}</h1>
}