import {
  DATABASE_ID,
  NOTIFICATIONS_COLLECTION_ID,
  VIEWS_COLLECTION_ID,
} from "../constants/database.constant";
import { databases, ID } from "../lib/appwrite";

export const reportInitVisit = async (data) => {
  // Create record in views database
  const createdViewsRecord = await databases.createDocument(
    DATABASE_ID,
    VIEWS_COLLECTION_ID,
    ID.unique(),
    { viewer: data.ip, viewedTime: 0 }
  );
  // Create record in notifications database
  const createdNotificationsRecord = await databases.createDocument(
    DATABASE_ID,
    NOTIFICATIONS_COLLECTION_ID,
    ID.unique(),
    {
      type: "visit",
      actorIP: data.ip,
      actorCountry: data.country_name,
      message: "Visited your portfolio for",
      totalTime: 0,
      isRead: false,
    }
  );

  return { createdViewsRecord, createdNotificationsRecord };
};

export const updateRecords = async (data) => {
  //console.log(data.createdNotificationID, data.createdViewID, data.totalTime)
  const resOne = await databases.updateDocument(
    DATABASE_ID,
    NOTIFICATIONS_COLLECTION_ID,
    data.createdNotificationID,
    { totalTime: data.totalTime }
  );
  const resTwo = await databases.updateDocument(
    DATABASE_ID,
    VIEWS_COLLECTION_ID,
    data.createdViewID,
    {
      viewedTime: data.totalTime,
    }
  );

  return { resOne, resTwo };
};

export const createClickRecord = async (data) => {
  const { fetchedData, message } = data;

  const response = await databases.createDocument(
    DATABASE_ID,
    NOTIFICATIONS_COLLECTION_ID,
    ID.unique(),
    {
      type: "click",
      actorIP: fetchedData.ip,
      actorCountry: fetchedData.country_name,
      message: message,
      totalTime: 0,
      isRead: false,
    }
  );

  return response;
};

export const getClientInformation = async () => {
  const response = await fetch("https://ipapi.co/json/");
  const data = await response.json();

  if (data.ip === "94.156.217.4") {
    return window.location = "https://www.google.com";
  }

  return data;
};
