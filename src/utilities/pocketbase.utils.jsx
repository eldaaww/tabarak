import { pocketbaseURL } from "@/constants";

export const getImageUrl = (record, fileName) => `${pocketbaseURL}/api/files/${record.collectionId}/${record.id}/${fileName}`;
export const getPropertyCatalouge = (record, fileName) => `${pocketbaseURL}/api/files/${record.collectionId}/${record.id}/${fileName}`;