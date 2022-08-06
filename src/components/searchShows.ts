import { IShow2 } from "../utils/IShow";

export function showTextInputFilter(oneShow: IShow2, text: string): boolean {
  const searchShowName: string = oneShow.name;
  const searchShowSummary: string = oneShow.summary ?? "";
  if (
    searchShowName.toLowerCase().includes(text.toLowerCase()) ||
    searchShowSummary.toLowerCase().includes(text.toLowerCase())
  ) {
    return true;
  }
  return false;
}