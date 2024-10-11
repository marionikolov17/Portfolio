import { Query } from "appwrite"
import { CERTIFICATES_COLLECTION_ID, DATABASE_ID } from "../constants/database.constant"
import { databases } from "../lib/appwrite"

export const getCertificates = async () => {
    return await databases.listDocuments(
        DATABASE_ID,
        CERTIFICATES_COLLECTION_ID,
        [
            Query.orderAsc("index")
        ]
    )
}