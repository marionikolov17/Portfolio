import { DATABASE_ID, INBOX_COLLECTION_ID } from "../constants/database.constant"
import { databases, ID } from "../lib/appwrite"

export const createMessage = async (data) => {
    return await databases.createDocument(
        DATABASE_ID,
        INBOX_COLLECTION_ID,
        ID.unique(),
        data
    )
}