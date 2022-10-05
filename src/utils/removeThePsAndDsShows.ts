import { IShow } from "./Interfaces";

export default function removeThePsAndDs(oneShow: IShow): string | null {
  if (oneShow.summary != null) {
    oneShow.summary = oneShow.summary.replace("<p>", "");
    oneShow.summary = oneShow.summary.replace("</p>", "");
    oneShow.summary = oneShow.summary.replace("<d>", "");
    oneShow.summary = oneShow.summary.replace("</d>", "");
  }
  return oneShow.summary;
}
