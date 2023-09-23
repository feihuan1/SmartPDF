import {PineconeClient} from '@pinecone-database/pinecone'

let pinecone: PineconeClient | null = null

export const getPineconeClient = async () => {
    if(!pinecone) {
        pinecone = new PineconeClient()
        await pinecone.init({
            environment: process.env.PINECONE_ENVIROMENT!,
            apiKey: process.env.PINECONE_API_KEY!
        })
    }
    return pinecone
}

export async function loadS3IntoPinecone(file_key: string) {
    //download and read pdf


}

//npm install @pinecone-database/pinecone