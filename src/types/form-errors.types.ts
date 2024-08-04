import esJson from "@translations/es.json"

export type NameErrors = keyof typeof esJson["FORM-ERRORS"]["NAME"];
export type EmailErrors = keyof typeof esJson["FORM-ERRORS"]["EMAIL"];
export type MessageErrors = keyof typeof esJson["FORM-ERRORS"]["MESSAGE"];
export type SubjectErrors = keyof typeof esJson["FORM-ERRORS"]["SUBJECT"];