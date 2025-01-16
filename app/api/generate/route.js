import clientPromise from "@/lib/mongodb"

export async function POST(request) {

    const body = await request.json()
    let client = await clientPromise;
    let db = client.db("Url-shortner")
    const collection = db.collection("url")

    //check if the short url exists
    const doc= await collection.findOne({shorturl: body.shorturl})
    if(doc){
        return Response.json({ sucess: false, error: true, message: "URL already exists" })
    }

    const result = await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl
    })
    return Response.json({ sucess: true, error: false, message: "URL generated successfully" })
}