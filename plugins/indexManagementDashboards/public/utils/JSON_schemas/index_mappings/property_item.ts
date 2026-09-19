import { INDEX_MAPPING_TYPES } from "../../constants";

export const schemaId = "ISMIndexMappingProperties";

export const typeSchema = {
  description: "이 필드의 타입",
  enum: INDEX_MAPPING_TYPES.map((item) => item.label),
};

export const propertiesSchema = {
  description: "이 필드의 속성",
  $ref: schemaId,
};
